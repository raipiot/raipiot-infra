# @raipiot-infra/cspell

![npm](https://img.shields.io/npm/v/@raipiot-infra/cspell?logo=npm&label=cspell&registry_uri=http%3A%2F%2Fnpm-registry.raipiot.com%3A4873)

raipiot infra 通用字典。

我们使用 CSpell 来对代码进行英文拼写检查，每次提交时会检查代码中是否存在英文单词拼写错误。

## 安装

```bash
pnpm add -D cspell @raipiot-infra/cspell
```

## 配置

在项目根目录添加 `.cspell.json` 文件，引入 `@raipiot-infra/cspell` 配置文件，内容如下：

```json
{
  "$schema": "https://raw.githubusercontent.com/streetsidesoftware/cspell/main/cspell.schema.json",
  "version": "0.2",
  "language": "en",
  "dictionaries": ["custom-words"],
  "dictionaryDefinitions": [
    {
      "name": "custom-words",
      "path": ".cspell.txt",
      "addWords": true
    }
  ],
  "import": ["@raipiot-infra/cspell"]
}
```

在 `package.json` 中添加 `cspell` 脚本：

```json
{
  "scripts": {
    "cspell:check": "cspell --no-progress --show-suggestion --show-context --cache **"
  }
}
```
