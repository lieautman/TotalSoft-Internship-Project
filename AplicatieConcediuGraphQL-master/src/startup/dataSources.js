const UserApi = require('../features/user/dataSources/userApi')
const UserRegisterApi = require('../features/userRegister/dataSources/userRegisterApi')
const ConcediiApi = require('../features/concedii/dataSources/concediiApi')
const ConcediiSpreAprobareApi = require('../features/concediiSpreAprobare/dataSources/concediiSpreAprobareApi')
const UserDb = require('../features/user/dataSources/userDb')
const ProfilePageApi = require('../features/profilePage/dataSourses/profilePageApi')
const ProfilePageTableApi = require('../features/profilePageTable/dataSources/profilePageTableApi')
const ConcediuAprobatApi = require('../features/aprobaConcedii/dataSources/aprobaConcediiApi')
const AngajatiApi = require('../features/angajati/dataSources/angajatiApi')
const adaugaAngajatApi = require('../features/AdaugaAngajat/dataSources/adaugaAngajatApi')
const ConcediuRespinsApi = require('../features/respingeConcedii/dataSources/respingeConcediiApi')
const CardApi = require('../features/cardEchipe/dataSources/cardApi')
const EchipaApi = require('../features/echipe/dataSources/echipeApi')
const adaugaConcediuApi = require('../features/adaugaConcediu/dataSources/adaugaConcediuApi')
const AngajatIdApi = require('../features/angajatiById/dataSources/angajatiByIdApi')
const promovareApi = require('../features/promovare/dataSources/promovareApi')
const manageriApi = require('../features/manageri/dataSources/manageriApi')
const TipConcediuApi = require('../features/tipConcediu/dataSources/tipConcediuApi')
const ZileConcediuApi = require('../features/nrZileDispConcedii/dataSources/zileConcediuApi')
const inlocuitoriApi = require('../features/inlocuitori/dataSources/inlocuitoriApi')
const creareConcediuApi = require('../features/creareConcediu/dataSources/creareConcediuApi')

module.exports.getDataSources = () => ({
  // Instantiate your data sources here. e.g.: userApi: new UserApi()
  userApi: new UserApi(),
  userDb: new UserDb(),
  userRegisterApi: new UserRegisterApi(),
  profilePageApi: new ProfilePageApi(),
  profilePageTableApi: new ProfilePageTableApi(),
  concediiApi: new ConcediiApi(),
  concediiSpreAprobareApi: new ConcediiSpreAprobareApi(),
  concediuAprobatApi: new ConcediuAprobatApi(),
  concediuRespinsApi: new ConcediuRespinsApi(),
  angajatiApi: new AngajatiApi(),
  adaugaAngajatApi: new adaugaAngajatApi(),
  cardApi: new CardApi(),
  echipaApi: new EchipaApi(),
  adaugaConcediuApi: new adaugaConcediuApi(),
  angajatIdApi: new AngajatIdApi(),
  manageriApi: new manageriApi(),
  tipConcediuApi: new TipConcediuApi(),
  zileConcediuApi: new ZileConcediuApi(),
  inlocuitoriApi: new inlocuitoriApi(),
  promovareApi: new promovareApi(),
  creareConcediuApi: new creareConcediuApi()
})

module.exports.initializedDataSources = (context, dbInstance, dataSources) => {
  // You need to initialize you datasources here e.g.: dataSources.userApi.initialize({ context })
  dataSources.userApi.initialize({ context })
  dataSources.userDb.initialize({ context: { dbInstance } })
  dataSources.userRegisterApi.initialize({ context })
  dataSources.ProfilePageApi.initialize({ context })
  dataSources.ConcediiApi.initialize({ context })
  dataSources.ConcediiSpreAprobareApi.initialize({ context })
  dataSources.adaugaAngajatApi.initialize({ context })
  dataSources.ConcediuAprobatApi.initialize({ context })
  dataSources.ConcediuRespinsApi.initialize({ context })
  dataSources.AngajatiApi.initialize({ context })
  dataSources.CardApi.initialize({ context })
  dataSources.echipaApi.initialize({ context })
  dataSources.adaugaConcediuApi.initialize({ context })
  dataSources.angajatIdApi.initialize({ context })
  dataSources.manageriApi.initialize({ context })
  dataSources.tipConcediuApi.initialize({ context })
  dataSources.zileConcediuApi.initialize({ context })
  dataSources.inlocuitoriApi.initialize({ context })
  dataSources.promovareApi.initialize({ context })
  dataSources.creareConcediuApi.initialize({ context })

  return dataSources
}
