# @raipiot-infra/commitlint

![npm](https://img.shields.io/npm/v/@raipiot-infra/commitlint?logo=commitlint&label=commitlint&registry_uri=http%3A%2F%2Fnpm-registry.raipiot.com%3A4873)

## 安装

```bash
pnpm add -D @commitlint/cli @commitlint/config-conventional cz-git commitizen @raipiot-infra/commitlint
```

## 配置

在根目录下添加 `.commitlintrc.json` 文件，内容如下：

```json
{
  "extends": ["@raipiot-infra/commitlint"]
}
```

在 `package.json` 中添加：

```json
{
  "scripts": {
    "cz": "git-cz"
  },
  "config": {
    "commitizen": {
      "path": "node_modules/cz-git"
    }
  }
}
```

在 `husky` 的 `commit-msg` 钩子中添加：

```bash
echo "npx --no -- commitlint --edit \"$1\"" > .husky/commit-msg
```

通过 `git-cz` 命令来提交代码：

```bash
git add .
pnpm cz
```
