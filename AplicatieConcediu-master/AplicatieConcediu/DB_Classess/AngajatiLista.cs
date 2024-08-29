using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AplicatieConcediu.DB_Classess
{
    internal class AngajatiLista
    {
        public string Nume { get; set; }
        public string Prenume { get; set; }
        public int ManagerId { get; set; }
        public int idEchipa { get; set; }
       public AngajatiLista(string nume, string prenume, int managerId, int echipaId)
        {
            Nume = nume;
            Prenume = prenume;
            ManagerId= managerId;
            idEchipa= echipaId;

        }
    }
 

}
