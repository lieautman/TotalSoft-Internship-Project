export const initialState = {
  id: null,
  name: ' medical',
  dataInceput: '1/1/1',
  dataSfarsit: '1/1/1',
  inlocuitor: 'Maria Iancu',
  comentarii: 'E rau',
  angajat: 'Ioana Popescu'
}

export function reducer(state, action) {
  switch (action.inputType) {
    case 'allObject':
      return { ...state, ...action.inputValue }
    default:
      throw new Error()
  }
}
