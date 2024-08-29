const angajatiResolvers = {
  Query: {
    angajatiData: async (_, __, { dataSources }, _info) => {
      const data = await dataSources.angajatiApi.angajatiData()
      const x = data.map(el => ({
        ...el,
        echipa: el.idEchipaNavigation.nume
      }))
      return x
    },
    angajatiDeFormatEchipaData: async (_, { id }, { dataSources }, _info) => {
      const data = await dataSources.angajatiApi.angajatiDeFormatEchipaData(id)
      const x = data.map(el => ({
        ...el,
        echipa: el.idEchipaNavigation.nume
      }))
      return x
    }
  }
}

module.exports = angajatiResolvers
