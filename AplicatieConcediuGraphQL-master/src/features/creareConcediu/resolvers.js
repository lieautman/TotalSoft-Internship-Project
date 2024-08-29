const creareConcediuResolvers = {
  Mutation: {
    creareConcediu: async (_, { input }, { dataSources }) => {
      return await dataSources.creareconcediuApi.creareConcediu(input)
    }
  }
}
module.exports = creareConcediuResolvers
