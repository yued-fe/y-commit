# y-commit

1. [husky](https://www.npmjs.com/package/husky)
2. [cz-conventional-changelog](https://www.npmjs.com/package/cz-conventional-changelog)
3. [@commitlint/cli](https://www.npmjs.com/package/@commitlint/cli)
4. [@commitlint/config-conventional](https://www.npmjs.com/package/@commitlint/config-conventional)

安装了以上四个依赖。

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
$ npm run cz
```

> 原来需要 `git add . && git commit -m'feat: commit msg'`

## 安装 / Install

```bash
$ npm i y-commit --dev
# or
$ yarn add y-commit --dev
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


