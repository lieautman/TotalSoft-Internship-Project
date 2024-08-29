﻿using System;
using System.Collections.Generic;

namespace XD.Models
{
    public partial class Concediu
    {
        public int Id { get; set; }
        public int? TipConcediuId { get; set; }
        public DateTime DataInceput { get; set; }
        public DateTime DataSfarsit { get; set; }
        public int? InlocuitorId { get; set; }
        public string Comentarii { get; set; }
        public int? StareConcediuId { get; set; }
        public int AngajatId { get; set; }

        public virtual Angajat Angajat { get; set; }
        public virtual Angajat Inlocuitor { get; set; }
        public virtual StareConcediu StareConcediu { get; set; }
        public virtual TipConcediu TipConcediu { get; set; }

        public Concediu()
        {
            Angajat = new Angajat();
            Inlocuitor = new Angajat();
            TipConcediu = new TipConcediu();
            StareConcediu = new StareConcediu();

        }
    }
}
