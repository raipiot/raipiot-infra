import { isFunction } from 'lodash-es'
import { useState } from 'react'

import { INVALID_PARAMS } from '../common'

/**
 * Custom hook that provides a boolean state value and utility functions to manipulate it.
 *
 * @param initialValue - The initial value of the boolean state (optional).
 * @param cb - A callback function that will be called when the boolean state changes (optional).
 * @returns An array containing the boolean state value, a toggle function to toggle the state, and a function to set the state.
 */
export const useBoolean = (initialValue = false, callback?: (newValue?: boolean) => unknown) => {
  const [value, setValue] = useState(!!initialValue)

  const toggleWithCallback = (cb = callback) => {
    setValue((prev) => {
      // 确保回调拿到的是最新的值
      if (isFunction(cb)) {
        requestAnimationFrame(() => cb(!prev))
      }
      return !prev
    })
  }

  const toggle = (_?: unknown) => {
    setValue((prev) => !prev)
  }

  return [
    value,
    toggle,
    (v: boolean | React.SetStateAction<boolean>) => {
      if (typeof v === 'boolean' || isFunction(v)) {
        setValue(v)
      } else {
        throw new Error(INVALID_PARAMS)
      }
    },
    toggleWithCallback
  ] as const
}
