const manageriResolvers = {
  Query: {
    manageriData: async (_, __, { dataSources }, _info) => {
      const data = await dataSources.manageriApi.manageriData()
      const x = data.map(el => ({
        ...el,
        manageri: el.nume + ' ' + el.prenume
      }))
      return x
    }
  }
}

module.exports = manageriResolvers
