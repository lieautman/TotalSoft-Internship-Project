const concediiResolvers = {
  Query: {
    concediiData: async (_, { index1, index2, nrElemPePagina }, { dataSources }, _info) => {
      const data = await dataSources.concediiApi.concediiData(index1, index2, nrElemPePagina)
      return data
    }
  }
}

module.exports = concediiResolvers
