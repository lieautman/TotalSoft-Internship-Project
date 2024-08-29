const profilePageTableResolvers = {
  Query: {
    preluareProfilePageTable: async (_, { userEmail, indexStart, indexEnd, numarElemPePagina }, { dataSources }, _info) => {
      const data = await dataSources.profilePageTableApi.preluareProfilePageTable(
        userEmail,
        indexStart,
        indexEnd,
        numarElemPePagina
      )
      return data
    }
  }
}

module.exports = profilePageTableResolvers
