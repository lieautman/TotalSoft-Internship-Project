const concediuAprobatResolvers = {
  Mutation: {
    updateConcediu: async (_, { id }, { dataSources }, _info) => {
      await dataSources.concediuAprobatApi.concediuAprobatData(id)
      return id
    }
  }
}
module.exports = concediuAprobatResolvers
