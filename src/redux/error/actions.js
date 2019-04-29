/*
 * action types
 */

export const DISPLAY_ERROR = 'DISPLAY_ERROR'
export const HIDE_ERROR = 'HIDE_ERROR'

/*
 * action creators
 */

export function displayErrorAction(data) {
  return { type: DISPLAY_ERROR, payload: data }
}
export function hideErrorAction() {
  return { type: HIDE_ERROR }
}