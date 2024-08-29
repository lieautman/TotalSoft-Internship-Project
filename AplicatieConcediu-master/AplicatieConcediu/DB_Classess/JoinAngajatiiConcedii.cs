﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AplicatieConcediu.DB_Classess
{
    internal class JoinAngajatiiConcedii
    {
        public string Nume { get; set; }
        public string Prenume { get; set; }
        public string Email { get; set; }
        public string NumeTipConcediu { get; set; }
        public DateTime DataInceput { get; set; }
        public DateTime DataSfarsit { get; set; }

        public JoinAngajatiiConcedii(string nume, string prenume, string email, string nume_tip_concediu, DateTime data_inceput, DateTime data_sfarsit)
        {
            Nume = nume;
            Prenume = prenume;
            Email = email;
            NumeTipConcediu = nume_tip_concediu;
            DataInceput = data_inceput;
            DataSfarsit = data_sfarsit;

        }
    }
}
