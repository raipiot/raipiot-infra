import { isEqual, isFunction } from 'lodash-es'
import { useState } from 'react'

export const useToggle = <T, K>({
  initialValue,
  reverseValue,
  onChange
}: {
  initialValue: T
  reverseValue: K
  onChange?: (value: T | K) => unknown
}) => {
  const [value, setValue] = useState<T | K>(initialValue)

  const toggle = () => {
    setValue((prev) => (isEqual(prev, initialValue) ? reverseValue : initialValue))
  }

  const toggleWithCallback = (cb = onChange) => {
    setValue((prev) => {
      const newValue = isEqual(prev, initialValue) ? reverseValue : initialValue
      // 确保回调拿到的是最新的值
      if (isFunction(cb)) requestAnimationFrame(() => cb(newValue))
      return newValue
    })
  }

  return [value, toggle, setValue, toggleWithCallback] as const
}
