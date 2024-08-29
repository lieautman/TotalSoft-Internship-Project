const ApiRESTDataSource = require('../../../utils/apiRESTDataSource')

class ConcediiApi extends ApiRESTDataSource {
  constructor() {
    super()
  }

  async concediiData(index1, index2, nrElemPePagina) {
    const concediiData2 = await this.get(`http://localhost:5107/Concediu/GetAllConcedii/${index1}/${index2}`)
    const nrPagini = await this.get(`http://localhost:5107/Concediu/GetAllConcedii/${nrElemPePagina}`)
    let listaConcedii1 = []
    for (let i = 0; i < concediiData2.length; i++) {
      let buffer1 = {
        id: concediiData2[i].id,
        name: concediiData2[i].tipConcediu.nume,
        dataInceput: concediiData2[i].dataInceput,
        dataSfarsit: concediiData2[i].dataSfarsit,
        inlocuitor: concediiData2[i].inlocuitor.nume,
        comentarii: concediiData2[i].comentarii,
        angajat: concediiData2[i].angajat.nume
      }
      listaConcedii1.push(buffer1)
    }
    let DateIntoarse = {
      listaConcedii: listaConcedii1,
      numarPagini: nrPagini
    }
    return DateIntoarse
  }
}

module.exports = ConcediiApi
