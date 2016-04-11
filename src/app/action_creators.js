
export const setState = (state) => ({
  meta: { remote: false },
  type: 'SET_STATE',
  state
})

export const replaceState = (state) => ({
  meta: { remote: false },
  type: 'REPLACE_STATE',
  state
})

export const resetState = () => ({
  meta: { remote: false },
  type: 'RESET_STATE',
})
