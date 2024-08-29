const echipaResolvers = {
  Query: {
    echipaData: async (_, __, { dataSources }, _info) => {
      const data = await dataSources.echipaApi.echipaData()
      return data
    }
  }
}

module.exports = echipaResolvers
