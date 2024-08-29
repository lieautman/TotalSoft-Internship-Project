const concediuRespinsResolvers = {
  Mutation: {
    updateStareConcediu: async (_, { id }, { dataSources }, _info) => {
      await dataSources.concediuRespinsApi.concediuRespinsData(id)
      return id
    }
  }
}
module.exports = concediuRespinsResolvers
