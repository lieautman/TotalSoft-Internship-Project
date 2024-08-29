const { lte } = require('ramda')
const ApiRESTDataSource = require('../../../utils/apiRESTDataSource')

class ProfilePageTableApi extends ApiRESTDataSource {
  constructor() {
    super()
  }

  async preluareProfilePageTable(userEmail, indexStart, indexEnd, numarElemPePagina) {
    let Angajat = {
      id: 1,
      nume: 'aaa',
      prenume: 'aaa',
      email: userEmail,
      dataAngajarii: '2000-01-01',
      numartelefon: '1234567890',
      dataNasterii: '2000-01-01',
      cnp: '1234567890123',
      seriaNumarBuletin: 'rk123123',
      salariu: 500,
      parola: 'Aaa1234567$'
    }
    let data1 = await this.post('/Concediu/PostPreluareConcedii/' + indexStart + '/' + indexEnd, Angajat)
    let data2 = await this.post('/Concediu/PostPreluareNumarDePagini/' + numarElemPePagina, Angajat)
    let listaConcedii = []
    for (let i = 0; i < data1.length; i++) {
      let buffer1 = {
        id: data1[i].id,
        tipConcediu: data1[i].tipConcediu.nume,
        dataInceput: data1[i].dataInceput,
        dataSfarsit: data1[i].dataSfarsit,
        numeInlocuitor: data1[i].inlocuitor.nume,
        comment: data1[i].comentarii,
        stareConcediu: data1[i].stareConcediu.nume
      }
      listaConcedii.push(buffer1)
    }

    let DateIntoarse = {
      listaConcedii: listaConcedii,
      numarPagini: data2
    }
    return DateIntoarse
  }
}

module.exports = ProfilePageTableApi
