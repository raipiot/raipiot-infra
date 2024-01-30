# @raipiot-infra/commitlint-config

![npm](https://img.shields.io/npm/v/@raipiot-infra/commitlint-config?logo=commitlint&label=commitlint-config&registry_uri=http%3A%2F%2Fnpm-registry.raipiot.com%3A4873)

## 安装

```bash
pnpm add -D @commitlint/cli @commitlint/config-conventional cz-git commitizen @raipiot-infra/commitlint-config
```

## 配置

在根目录下添加 `.commitlintrc.json` 文件，内容如下：

```json
{
  "extends": ["@raipiot-infra/commitlint-config"]
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
