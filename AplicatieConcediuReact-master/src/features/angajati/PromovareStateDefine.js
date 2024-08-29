export const initialState = {
  poza: '',
  textNume: 'NUME',
  textPrenume: 'PRENUME',
  textEchipa: 'ECHIPA',
  echipa: [],
  listaAngajatiDeAdaugat: [],
  listaAngajatiAdaugati: [],
  listaAngajatiAdaugatiMirror: [],
  Echipa: 'Marketing'
}
export function reducer(state, action) {
  switch (action.inputName) {
    case 'poza':
      return { ...state, poza: action.inputValue }
    case 'textNume':
      return { ...state, textNume: action.inputValue }
    case 'textPrenume':
      return { ...state, textPrenume: action.inputValue }
    case 'textEchipa':
      return { ...state, textEchipa: action.inputValue }
    case 'OnPropertyChanged':
      return OnPropertyChanged(state, action)
    case 'modificareListe':
      return modificareListe(state, action)
    // return { ...state, listaAngajatiDeAdaugat: action.inputValue }
    case 'listaAngajatiAdaugati':
      return { ...state, listaAngajatiAdaugati: action.inputValue }
    case 'listaAngDeAdaugatDinBaza':
      return { ...state, listaAngajatiDeAdaugat: action.inputValue }
    case 'echipa':
      return { ...state, echipa: action.inputValue }
    default:
      throw new Error()
  }
}
function OnPropertyChanged(state, action) {
  const { propertyName, value } = action
  return { ...state, [propertyName]: value.nume }
}

function modificareListe(state, action) {
  const { actiune, index } = action
  let newListaAngajatiDeAdaugat = [...state.listaAngajatiDeAdaugat],
    newListaAngajatiAdaugati = [...state.listaAngajatiAdaugati],
    newListaAngajatiAdaugatiMirror = [...state.listaAngajatiAdaugatiMirror]
  if (actiune === 'Scoatere') {
    const angajat = { ...state.listaAngajatiAdaugati[index] }
    newListaAngajatiDeAdaugat = [...newListaAngajatiDeAdaugat, angajat]
    newListaAngajatiAdaugati.splice(index, 1)
    newListaAngajatiAdaugatiMirror.splice(index, 1)
  } else if (actiune === 'Adaugare') {
    const angajat = { ...state.listaAngajatiDeAdaugat[index] }
    newListaAngajatiAdaugati = [...newListaAngajatiAdaugati, angajat]
    newListaAngajatiDeAdaugat.splice(index, 1)
    let angajatMirror = { nume: '', prenume: '', email: '', cnp: '', ManagerId: 0, IdEchipa: 0 }
    switch (state.Echipa) {
      case 'Marketing': {
        angajatMirror.IdEchipa = 1
        break
      }
      case 'Resurse Umane': {
        angajatMirror.IdEchipa = 2
        break
      }
      case 'Dezvoltare': {
        angajatMirror.IdEchipa = 3
        break
      }
      case 'Servicii financiare': {
        angajatMirror.IdEchipa = 4
        break
      }
      case 'Suport IT': {
        angajatMirror.IdEchipa = 5
        break
      }
      default:
        angajatMirror.IdEchipa = 1
    }
    angajatMirror.nume = angajat.nume
    angajatMirror.prenume = angajat.prenume
    angajatMirror.email = angajat.email
    angajatMirror.ManagerId = action.inputValue
    angajatMirror.cnp = ''

    newListaAngajatiAdaugatiMirror = [...newListaAngajatiAdaugatiMirror, angajatMirror]
  }
  return {
    ...state,
    listaAngajatiDeAdaugat: newListaAngajatiDeAdaugat,
    listaAngajatiAdaugati: newListaAngajatiAdaugati,
    listaAngajatiAdaugatiMirror: newListaAngajatiAdaugatiMirror
  }
}
