const tipConcediuResolvers = {
  Query: {
    tipConcediuData: async (_, __, { dataSources }, _info) => {
      const data = await dataSources.tipConcediuApi.tipConcediuData()
      return data
    }
  }
}

module.exports = tipConcediuResolvers
