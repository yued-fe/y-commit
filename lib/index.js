const fse = require('fs-extra');
const path = require('path');

const getRootPath = require('./getRootPath');

// 当前 package.js
const pkgCurrent= require("../package.json");

function Index() {
  // 初始化
  this.init();
}

Index.prototype.init = async function () {
  const rootPath = await getRootPath();
  if (!rootPath) {
    console.log('未找到包含 package.json 文件的项目目录!');
    return;
  }
  this.setPkg(rootPath);
  this.copyCommitConfig(rootPath);
};

/**
 * 拷贝当前 'commitlint.config.js' 文件到目标目录
 * @param {string} rootPath - 目标项目根目录
 */
Index.prototype.copyCommitConfig=function(rootPath){
  const dirCurrent= path.join(__dirname, '../commitlint.config.js');
  const dirTargetCommit = path.join(rootPath, 'commitlint.config.js');
  if(!fse.pathExistsSync(dirTargetCommit)){
    fse.copySync(dirCurrent, dirTargetCommit);
    console.log('commitlint.config.js 文件拷贝成功');
  }else{
    console.log('commitlint.config.js 已存在');
  }
};

/**
 * 修改 package.json 文件
 * @param { string } dirTarget
 */
Index.prototype.setPkg=function(rootPath){
  const dirTarget = path.join(rootPath, 'package.json');
  const pkgTarget = fse.readJsonSync(dirTarget, {throws: false});
  if (!pkgTarget || !pkgCurrent) {
    console.log('未找到两个 package.json 文件');
    return;
  }
  const {scripts = {}, husky = {}, config = {}} = pkgTarget;

  // 设置快捷命令
  if (!scripts.cz) {
    scripts.cz = pkgCurrent.scripts.cz;
  }
  if (!scripts.log) {
    scripts.log = pkgCurrent.scripts.log;
  }
  pkgTarget.scripts = scripts;

  // 设置 husky 命令
  if (!husky.hooks) {
    husky.hooks = pkgCurrent.husky.hooks;
  } else {
    husky.hooks = {...pkgCurrent.husky.hooks, ...husky.hooks}
  }
  pkgTarget.husky = husky;

  // 设置 config 信息
  if (!config.commitizen) {
    config.commitizen = pkgCurrent.config.commitizen;
  } else {
    config.commitizen = {...pkgCurrent.config.commitizen, ...config.commitizen}
  }
  pkgTarget.config = config;

  // 写入文件
  fse.writeJsonSync(dirTarget, pkgTarget, {
    spaces: '  '
  });
  console.log('packge.json 文件修改成功');
};

module.exports = Index;
