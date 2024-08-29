const ApiRESTDataSource = require('../../../utils/apiRESTDataSource')

class UserRegisterApi extends ApiRESTDataSource {
  constructor() {
    super()
  }

  async registerUser(
    userNume,
    userPrenume,
    userEmail,
    userNumartelefon,
    userDataNasterii,
    userCnp,
    userSeriaNumarBuletin,
    userParola,
    userParola2
  ) {
    try {
      let Angajat = {
        nume: userNume,
        prenume: userPrenume,
        email: userEmail,
        numartelefon: userNumartelefon,
        dataNasterii: userDataNasterii,
        cnp: userCnp,
        seriaNumarBuletin: userSeriaNumarBuletin,
        parola: userParola,
        parola2: userParola2
      }

      {
        let isError = false
        let nume = userNume
        let prenume = userPrenume
        let data_nastere = userDataNasterii
        let nr_telefon = userNumartelefon
        let cnp = userCnp
        let SerieNrBuletin = userSeriaNumarBuletin
        let parola = userParola
        let parola2 = userParola2
        let email = userEmail

        //validari
        //completare campuri
        if (!isError) {
          if (parola !== parola2) {
            isError = true
            return 'Parolele nu se potrivesc!'
          }
          if (nume === '') {
            isError = true
            return 'Nume gol!'
          }
          if (prenume === '') {
            isError = true
            return 'Prenume gol!'
          }
          if (nr_telefon === '') {
            isError = true
            return 'Numar telefon gol!'
          }
          if (cnp === '') {
            isError = true
            return 'Cnp gol!'
          }
          if (SerieNrBuletin === '') {
            isError = true
            return 'Serie si numar CI gol!'
          }
          if (parola === '') {
            isError = true
            return 'Parola golala!'
          }
          if (email === '') {
            isError = true
            return 'Email gol!'
          }
        } //empty sring
        if (!isError) {
          if (nume === null || nume === undefined) {
            isError = true
            return 'Nume gol!'
          }
          if (prenume === null || prenume === undefined) {
            isError = true
            return 'Prenume gol!'
          }
          if (data_nastere === null || data_nastere === undefined) {
            isError = true
            return 'Data nastere goala!'
          }
          if (nr_telefon === null || nr_telefon === undefined) {
            isError = true
            return 'Numar telefon gol!'
          }
          if (cnp === null || cnp === undefined) {
            isError = true
            return 'Cnp gol!'
          }
          if (SerieNrBuletin === null || SerieNrBuletin === undefined) {
            isError = true
            return 'Serie si numar CI gol!'
          }
          if (parola === null || parola === undefined) {
            isError = true
            return 'Parola golala!'
          }
          if (email === null || email === undefined) {
            isError = true
            return 'Email gol!'
          }
        } //null

        //TODO: lungimile pot fi preluatedin baza de date
        //verificare pe nr de caractere minime
        if (!isError) {
          if (nume.Length < 2) {
            isError = true
            return 'Nume mic!'
          }
          if (prenume.Length < 2) {
            isError = true
            return 'Prenume mic!'
          }
          //dataNastere nu are
          if (nr_telefon.Length < 10) {
            isError = true
            return 'Numar de telefon mic!'
          }
          if (cnp.Length < 13) {
            isError = true
            return 'Cnp mic!'
          }
          if (SerieNrBuletin.Length < 6) {
            isError = true
            return 'Serie si numar buletin mic!'
          }
          if (parola.Length < 3) {
            isError = true
            return 'Parola mica!'
          }
          if (email.Length < 3) {
            isError = true
            return 'Email mic!'
          }
        }
        //verificare pe nr de caractere maxime
        if (!isError) {
          if (nume.Length > 150) {
            isError = true
            return 'Nume mare!'
          }
          if (prenume.Length > 150) {
            isError = true
            return 'Prenume mare!'
          }
          //dataNastere nu are
          if (nr_telefon.Length > 20) {
            isError = true
            return 'Numar de telefon mare!'
          }
          if (cnp.Length > 20) {
            isError = true
            return 'Cnp mare!'
          }
          if (SerieNrBuletin.Length > 8) {
            isError = true
            return 'Serie si numar buletin mare!'
          }
          if (parola.Length > 100) {
            isError = true
            return 'Parola mare!'
          }
          if (email.Length > 100) {
            isError = true
            return 'Email mare!'
          }
        }

        //verificare validitate date campuri
        if (!isError) {
          let reTelefon = new RegExp('^[0-9]*$')
          reTelefon.ignoreCase
          if (!reTelefon.test(nr_telefon)) {
            isError = true
            return 'Telefon gresit!'
          }
          let reCnp = new RegExp('^[0-9]*$')
          reCnp.ignoreCase
          if (!reCnp.test(cnp)) {
            isError = true
            return 'Cnp gresit!'
          }
          //validare email
          let reEmail = new RegExp('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')
          reEmail.ignoreCase
          if (!reEmail.test(email)) {
            isError = true
            return 'Email gresit!'
          }
          //validare parola
          let reParola = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')
          reParola.ignoreCase
          if (!reParola.test(parola)) {
            isError = true
            return 'Parola gresit!'
          }
          //data nastere in viitor
          if (new Date(data_nastere).getTime() > Date.now()) {
            isError = true
            return 'Data nastere in viitor!'
          }

          //cnp si data nasterii corespund
          {
            let cnpDataNastere = cnp.substring(1, 7)
            let dataNastereFormatataString = data_nastere.toString()
            let index = dataNastereFormatataString.indexOf('-', dataNastereFormatataString.indexOf('-') + 1)
            let an = dataNastereFormatataString.substring(2, dataNastereFormatataString.indexOf('-'))
            let luna = dataNastereFormatataString.substring(index - 2, index)
            let zi = dataNastereFormatataString.substring(index + 1, dataNastereFormatataString.length)

            if (zi.Length == 1) {
              zi = '0' + zi
            }
            if (luna.Length == 1) {
              luna = '0' + luna
            }

            if (cnpDataNastere != an.toString() + luna.toString() + zi.toString()) {
              isError = true
              return 'Cnp diferit de data nasterii!'
            }
          }
        }
      }

      let data1 = await this.post('/Angajat/PostAngajatInregistrare', Angajat)
      return data1
    } catch {
      return 'Eroare de server!'
    }
  }
}

module.exports = UserRegisterApi
