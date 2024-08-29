﻿using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.Data.SqlClient;
using AplicatieConcediu;
using AplicatieConcediu.DB_Classess;
using static System.Windows.Forms.VisualStyles.VisualStyleElement.ListView;
using System.IO;
using System.Collections;
using Newtonsoft.Json;
using System.Net;
using System.Net.Http;
using static System.Windows.Forms.VisualStyles.VisualStyleElement.Header;
using AplicatieConcediu.Properties;
using System.Web;
using Azure;
using XD.Models;
using System.Runtime;
using Echipa = XD.Models.Echipa;

namespace AplicatieConcediu.Pagini_Actiuni
{
    public partial class FormareEchipaAngajatPromovat : Form
    {
        private List<AngajatiListaPentruFormareEchipaNoua> listaAngajati = new List<AngajatiListaPentruFormareEchipaNoua>();
        List<XD.Models.Angajat> lista2 = new List<XD.Models.Angajat>();
        private List<AfisareAngajati> listaAngajati2 = new List<AfisareAngajati>();
        List<XD.Models.Angajat> lista = new List<XD.Models.Angajat>();
        private List<AfisareAngajati> listaAngajatiAdaugati = new List<AfisareAngajati>();
        private List<Echipa> numeEchipa = new List<Echipa>();
        private int IDECHIPAPOZA = 1;
        private string emailSelectat = "";


        public FormareEchipaAngajatPromovat()
        {
            InitializeComponent();
        }

        public List<XD.Models.Angajat> PromovareAngajati()
        {
            var url = "http://localhost:5107/api/PromovareAngajat/PromovareAngajat";
            var httpRequest = (HttpWebRequest)WebRequest.Create(url);
            List<XD.Models.Angajat> list = new List<XD.Models.Angajat>();
            var httpResponse = (HttpWebResponse)httpRequest.GetResponse();
            using (var streamReader = new StreamReader(httpResponse.GetResponseStream()))
            {
                var result = streamReader.ReadToEnd();
                var settings = new JsonSerializerSettings
                {
                    NullValueHandling = NullValueHandling.Ignore,
                    MissingMemberHandling = MissingMemberHandling.Ignore
                };
                list = JsonConvert.DeserializeObject<List<XD.Models.Angajat>>(result, settings);
            }
            return list;
        }

        public Angajat NumePrenumeAngajat(string emailFolositLaSelect)
        {

            var url = "http://localhost:5107/Angajat/NumePrenumeAngajat?email=" + emailFolositLaSelect;
            var httpRequest = (HttpWebRequest)WebRequest.Create(url);

            var httpResponse = (HttpWebResponse)httpRequest.GetResponse();
            Angajat a;
            using (var streamReader = new StreamReader(httpResponse.GetResponseStream()))
            {
                string result = streamReader.ReadToEnd();
                a = JsonConvert.DeserializeObject<Angajat>(result);
            }
            return a;

        }

        private async Task PozaAngajat(string emailFolositLaSelect)
        {
            byte[] poza = { };
            bool isOk = true;


            HttpClient httpClient = new HttpClient();
            XD.Models.Angajat angajat1 = new XD.Models.Angajat();
            angajat1.Email = emailFolositLaSelect;
            angajat1.Cnp = "";
            angajat1.Nume = "";
            angajat1.Prenume = "";
            string jsonString = JsonConvert.SerializeObject(angajat1);
            StringContent stringContent = new StringContent(jsonString, Encoding.UTF8, "application/json");
            var response = await httpClient.PostAsync("http://localhost:5107/Angajat/PostPreluarePoza", stringContent);
            response.EnsureSuccessStatusCode();

            HttpContent content = response.Content;
            Task<string> result = content.ReadAsStringAsync();
            string res = result.Result;
            var settings = new JsonSerializerSettings
            {
                NullValueHandling = NullValueHandling.Ignore,

            };

            XD.Models.Angajat ang1 = JsonConvert.DeserializeObject<XD.Models.Angajat>(res, settings);

            if (ang1.Poza != null)
                poza = ang1.Poza;
            else
                isOk = false;

            if (isOk == true)
                pictureBox1.Image = System.Drawing.Image.FromStream(new MemoryStream(poza));
        }

