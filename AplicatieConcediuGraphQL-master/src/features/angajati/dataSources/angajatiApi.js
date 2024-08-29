const ApiRESTDataSource = require('../../../utils/apiRESTDataSource')

class AngajatiApi extends ApiRESTDataSource {
  constructor() {
    super()
  }

  async angajatiData() {
    const angajatiData = await this.get('/Angajat/GetAllAngajati')
    console.log(angajatiData)
    return angajatiData
  }
  async angajatiDeFormatEchipaData(id) {
    const angajatiDeFormatEchipaData = await this.get(`/Angajat/GetAllAngajatiDeFormatEchipa/${id}`)
    return angajatiDeFormatEchipaData
  }
}

module.exports = AngajatiApi
