const { KnownArgumentNamesOnDirectivesRule } = require('graphql/validation/rules/KnownArgumentNamesRule')
const ApiRESTDataSource = require('../../../utils/apiRESTDataSource')

class creareConcediuApi extends ApiRESTDataSource {
  constructor() {
    super()
  }
  async creareConcediu(input) {
    const data = await this.post('http://localhost:5107/CreareConcediu/PostConcediu', input)
    return data
  }
}

module.exports = creareConcediuApi
