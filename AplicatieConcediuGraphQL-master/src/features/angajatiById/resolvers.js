const angajatIdResolvers = {
  Query: {
    angajatIdData: async (_, { idAngajatSelectat }, { dataSources }, _info) => {
      const data = await dataSources.angajatIdApi.angajatIdData(idAngajatSelectat)
      return {
        id: data.id,
        nume: data.nume,
        prenume: data.prenume,
        echipa: data.idEchipaNavigation.nume,
        email: data.email,
        poza: data.poza
      }
    }
  }
}

module.exports = angajatIdResolvers
