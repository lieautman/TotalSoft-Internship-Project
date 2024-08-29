const adaugaAngajatResolvers = {
  Mutation: {
    adaugaAngajat: async (_, { input }, { dataSources }) => {
      return await dataSources.adaugaAngajatApi.adaugaAngajat(input)
    }
  }
}
module.exports = adaugaAngajatResolvers
