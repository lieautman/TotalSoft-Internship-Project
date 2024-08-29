const { topics, pubSub } = require('../../pubSub')

const concediiSpreAprobareResolvers = {
  Query: {
    concediiSpreAprobareData: async (_, __, { dataSources }, _info) => {
      const data = await dataSources.concediiSpreAprobareApi.concediiSpreAprobareData()
      const x = data.map(el => ({
        ...el,
        name: el.tipConcediu.nume,
        inlocuitor: el.inlocuitor.nume,
        angajat: el.angajat.nume
      }))
      return x
    }
  }
}

module.exports = concediiSpreAprobareResolvers
