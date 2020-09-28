# y-commit


[npm-badge-husky]: https://img.shields.io/npm/v/husky.svg
[npm-url-husky]: https://www.npmjs.org/package/husky

[npm-badge-cz]: https://img.shields.io/npm/v/cz-conventional-changelog.svg
[npm-url-cz]: https://www.npmjs.org/package/cz-conventional-changelog

[npm-badge-cli]: https://img.shields.io/npm/v/@commitlint/cli.svg
[npm-url-cli]: https://www.npmjs.org/package/@commitlint/cli

[npm-badge-config]: https://img.shields.io/npm/v/@commitlint/config-conventional.svg
[npm-url-config]: https://www.npmjs.org/package/@commitlint/config-conventional

[npm-badge-changelog]: https://img.shields.io/npm/v/conventional-changelog-cli.svg
[npm-url-changelog]: https://www.npmjs.org/package/conventional-changelog-cli

|包名| 地址 |
|---|---|
| husky |[![npm package][npm-badge-husky]][npm-url-husky]|
| cz-conventional-changelog |[![npm package][npm-badge-cz]][npm-url-cz]|
| @commitlint/cli |[![npm package][npm-badge-cli]][npm-url-cli]|
| @commitlint/config-conventional |[![npm package][npm-badge-config]][npm-url-config]|
| conventional-changelog-cli |[![npm package][npm-badge-changelog]][npm-url-changelog]|

安装了以上5个依赖。

原来提交需要:

```bash
$ git add .
$ git commit -m'feat: commit msg'
```

现在:

```bash
$ npm run cz  // 然后通过询问的方式选择提醒信息的类别，并输入提交信息
```

## 使用 / use

以后想要 `commit` 代码，只需要使用这个命令即可。

```bash
$ npm run cz  # 替换 git add . && git commit -m'feat: commit msg'
$ npm run log # 添加日志
```

## 安装 / Install

```bash
$ npm i y-commit --dev
$ npx y-commit
```

## 配置 / Config

添加以下配置到 `package.json`

```json
{
  "scripts": {
    "cz": "git add . && git cz"
  },
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged",
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
  },
  "config": {
    "commitizen": {
      "path": "./node_modules/cz-conventional-changelog"
    }
  }
}
```

拷贝配置以下文件到 `package.json` 文件夹。

`commitlint.config.js`


