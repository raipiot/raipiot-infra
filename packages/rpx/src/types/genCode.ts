export enum CodeType {
  API = 'API',
  FEATURE = 'Feature',
  HOOK = 'Hook',
  COMPONENT = 'Component',
  TABLE = 'Table',
  MODAL = 'Modal',
  STANDARD_TABLE_PAGE = 'Standard table page',
  TREE_TABLE_PAGE = 'Tree table page',
  STANDARD_FEATURE = 'standard-feature',
  TREE_FEATURE = 'tree-feature'
}

export type CodeTypeKey = keyof typeof CodeType
