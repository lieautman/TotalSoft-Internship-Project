const ApiRESTDataSource = require('../../../utils/apiRESTDataSource')

class AngajatIdApi extends ApiRESTDataSource {
  constructor() {
    super()
  }

  async angajatIdData(idAngajatSelectat) {
    const angajatIdData = await this.get(`http://localhost:5107/Angajat/GetAngajatiById?id=${idAngajatSelectat}`)
    console.log(angajatIdData)
    return angajatIdData
  }
}

module.exports = AngajatIdApi
