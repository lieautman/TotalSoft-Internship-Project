export function init(initialState) {
  return { stare: initialState }
}

export function reducer(state, action, idRand) {
  switch (action.type) {
    case 'selecteazaAngajat':
      return { state: idRand }

    default:
      throw new Error()
  }
}