        private async Task UpdateManagerIdEchipaId(string emailManager)
        {
            //listaAngajatiAdaugati
            HttpClient httpClient = new HttpClient();
            XD.Models.Angajat managerId = new XD.Models.Angajat();
            managerId.Email = emailManager;
            managerId.Cnp = "";
            managerId.Nume = "";
            managerId.Prenume = "";
            string jsonString = JsonConvert.SerializeObject(managerId);
            StringContent stringContent = new StringContent(jsonString, Encoding.UTF8, "application/json");
            var response = await httpClient.PostAsync("http://localhost:5107/Angajat/PreluareAngajatDupaEmail", stringContent);

            HttpContent content = response.Content;
            Task<string> result = content.ReadAsStringAsync();
            string res = result.Result;

            XD.Models.Angajat ang1 = JsonConvert.DeserializeObject<XD.Models.Angajat>(res);

            List<XD.Models.Angajat> ListaAngajatTrimisInBk = new List<XD.Models.Angajat>();

            foreach (var angajat in lista)
            {
                angajat.ManagerId = ang1.Id;
                angajat.IdEchipa = Globals.IdEchipaSelectata;
                if (angajat.Cnp == null)
                {
                    angajat.Cnp = "";
                }
                ListaAngajatTrimisInBk.Add(angajat);
            }
            ang1.IdEchipa = Globals.IdEchipaSelectata;
            ang1.ManagerId = null;
            if (ang1.Cnp == null)
            {
                ang1.Cnp = "";
            }
            ListaAngajatTrimisInBk.Add(ang1);

            HttpClient httpClient1 = new HttpClient();
            string jsonString1 = JsonConvert.SerializeObject(ListaAngajatTrimisInBk);
            StringContent stringContent1 = new StringContent(jsonString1, Encoding.UTF8, "application/json");
            var response1 = await httpClient.PostAsync("http://localhost:5107/api/PromovareAngajat/UpdateManagerIdEchipaId", stringContent1);
            this.Close();
        }


        private async Task PozaEchipa(int IDECHIPAPOZA)
        {
            byte[] poza = { };
            bool isOk = true;


            HttpClient httpClient = new HttpClient();
            XD.Models.Echipa pozaEchipa = new XD.Models.Echipa();
            Globals.IdEchipaSelectata = comboBox1.SelectedIndex + 1;
            IDECHIPAPOZA = Globals.IdEchipaSelectata;
            pozaEchipa.Id = IDECHIPAPOZA;
            pozaEchipa.Nume = "";
            pozaEchipa.Descriere = "";
            string jsonString = JsonConvert.SerializeObject(pozaEchipa);
            StringContent stringContent = new StringContent(jsonString, Encoding.UTF8, "application/json");
            var response = await httpClient.GetAsync("http://localhost:5107/Echipa/PozaEchipa?id=" + IDECHIPAPOZA);

            HttpContent content = response.Content;
            Task<string> result = content.ReadAsStringAsync();
            string res = result.Result;

            byte[] echipaP = null;

            if (response.StatusCode == HttpStatusCode.OK)
                echipaP = System.Text.Json.JsonSerializer.Deserialize<byte[]>(res);
            else
                isOk = false;

            // JsonConvert.DeserializeObject<List<XD.Models.Echipa>>(res, settings);


            if (echipaP != null)
                poza = echipaP;


            if (isOk == true)
                pictureBox2.Image = System.Drawing.Image.FromStream(new MemoryStream(poza));
        }


        private List<XD.Models.Echipa> NumeEchipa()
        {
           
            var url = "http://localhost:5107/Echipa/GetNume";
            var httpRequest = (HttpWebRequest)WebRequest.Create(url);
            List<XD.Models.Echipa> listaNume = new List<XD.Models.Echipa>();
            var httpResponse = (HttpWebResponse)httpRequest.GetResponse();
            using (var streamReader = new StreamReader(httpResponse.GetResponseStream()))
            {
                var result = streamReader.ReadToEnd();
                var settings = new JsonSerializerSettings
                {
                    NullValueHandling = NullValueHandling.Ignore,
                    MissingMemberHandling = MissingMemberHandling.Ignore
                };
                listaNume = JsonConvert.DeserializeObject<List<XD.Models.Echipa>>(result, settings);
            }
            return listaNume;

        }

