const updateManagerIdEchipaIdResolvers = {
  Mutation: {
    updateManagerIdEchipaId: async (_, { input }, { dataSources }) => {
      return await dataSources.promovareApi.updateManagerIdEchipaId(input)
    }
  }
}
module.exports = updateManagerIdEchipaIdResolvers
