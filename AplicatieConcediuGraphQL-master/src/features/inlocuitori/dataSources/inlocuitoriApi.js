const ApiRESTDataSource = require('../../../utils/apiRESTDataSource')

class InlocuitoriApi extends ApiRESTDataSource {
  constructor() {
    super()
  }
  async inlocuitoriData(dataInceput, dataSfarsit, idAngajat) {
    const inlocuitoriData1 = await this.get(
      `http://localhost:5107/CreareConcediu/GetInlocuitoriIndisponibili?dataIncepere=${dataInceput}&dataIncetare=${dataSfarsit}&AngajatId=${idAngajat}`
    )
    return inlocuitoriData1
  }
}

module.exports = InlocuitoriApi
