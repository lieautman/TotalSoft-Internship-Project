const ApiRESTDataSource = require('../../../utils/apiRESTDataSource')

class ConcediiSpreAprobareApi extends ApiRESTDataSource {
  constructor() {
    super()
  }

  async concediiSpreAprobareData() {
    const concediiSpreAprobareData = await this.get('http://localhost:5107/Concediu/GetConcediiSpreAprobareAll')
    console.log(concediiSpreAprobareData)
    return concediiSpreAprobareData
  }
}

module.exports = ConcediiSpreAprobareApi
