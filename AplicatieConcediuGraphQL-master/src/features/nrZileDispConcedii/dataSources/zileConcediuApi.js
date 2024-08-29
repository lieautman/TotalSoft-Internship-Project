const ApiRESTDataSource = require('../../../utils/apiRESTDataSource')

class ZileConcediuApi extends ApiRESTDataSource {
  constructor() {
    super()
  }

  async zileConcediuData(idAngajat) {
    const zileConcediuData1 = await this.get(`http://localhost:5107/CreareConcediu/GetNrZileConcediu/${idAngajat}`)
    return zileConcediuData1
  }
}

module.exports = ZileConcediuApi
