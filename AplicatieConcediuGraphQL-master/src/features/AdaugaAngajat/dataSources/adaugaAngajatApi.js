const { KnownArgumentNamesOnDirectivesRule } = require('graphql/validation/rules/KnownArgumentNamesRule')
const ApiRESTDataSource = require('../../../utils/apiRESTDataSource')

class adaugaAngajatApi extends ApiRESTDataSource {
  constructor() {
    super()
  }
  async adaugaAngajat(input) {
    try {
      const data = await this.post('/AdaugareAngajatNou/PostAdaugareAngajatNou', { ...input })
      if (data !== '') {
        return 'Inregistrare efectuata!'
      } else {
        return 'Eroare de server!'
      }
    } catch {
      return 'Eroare de server!'
    }
  }
}

module.exports = adaugaAngajatApi
