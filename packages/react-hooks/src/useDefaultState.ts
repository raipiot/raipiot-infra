import { useState } from 'react'

export const useDefaultState = <T>(defaultValue: T) => {
  const [value, setValue] = useState(defaultValue)

  const reset = () => setValue(defaultValue)

  return [value, setValue, reset] as const
}
