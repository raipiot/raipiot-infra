import fs from 'fs'
import inquirer from 'inquirer'
import path from 'path'
import prompts from 'prompts'

export const generateAPI = async () => {
  console.log('Generating API', globalThis.raipiotConfig)
  // 找到路由目录，确认是否存在
  const { raipiotConfig } = globalThis
  const {
    genCode: {
      rootPath = './packages',
      paths: { api: apiPath = './api/src' }
    }
  } = raipiotConfig!
  const apiFolderPath = path.join(globalThis.projectRootPath, rootPath, apiPath)
  const isExistAPIFolder = fs.existsSync(apiFolderPath)
  if (!isExistAPIFolder) {
    const { isCreate } = await prompts({
      type: 'confirm',
      name: 'isCreate',
      message: `Directory ${apiFolderPath} not found, do you want to create one?`,
      initial: true
    })
    if (isCreate) {
      fs.mkdirSync(apiFolderPath, { recursive: true })
    } else {
      process.exit(0)
    }
  } else {
    const { targetApiFolder, apiName } = await inquirer.prompt([
      {
        type: 'fuzzy-search',
        name: 'targetApiFolder',
        rootPath: apiFolderPath,
        itemType: 'directory',
        message: 'Please select the API directory you want to generate:',
        depthLimit: 5,
        loop: false
      },
      {
        type: 'text',
        name: 'apiName',
        message: 'Please input the API name:'
      }
    ])
    console.log(targetApiFolder, apiName)
    // 创建文件夹
    fs.mkdirSync(path.join(targetApiFolder, apiName), { recursive: true })
    // 加载模板，修改模板，写入文件
  }
}
