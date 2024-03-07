import { act, renderHook } from '@testing-library/react'

import { useToggle } from '..'

// result.current will change after each render!!!

// 1. test useToggle
// 2. should be init value and toggle to reverse value
// 3. should be x after setValue
// 4. should throw error with invalid value

describe('test useToggle', () => {
  it('should be init value and toggle to reverse value', () => {
    const { result } = renderHook(() =>
      useToggle({
        initialValue: 1,
        reverseValue: 2
      })
    )
    expect(result.current[0]).toBe(1)
    act(result.current[1])
    expect(result.current[0]).toBe(2)
    act(result.current[1])
    expect(result.current[0]).toBe(1)
  })

  it('Call toggleWithCallback should be init value and toggle to reverse value', () => {
    const { result } = renderHook(() =>
      useToggle<0, 'x'>({
        initialValue: 0,
        reverseValue: 'x'
      })
    )
    expect(result.current[0]).toBe(0)
    act(result.current[3])
    expect(result.current[0]).toBe('x')
    act(result.current[3])
    expect(result.current[0]).toBe(0)
  })

  it('should be x after setValue', () => {
    const { result } = renderHook(() =>
      useToggle<0, 'x'>({
        initialValue: 0,
        reverseValue: 'x'
      })
    )
    expect(result.current[0]).toBe(0)
    act(() => result.current[2]('x'))
    expect(result.current[0]).toBe('x')
  })

  it('should execute callback with hook callback', async () => {
    const callback = vi.fn()
    const { result } = renderHook(() =>
      useToggle({
        initialValue: 0,
        reverseValue: 'x',
        onChange: callback
      })
    )
    act(() => result.current[1]())
    await vi.waitFor(callback)
    expect(callback).toBeCalledTimes(1)
    act(() => result.current[1]())
    await vi.waitFor(callback)
    expect(callback).toBeCalledTimes(2)
  })

  it('Call toggleWithCallback should execute callback with toggle params', async () => {
    const { result } = renderHook(() =>
      useToggle({
        initialValue: 0,
        reverseValue: 'x'
      })
    )
    const callback = vi.fn()
    act(() => result.current[3](callback))
    await vi.waitFor(callback)
    expect(callback).toBeCalledTimes(1)
    act(() => result.current[3](callback))
    await vi.waitFor(callback)
    expect(callback).toBeCalledTimes(2)
  })
})
