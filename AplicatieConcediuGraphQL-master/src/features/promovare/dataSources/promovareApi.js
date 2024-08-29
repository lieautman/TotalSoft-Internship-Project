const { KnownArgumentNamesOnDirectivesRule } = require('graphql/validation/rules/KnownArgumentNamesRule')
const ApiRESTDataSource = require('../../../utils/apiRESTDataSource')

class promovareApi extends ApiRESTDataSource {
  constructor() {
    super()
  }
  async updateManagerIdEchipaId(input) {
    const data = await this.post('http://localhost:5107/api/PromovareAngajat/UpdateManagerIdEchipaIdReact', input)
    return data
  }
}

module.exports = promovareApi
