import { useCallback, useState } from 'react'


export const useRefresh = <T>(callback?: () => Promise<T>) => {
  const [refreshing, setRefreshing] = useState(false)

  const onRefreshCallback = useCallback(async () => {
    setRefreshing(true)
    if (callback) {
      await callback()
    }
    setRefreshing(false)
  }, [callback])

  const onRefresh = () => onRefreshCallback()

  const startRefresh = () => setRefreshing(true)

  const endRefresh = () => setRefreshing(false)

  return {
    refreshing,
    onRefresh,
    startRefresh,
    endRefresh
  }
}