        public List<string> listaNumeleEchipelor = new List<string>();

        private async void FormareEchipaAngajatPromovat_Load(object sender, EventArgs e)
        {
            //inserare in gridview pentru angajati (managerId != null)
          
            lista2 = PromovareAngajati();



            foreach (var echipa in NumeEchipa())
            {

                listaNumeleEchipelor.Add(echipa.Nume);
            }

            foreach (var angajat in lista2)
            {
                AfisareAngajati afisareAngajati = new AfisareAngajati();
                afisareAngajati.Nume = angajat.Nume;
                afisareAngajati.Prenume = angajat.Prenume;
                afisareAngajati.Email = angajat.Email;
                afisareAngajati.DataNasterii = angajat.DataNasterii;
                afisareAngajati.Numartelefon = angajat.Numartelefon;
                afisareAngajati.NumeEchipa = angajat.IdEchipa == null ? "" : listaNumeleEchipelor[(int)angajat.IdEchipa - 1].ToString();

                listaAngajati2.Add(afisareAngajati);
            }

            dataGridView1.DataSource = listaAngajati2;

            dataGridView1.EnableHeadersVisualStyles = false;
           // label2.Text = "";



            dataGridView1.Columns["DataNasterii"].HeaderText = "Data nasterii";
            dataGridView1.Columns["Numartelefon"].HeaderText = "Numarul de telefon";
            dataGridView1.Columns["NumeEchipa"].HeaderText = "Echipa";



            //dataGridView2.Columns["DataNasterii"].HeaderText = "Data nasterii";
            //dataGridView2.Columns["Numartelefon"].HeaderText = "Numarul de telefon";
            //dataGridView2.Columns["NumeEchipa"].HeaderText = "Echipa";


            //citire din bd  nume si prenume angajat intr-un label
            string emailFolositLaSelect = "";
            if (Globals.EmailManager != "")
            {
                emailFolositLaSelect = Globals.EmailManager;
            }

            Angajat a = NumePrenumeAngajat(emailFolositLaSelect);


            string numesiprenume = a.Nume + " " + a.Prenume;

            label3.Text = numesiprenume;



            //afisare poza angajat
            await PozaAngajat(emailFolositLaSelect);


            //aducere nume echipe in combobox

            comboBox1.DataSource = NumeEchipa();
            comboBox1.DisplayMember = "Nume";
            comboBox1.ValueMember = "Id";




        }

        private async void button1_Click(object sender, EventArgs e)
        {

            if (dataGridView2.DataSource != null)
            {
                string emailManager = Globals.EmailManager;
                await UpdateManagerIdEchipaId(emailManager);
                MessageBox.Show("Modificari salvate cu succes!");

                Promovare_Angajat p = new Promovare_Angajat();
                this.Close();
                p.ShowDialog();
            }
            else { label1.Text = "* Lista de angajati este goala"; }
         

      


            dataGridView1.Columns["DataNasterii"].HeaderText = "Data nasterii";
            dataGridView1.Columns["Numartelefon"].HeaderText = "Numarul de telefon";
            dataGridView1.Columns["NumeEchipa"].HeaderText = "Echipa";

            dataGridView1.EnableHeadersVisualStyles = false;
            dataGridView2.EnableHeadersVisualStyles = false;

            

        }


        private async void comboBox1_SelectedIndexChanged(object sender, EventArgs e)
        {
            //la schimbare de combo box, poza trebuie sa se modifice si un id global(pe formular) treb sa se schimbe
            await PozaEchipa(IDECHIPAPOZA);


        }

