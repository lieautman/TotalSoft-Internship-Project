const inlocuitorResolvers = {
  Query: {
    inlocuitoriData: async (_, { dataInceput, dataSfarsit, idAngajat }, { dataSources }, _info) => {
      const data = await dataSources.inlocuitoriApi.inlocuitoriData(dataInceput, dataSfarsit, idAngajat)
      const x = data.map(el => ({
        ...el,
        inlocuitor: el.nume + ' ' + el.prenume
      }))
      return x
    }
  }
}
module.exports = inlocuitorResolvers
