import { act, renderHook } from '@testing-library/react'

import { useBoolean } from '..'

// result.current will change after each render!!!

// 1. test useBoolean
// 2. should be init value
// 3. should be toggle value

describe('test useBoolean', () => {
  it('should be init value', () => {
    const {
      result: { current }
    } = renderHook(() => useBoolean())
    const [value] = current
    expect(value).toBe(false)
  })

  it('call toggleWithCallback should be toggle value', () => {
    const { result } = renderHook(() => useBoolean(true))
    expect(result.current[0]).toBe(true)
    act(result.current[3])
    expect(result.current[0]).toBe(false)
    act(() => result.current[3](() => 1))
    expect(result.current[0]).toBe(true)
  })

  it('should be set value', () => {
    const { result } = renderHook(() => useBoolean())
    act(() => result.current[2](true))
    expect(result.current[0]).toBe(true)
    act(() => result.current[2](false))
    expect(result.current[0]).toBe(false)
  })

  it('call toggleWithCallback should execute callback with hooks params', async () => {
    const callback = vi.fn()
    const { result } = renderHook(() => useBoolean(false, callback))
    act(() => result.current[3]())
    await vi.waitFor(callback)
    expect(callback).toBeCalledTimes(1)
  })

  it('should execute callback with toggle params', async () => {
    const { result } = renderHook(() => useBoolean(false))
    const callback = vi.fn()
    act(() => result.current[1](callback))
    await vi.waitFor(callback)
    expect(callback).toBeCalledTimes(1)
    act(() => result.current[1](callback))
    await vi.waitFor(callback)
    expect(callback).toBeCalledTimes(2)
  })

  it('should be set value with invalid value', () => {
    const { result } = renderHook(() => useBoolean())
    // @ts-expect-error test
    expect(() => result.current[2](1)).toThrowError()
  })
})
