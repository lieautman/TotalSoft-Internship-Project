const ApiRESTDataSource = require('../../../utils/apiRESTDataSource')

class manageriApi extends ApiRESTDataSource {
  constructor() {
    super()
  }

  async manageriData() {
    const manageriData1 = await this.get('http://localhost:5107/Angajat/GetManageri')
    console.log(manageriData1)
    return manageriData1
  }
}

module.exports = manageriApi
