const adaugaConcediuResolvers = {
  Mutation: {
    adaugaConcediu: async (_, { input }, { dataSources }) => {
      return await dataSources.adaugaConcediuApi.adaugaConcediu(input)
    }
  }
}
module.exports = adaugaConcediuResolvers
