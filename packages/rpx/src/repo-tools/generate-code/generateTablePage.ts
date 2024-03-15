import fs from 'node:fs'
import path from 'node:path'

import inquirer from 'inquirer'

import { t } from '../../i18n'
import {
  askForPluralAndSingular,
  getRaipiotConfigRootPath,
  transferTemplateAndGenerateResult
} from '../../utils'
import {
  defaultFuzzySearchQuestion,
  generateCamelCase,
  generateConstantCase,
  generatePascalCase
} from './common'

export const generateTablePage = async (isStandard: boolean) => {
  const rootPath = await getRaipiotConfigRootPath()
  const { routeName } = await inquirer.prompt([
    {
      type: 'text',
      name: 'routeName',
      message: t('Generate.Code.Input_Route_Name')
    }
  ])
  const { plural: pluralName, singular: singularName } = await askForPluralAndSingular(routeName)

  // 找到路由目录，确认是否存在
  const {
    routeDir,
    featureDir,
    apiDir,
    apiPrefix = '/raipiot-system',
    queryKeyPrefix = ''
  } = await inquirer.prompt([
    {
      ...defaultFuzzySearchQuestion,
      name: 'routeDir',
      message: t('Generate.Code.Select_Route_Dir'),
      rootPath
    },
    {
      ...defaultFuzzySearchQuestion,
      name: 'featureDir',
      message: t('Generate.Code.Select_Feature_Dir'),
      rootPath
    },
    {
      ...defaultFuzzySearchQuestion,
      name: 'apiDir',
      message: t('Generate.Code.Select_API_Dir'),
      rootPath
    },
    // {
    //   type: 'text',
    //   name: 'apiName',
    //   message: t('Generate.Code.Input_API_Name')
    // }
    {
      type: 'text',
      name: 'apiPrefix',
      message: t('Generate.Code.Input_API_Prefix')
    },
    {
      type: 'text',
      name: 'queryKeyPrefix',
      message: 'Please input the prefix of query key:'
    }
  ])

  const routePath = path.join(routeDir, pluralName)
  const featurePath = path.join(featureDir, pluralName)
  const apiPath = path.join(apiDir, pluralName)

  const slot = {
    pcName: generatePascalCase(singularName),
    pcNames: generatePascalCase(pluralName),
    ccName: generateCamelCase(singularName),
    ccNames: generateCamelCase(pluralName),
    constName: generateConstantCase(singularName),
    constNames: generateConstantCase(pluralName),
    apiPrefix,
    constApiPrefix: generateConstantCase(apiPrefix),
    featureName: featurePath.replace(/^.*feature(s)?\//, ''),
    queryKeyPrefix: generateCamelCase(queryKeyPrefix),
    constQueryKeyPrefix: generateConstantCase(queryKeyPrefix)
  }

  // 加载模板，修改模板，写入文件
  await transferTemplateAndGenerateResult({
    type: isStandard ? 'STANDARD_TABLE_PAGE' : 'TREE_TABLE_PAGE',
    templatePrefixPath: 'table-page',
    slot,
    targetPath: routePath
  })
  // 再加载 table_page_feature 模板，修改模板，写入文件
  await transferTemplateAndGenerateResult({
    slot,
    type: isStandard ? 'STANDARD_FEATURE' : 'TREE_FEATURE',
    targetPath: featurePath,
    templatePrefixPath: 'table-page'
  })
  await transferTemplateAndGenerateResult({
    slot,
    type: 'API',
    targetPath: apiPath
  })
  // // 更新 api 目录下的 index.ts，追加一行导入语句
  const apiIndexFile = path.join(apiPath, 'index.ts')
  if (fs.existsSync(apiIndexFile) && fs.statSync(apiIndexFile).isFile()) {
    fs.appendFileSync(apiIndexFile, `export * from './${singularName}`)
  }
}
