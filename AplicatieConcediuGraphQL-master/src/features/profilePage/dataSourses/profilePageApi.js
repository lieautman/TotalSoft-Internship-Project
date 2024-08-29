const { lte } = require('ramda')
const ApiRESTDataSource = require('../../../utils/apiRESTDataSource')

class ProfilePageApi extends ApiRESTDataSource {
  constructor() {
    super()
  }

  async preluareDateProfil(userEmail) {
    const userData1 = await this.get('/Angajat/GetDateAngajat/' + userEmail)
    let functie = 'Angajat'
    if (userData1.managerId === null) {
      functie = 'Manager'
    }
    if (userData1.esteAdmin === true) {
      functie = 'Administrator'
    }
    let userData = {
      Id: userData1.id,
      Nume: userData1.nume,
      Prenume: userData1.prenume,
      Email: userData1.email,
      Parola: userData1.parola,
      DataAngajarii: userData1.dataAngajarii,
      DataNasterii: userData1.dataNasterii,
      Cnp: userData1.cnp,
      SeriaNumarBuletin: userData1.seriaNumarBuletin,
      Numartelefon: userData1.numartelefon,
      Poza: userData1.poza,
      Functia: functie,
      ManagerId: userData1.managerId,
      Salariu: userData1.salariu,
      EsteAngajatCuActeInRegula: userData1.esteAngajatCuActeInRegula,
      IdEchipa: userData1.idEchipa
    }
    return userData
  }
  async modificareDateProfil(
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
  ) {
    try {
      let Angajat = {
        id: userId,
        nume: userNumeUpdated,
        prenume: userPrenumeUpdated,
        email: userEmailUpdated,
        dataAngajarii: userDataAngajariiUpdated,
        numartelefon: userNumartelefonUpdated,
        dataNasterii: userDataNasteriiUpdated,
        cnp: userCnpUpdated,
        seriaNumarBuletin: seriaNumarBuletinUpdated,
        salariu: salariuUpdated,
        parola: 'Ceva123$' //pt a putea rula (nu se va modifica)
      }

      let Angajat2 = {
        id: userId,
        nume: userNumeUpdated,
        prenume: userPrenumeUpdated,
        email: userEmailUpdated,
        dataAngajarii: userDataAngajariiUpdated,
        numartelefon: userNumartelefonUpdated,
        dataNasterii: userDataNasteriiUpdated,
        cnp: userCnpUpdated,
        seriaNumarBuletin: seriaNumarBuletinUpdated,
        salariu: salariuUpdated,
        poza: pozaUpdated,
        parola: 'Ceva123$' //pt a putea rula (nu se va modifica)
      }

      {
        let isError = false
        let nume = userNumeUpdated
        let prenume = userPrenumeUpdated
        let data_nastere = userDataNasteriiUpdated
        let nr_telefon = userNumartelefonUpdated
        let cnp = userCnpUpdated
        let SerieNrBuletin = seriaNumarBuletinUpdated
        let parola = 'Ceva123$' //pt a putea rula (nu se va modifica)
        let email = userEmailUpdated

        //validari
        //completare campuri
        if (!isError) {
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
      {
        let isError = false

        let data_angajare = userDataAngajariiUpdated
        let salariu = salariuUpdated

        //validari
        //verificare validitate date campuri
        if (!isError) {
          let reSalariu = new RegExp('^[\\d./-]+$')
          reSalariu.ignoreCase
          if (!reSalariu.test(salariu.toString())) {
            isError = true
          }
          //data angajare in viitor
          if (new Date(data_angajare).getTime() > Date.now()) {
            isError = true
            return 'Data angajare in viitor!'
          }
        }
      }

      let data1 = await this.post('/Angajat/PostEditareDateAngajat', Angajat)
      let data2 = await this.post('/Angajat/PostIncarcarePoza', Angajat2)
      if (data1 !== '' && data2 !== '') {
        return 'Inregistrare efectuata!'
      } else {
        return 'Eroare de server!'
      }
    } catch {
      return 'Eroare de server!'
    }
  }
}

module.exports = ProfilePageApi
