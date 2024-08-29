export const initialState = {
  nume: '',
  prenume: '',
  dataNasterii: new Date(),
  cnp: '',
  seriaNumarBuletin: '',
  numartelefon: '',
  dataAngajarii: new Date(),
  idEchipa: 0,
  managerId: 0,
  email: '',
  parola: '',
  salariu: '',
  esteAngajatCuActeInRegula: true
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
