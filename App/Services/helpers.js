import _ from 'lodash';

export function objectToQueryString(obj){
  const results = [];
  _.forOwn(obj, (value, key) => {
    if (Array.isArray(value)) {
      _.forOwn(value, value => {
        results.push(`${key}[]=${value}`)
      })
    } else {
      results.push(`${key}=${value}`)
    }
  })
  return results.join('&')
}

const isFunction = input => typeof input === 'function'

export const renderIf =  predicate => elemOrThunk =>
  predicate ? (isFunction(elemOrThunk) ? elemOrThunk() : elemOrThunk) : null
