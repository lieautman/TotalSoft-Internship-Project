const ApiRESTDataSource = require('../../../utils/apiRESTDataSource')

class ConcediuRespinsApi extends ApiRESTDataSource {
  constructor() {
    super()
  }

  async concediuRespinsData(id) {
    await this.post(`http://localhost:5107/Concediu/UpdateStareConcediuRespingere?id=${id}`)
  }
}

module.exports = ConcediuRespinsApi
