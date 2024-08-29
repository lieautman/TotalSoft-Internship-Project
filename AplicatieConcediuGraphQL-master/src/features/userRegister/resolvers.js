const userRegisterResolvers = {
  Mutation: {
    registerUser: async (
      _,
      {
        userNume,
        userPrenume,
        userEmail,
        userNumartelefon,
        userDataNasterii,
        userCnp,
        userSeriaNumarBuletin,
        userParola,
        userParola2
      },
      { dataSources },
      _info
    ) => {
      const data = await dataSources.userRegisterApi.registerUser(
        userNume,
        userPrenume,
        userEmail,
        userNumartelefon,
        userDataNasterii,
        userCnp,
        userSeriaNumarBuletin,
        userParola,
        userParola2
      )
      return data
    }
  }
}

module.exports = userRegisterResolvers
