const zileConcediuResolvers = {
  Query: {
    zileConcediuData: async (_, { idAngajat }, { dataSources }, _info) => {
      const data = await dataSources.zileConcediuApi.zileConcediuData(idAngajat)
      let result = []
      for (let i in data) {
        result.push({ id: i, zile: data[i] })
      }
      return result
    }
  }
}

module.exports = zileConcediuResolvers
