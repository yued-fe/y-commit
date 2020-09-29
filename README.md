[npm-badge-y]: https://img.shields.io/npm/v/y-commit.svg
[npm-url-y]: https://www.npmjs.org/package/y-commit

[npm-badge-husky]: https://img.shields.io/npm/v/husky.svg
[npm-url-husky]: https://www.npmjs.org/package/husky

[npm-badge-cz]: https://img.shields.io/npm/v/cz-conventional-changelog.svg
[npm-url-cz]: https://www.npmjs.org/package/cz-conventional-changelog

[npm-badge-commitizen]: https://img.shields.io/npm/v/commitizen.svg
[npm-url-commitizen]: https://www.npmjs.org/package/commitizen

[npm-badge-cli]: https://img.shields.io/npm/v/@commitlint/cli.svg
[npm-url-cli]: https://www.npmjs.org/package/@commitlint/cli

[npm-badge-config]: https://img.shields.io/npm/v/@commitlint/config-conventional.svg
[npm-url-config]: https://www.npmjs.org/package/@commitlint/config-conventional

[npm-badge-changelog]: https://img.shields.io/npm/v/conventional-changelog-cli.svg
[npm-url-changelog]: https://www.npmjs.org/package/conventional-changelog-cli

[npm-badge-lint]: https://img.shields.io/npm/v/lint-staged.svg
[npm-url-lint]: https://www.npmjs.org/package/lint-staged


# y-commit

[![npm package][npm-badge-y]][npm-url-y]

|包名| 地址 | 描述 |
|---|---|---|
| husky |[![npm package][npm-badge-husky]][npm-url-husky]| 增强 git commit |
| lint-staged |[![npm package][npm-badge-lint]][npm-url-lint]| 只校验提交的代码 |
| commitizen |[![npm package][npm-badge-commitizen]][npm-url-commitizen]| 可视化的选择 commit 信息 |
| cz-conventional-changelog |[![npm package][npm-badge-cz]][npm-url-cz]| 生成日志 |
| conventional-changelog-cli |[![npm package][npm-badge-changelog]][npm-url-changelog]| 日志 CLI |
| @commitlint/cli |[![npm package][npm-badge-cli]][npm-url-cli]| commitlint 规范  |
| @commitlint/config-conventional |[![npm package][npm-badge-config]][npm-url-config]| commitlint 配置  |

提交规范合集， 安装了以上所有依赖。

## 使用 / use

```bash
$ yarn cz  # 相当于 git add . && git commit -m'feat: commit msg'
```

以后想要 `commit` 代码，只需要使用这个命令即可。

```bash
$ yarn log # 添加日志
```

按照版本号自动生成 `CHANGELOG.md` 到你的工作根目录。

## 安装 / Install

```bash
$ yarn add y-commit --dev
```

## 配置 / Config

```bash
$ npx y-commit
```

安装好插件之后，只需要跑一下这个命令，就会增量的，添加以下配置到你的项目 `package.json`中。

```json
{
  "scripts": {
    "cz": "git add . && git cz",
     "log": "conventional-changelog -p angular -i CHANGELOG.md -s -r 0 && git add CHANGELOG.md"
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

并拷贝 `commitlint.config.js`文件到 `package.json` 文件夹相同目录。




