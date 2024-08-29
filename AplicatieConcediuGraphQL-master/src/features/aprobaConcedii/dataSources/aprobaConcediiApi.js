const ApiRESTDataSource = require('../../../utils/apiRESTDataSource')

class ConcediuAprobatApi extends ApiRESTDataSource {
  constructor() {
    super()
  }

  async concediuAprobatData(id) {
    await this.post(`http://localhost:5107/Concediu/UpdateStareConcediuAprobare?id=${id}`)
  }
}

module.exports = ConcediuAprobatApi