        private async void pictureBox2_Click(object sender, EventArgs e)
        {
            //deschidere file explorer pt a citi o poza
            using (OpenFileDialog openFileDialog1 = new OpenFileDialog())
            {
                if (openFileDialog1.ShowDialog() == DialogResult.OK)
                {
                    string fileName = openFileDialog1.FileName;
                    byte[] bytes = File.ReadAllBytes(fileName);
                    string contentType = "";
                    //Set the contenttype based on File Extension

                    switch (Path.GetExtension(fileName))
                    {
                        case ".jpg":
                            contentType = "image/jpeg";
                            break;
                        case ".png":
                            contentType = "image/png";
                            break;
                        case ".gif":
                            contentType = "image/gif";
                            break;
                        case ".bmp":
                            contentType = "image/bmp";
                            break;
                    }


                    //adaugare poza pentru echipa din file explorer
                    HttpClient httpClient = new HttpClient();
                    XD.Models.Echipa echipa = new XD.Models.Echipa();
                    echipa.Id = Globals.IdEchipaSelectata;
                    echipa.Poza = bytes;
                    echipa.Descriere = "";
                    echipa.Nume = "";

                    string jsonString = JsonConvert.SerializeObject(echipa);
                    StringContent stringContent = new StringContent(jsonString, Encoding.UTF8, "application/json");
                    var response = await httpClient.PostAsync("http://localhost:5107/Echipa/UpdatePozaEchipa", stringContent);

                    pictureBox2.Image = System.Drawing.Image.FromStream(new MemoryStream(bytes));
                }
            }
        }

        private void dataGridView1_CellClick(object sender, DataGridViewCellEventArgs e)
        {
            emailSelectat = dataGridView1.Rows[e.RowIndex].Cells["Email"].Value.ToString();
        }

        //buton inapoi
        private void button2_Click_1(object sender, EventArgs e)
        {
            this.Close();
        }

        private void label6_Click(object sender, EventArgs e)
        {

        }


        //asta pune ang in lista
        private async void button3_Click(object sender, EventArgs e)
        {
            if (listaAngajati2.Count > 0)
            {
                int selectedrowindex = dataGridView1.SelectedCells[0].RowIndex;
                listaAngajatiAdaugati.Add(listaAngajati2[selectedrowindex]);
                listaAngajati2.Remove(listaAngajati2[selectedrowindex]);

                lista.Add(lista2[selectedrowindex]);
                lista2.Remove(lista2[selectedrowindex]);


                dataGridView1.DataSource = null;
                dataGridView2.DataSource = null;

                dataGridView1.DataSource = listaAngajati2;
                dataGridView2.DataSource = listaAngajatiAdaugati;

                dataGridView1.Columns["DataNasterii"].HeaderText = "Data nasterii";
                dataGridView1.Columns["Numartelefon"].HeaderText = "Numarul de telefon";
                dataGridView1.Columns["NumeEchipa"].HeaderText = "Echipa";

                dataGridView2.Columns["DataNasterii"].HeaderText = "Data nasterii";
                dataGridView2.Columns["Numartelefon"].HeaderText = "Numarul de telefon";
                dataGridView2.Columns["NumeEchipa"].HeaderText = "Echipa";

                dataGridView1.EnableHeadersVisualStyles = false;
                dataGridView2.EnableHeadersVisualStyles = false;
            }



        }
        //asta scoate ang din lista
        private void button4_Click(object sender, EventArgs e)
        {
            if (listaAngajatiAdaugati.Count > 0)
            {
                int selectedrowindex = dataGridView2.SelectedCells[0].RowIndex;
                listaAngajati2.Add(listaAngajatiAdaugati[selectedrowindex]);
                listaAngajatiAdaugati.Remove(listaAngajatiAdaugati[selectedrowindex]);


                lista2.Add(lista[selectedrowindex]);
                lista.Remove(lista[selectedrowindex]);

                dataGridView1.DataSource = null;
                dataGridView2.DataSource = null;

                dataGridView1.DataSource = listaAngajati2;
                dataGridView2.DataSource = listaAngajatiAdaugati;

                dataGridView1.Columns["DataNasterii"].HeaderText = "Data nasterii";
                dataGridView1.Columns["Numartelefon"].HeaderText = "Numarul de telefon";
                dataGridView1.Columns["NumeEchipa"].HeaderText = "Echipa";

                dataGridView2.Columns["DataNasterii"].HeaderText = "Data nasterii";
                dataGridView2.Columns["Numartelefon"].HeaderText = "Numarul de telefon";
                dataGridView2.Columns["NumeEchipa"].HeaderText = "Echipa";
                dataGridView1.EnableHeadersVisualStyles = false;
                dataGridView2.EnableHeadersVisualStyles = false;
            }



        }
    }
}
