export const initialState = {
  tipConcediuId: 0,
  dataInceput: new Date(),
  dataSfarsit: new Date(),
  inlocuitorId: 0,
  comentarii: '',
  stareConcediuId: 3,
  angajatId: 1,
  numarZileSelectat: '',
  numarZileDisponibile: ''
}

export function reducer(state, action) {
  switch (action.type) {
    case 'OnPropertyChanged':
      return OnPropertyChanged(state, action)
    default:
      throw new Error()
  }
}

function OnPropertyChanged(state, action) {
  const { propertyName, value } = action
  return { ...state, [propertyName]: value }
}
