const profilePageResolvers = {
  Query: {
    getProfileData: async (_, { userEmail }, { dataSources }, _info) => {
      const data = await dataSources.profilePageApi.preluareDateProfil(userEmail)
      return data
    }
  },
  Mutation: {
    modificareDateProfil: async (
      _,
      {
        userId,
        userNumeUpdated,
        userPrenumeUpdated,
        userEmailUpdated,
        userDataAngajariiUpdated,
        userNumartelefonUpdated,
        userDataNasteriiUpdated,
        userCnpUpdated,
        seriaNumarBuletinUpdated,
        salariuUpdated,
        pozaUpdated
      },
      { dataSources },
      _info
    ) => {
      const data = await dataSources.profilePageApi.modificareDateProfil(
        userId,
        userNumeUpdated,
        userPrenumeUpdated,
        userEmailUpdated,
        userDataAngajariiUpdated,
        userNumartelefonUpdated,
        userDataNasteriiUpdated,
        userCnpUpdated,
        seriaNumarBuletinUpdated,
        salariuUpdated,
        pozaUpdated
      )
      return data
    }
  }
}

module.exports = profilePageResolvers
