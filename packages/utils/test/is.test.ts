import { describe, expect, it } from 'vitest'

import { IsUtils } from '@/is'

describe('IsUtils', () => {
  it('isNumber', () => {
    expect(IsUtils.isNumber(1.25)).toEqual(true)
    expect(IsUtils.isNumber(0)).toEqual(true)
    expect(IsUtils.isNumber('1')).toEqual(false)
    expect(IsUtils.isNumber(NaN)).toEqual(true)
    expect(IsUtils.isNumber(null)).toEqual(false)
  })

  it('isDef', () => {
    expect(IsUtils.isDef('')).toEqual(true)
    expect(IsUtils.isDef(0)).toEqual(true)
    expect(IsUtils.isDef(null)).toEqual(false)
    expect(IsUtils.isDef(undefined)).toEqual(false)
  })

  it('isArray', () => {
    expect(IsUtils.isArray([])).toEqual(true)
    expect(IsUtils.isArray('[array]' as any)).toEqual(false)
  })

  it('isObject', () => {
    expect(IsUtils.isObject({})).toEqual(true)
    expect(IsUtils.isObject(null)).toEqual(false)
    expect(IsUtils.isObject('{name: "bruce"}')).toEqual(false)
  })

  it('isFunction', () => {
    expect(IsUtils.isFunction(() => {})).toEqual(true)
    expect(IsUtils.isFunction(null)).toEqual(false)
    expect(IsUtils.isFunction('() => {}')).toEqual(false)
  })

  it('isPromise', () => {
    const promise = new Promise(() => {})
    const func = () => {}
    func.then = () => {}
    func.catch = () => {}
    expect(IsUtils.isPromise(promise)).toEqual(true)
    expect(IsUtils.isPromise('promise')).toEqual(false)
    expect(IsUtils.isPromise(func)).toEqual(true)
  })

  it('isFalsy', () => {
    expect(IsUtils.isFalsy('')).toEqual(true)
    expect(IsUtils.isFalsy(undefined)).toEqual(true)
    expect(IsUtils.isFalsy(null)).toEqual(true)
    expect(IsUtils.isFalsy(0)).toEqual(true)
    expect(IsUtils.isFalsy(NaN)).toEqual(true)
    expect(IsUtils.isFalsy(false)).toEqual(true)
    expect(IsUtils.isFalsy('false')).toEqual(false)
  })
})
