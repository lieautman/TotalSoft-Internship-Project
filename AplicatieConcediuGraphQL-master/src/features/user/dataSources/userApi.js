const ApiRESTDataSource = require('../../../utils/apiRESTDataSource')

class UserApi extends ApiRESTDataSource {
  constructor() {
    super()
  }

  async userData() {
    const userData1 = await this.post('/Angajat/AngajatAutentificare', {
      id: 0,
      nume: 'string',
      prenume: 'string',
      email: UserApi.userNameCont,
      parola: UserApi.userPassCont,
      dataAngajarii: '',
      dataNasterii: '2022-09-22T09:06:25.592Z',
      cnp: ''
    })
    let isManager = true
    if (userData1.managerId) isManager = false
    const userData = { id: userData1.id, isAdmin: userData1.esteAdmin, isManager: isManager, email: userData1.email }
    return userData
  }

  async authenticateUser(userName, password) {
    try {
      const userData1 = await this.post('/Angajat/AngajatAutentificare', {
        id: 0,
        nume: 'string',
        prenume: 'string',
        email: userName,
        parola: password,
        dataAngajarii: '',
        dataNasterii: '2022-09-22T09:06:25.592Z',
        cnp: ''
      })
      UserApi.userNameCont = userName
      UserApi.userPassCont = password
      if (userName !== userData1.email || password !== userData1.parola) return false
      else return true
    } catch {
      return false
    }
  }
}

module.exports = UserApi
