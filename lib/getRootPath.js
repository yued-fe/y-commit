const fse = require('fs-extra');
const path = require('path');

/**
 * 获取项目目录
 * @returns {Promise<string|boolean>}
 */
getRootPath = async function () {
  // 获取当前命令的执行目录，注意和项目目录区分
  const cwd = process.cwd();
  let arrCwd = cwd.split('/');
  while (arrCwd.length > 1) {
    const pathThisDir = arrCwd.join('/');
    const pathPackage = path.join(pathThisDir, 'package.json');
    // 是否在项目根目录运行
    const exists = await fse.pathExists(pathPackage);
    if (exists) {
      return pathThisDir;
    }
    arrCwd.pop();
  }
  return false;
};

module.exports = getRootPath;
