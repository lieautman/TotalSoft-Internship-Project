﻿namespace AplicatieConcediu
{
    partial class Pagina_CreareConcediu
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.components = new System.ComponentModel.Container();
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(Pagina_CreareConcediu));
            this.lbTitlu = new System.Windows.Forms.Label();
            this.lbTipConcediu = new System.Windows.Forms.Label();
            this.lbDataIncepere = new System.Windows.Forms.Label();
            this.lbDataIncetare = new System.Windows.Forms.Label();
            this.lbTotalZile = new System.Windows.Forms.Label();
            this.lbMotivCerere = new System.Windows.Forms.Label();
            this.btnAdaugare = new System.Windows.Forms.Button();
            this.lbInlocuitor = new System.Windows.Forms.Label();
            this.cbTipConcediu = new System.Windows.Forms.ComboBox();
            this.tipConcediuBindingSource1 = new System.Windows.Forms.BindingSource(this.components);
            this.sqlConnection1 = new Microsoft.Data.SqlClient.SqlConnection();
            this.dateTimePickerDataIncepere = new System.Windows.Forms.DateTimePicker();
            this.dateTimePickerDataIncetare = new System.Windows.Forms.DateTimePicker();
            this.tbTotalZileConcediuCreat = new System.Windows.Forms.TextBox();
            this.btnBack = new System.Windows.Forms.Button();
            this.cbInlocuitori = new System.Windows.Forms.ComboBox();
            this.tbMotiv = new System.Windows.Forms.TextBox();
            this.lbZileConcediuDisponibile = new System.Windows.Forms.Label();
            this.lbRezultatZileConcediuDisponibile = new System.Windows.Forms.Label();
            this.labelEroareTipConcediu = new System.Windows.Forms.Label();
            this.labelEroareInlocuitor = new System.Windows.Forms.Label();
            this.tipConcediuBindingSource = new System.Windows.Forms.BindingSource(this.components);
            ((System.ComponentModel.ISupportInitialize)(this.tipConcediuBindingSource1)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.tipConcediuBindingSource)).BeginInit();
            this.SuspendLayout();
            // 
            // lbTitlu
            // 
            this.lbTitlu.AutoSize = true;
            this.lbTitlu.Font = new System.Drawing.Font("Rockwell", 12F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lbTitlu.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(249)))), ((int)(((byte)(80)))), ((int)(((byte)(0)))));
            this.lbTitlu.Image = global::AplicatieConcediu.Properties.Resources.BackGround;
            this.lbTitlu.Location = new System.Drawing.Point(270, 7);
            this.lbTitlu.Margin = new System.Windows.Forms.Padding(2, 0, 2, 0);
            this.lbTitlu.Name = "lbTitlu";
            this.lbTitlu.Size = new System.Drawing.Size(139, 19);
            this.lbTitlu.TabIndex = 0;
            this.lbTitlu.Text = "Creare concediu";
            this.lbTitlu.TextAlign = System.Drawing.ContentAlignment.TopCenter;
            // 
            // lbTipConcediu
            // 
            this.lbTipConcediu.AutoSize = true;
            this.lbTipConcediu.Font = new System.Drawing.Font("Rockwell", 9.75F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lbTipConcediu.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(249)))), ((int)(((byte)(80)))), ((int)(((byte)(0)))));
            this.lbTipConcediu.Image = global::AplicatieConcediu.Properties.Resources.BackGround;
            this.lbTipConcediu.Location = new System.Drawing.Point(214, 46);
            this.lbTipConcediu.Margin = new System.Windows.Forms.Padding(2, 0, 2, 0);
            this.lbTipConcediu.Name = "lbTipConcediu";
            this.lbTipConcediu.Size = new System.Drawing.Size(94, 15);
            this.lbTipConcediu.TabIndex = 1;
            this.lbTipConcediu.Text = "Tip concediu:";
            // 
            // lbDataIncepere
            // 
            this.lbDataIncepere.AutoSize = true;
            this.lbDataIncepere.Font = new System.Drawing.Font("Rockwell", 9.75F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lbDataIncepere.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(249)))), ((int)(((byte)(80)))), ((int)(((byte)(0)))));
            this.lbDataIncepere.Image = global::AplicatieConcediu.Properties.Resources.BackGround;
            this.lbDataIncepere.Location = new System.Drawing.Point(212, 92);
            this.lbDataIncepere.Margin = new System.Windows.Forms.Padding(2, 0, 2, 0);
            this.lbDataIncepere.Name = "lbDataIncepere";
            this.lbDataIncepere.Size = new System.Drawing.Size(101, 15);
            this.lbDataIncepere.TabIndex = 2;
            this.lbDataIncepere.Text = "Data incepere:";
            // 
            // lbDataIncetare
            // 
            this.lbDataIncetare.AutoSize = true;
            this.lbDataIncetare.Font = new System.Drawing.Font("Rockwell", 9.75F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lbDataIncetare.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(249)))), ((int)(((byte)(80)))), ((int)(((byte)(0)))));
            this.lbDataIncetare.Image = global::AplicatieConcediu.Properties.Resources.BackGround;
            this.lbDataIncetare.Location = new System.Drawing.Point(214, 118);
            this.lbDataIncetare.Margin = new System.Windows.Forms.Padding(2, 0, 2, 0);
            this.lbDataIncetare.Name = "lbDataIncetare";
            this.lbDataIncetare.Size = new System.Drawing.Size(99, 15);
            this.lbDataIncetare.TabIndex = 3;
            this.lbDataIncetare.Text = "Data incetare:";
            // 
            // lbTotalZile
            // 
            this.lbTotalZile.AutoSize = true;
            this.lbTotalZile.Font = new System.Drawing.Font("Rockwell", 9.75F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lbTotalZile.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(249)))), ((int)(((byte)(80)))), ((int)(((byte)(0)))));
            this.lbTotalZile.Image = global::AplicatieConcediu.Properties.Resources.BackGround;
            this.lbTotalZile.Location = new System.Drawing.Point(240, 149);
            this.lbTotalZile.Margin = new System.Windows.Forms.Padding(2, 0, 2, 0);
            this.lbTotalZile.Name = "lbTotalZile";
            this.lbTotalZile.Size = new System.Drawing.Size(73, 15);
            this.lbTotalZile.TabIndex = 4;
            this.lbTotalZile.Text = "Total zile:";
            // 
            // lbMotivCerere
            // 
            this.lbMotivCerere.AutoSize = true;
            this.lbMotivCerere.Font = new System.Drawing.Font("Rockwell", 9.75F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lbMotivCerere.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(249)))), ((int)(((byte)(80)))), ((int)(((byte)(0)))));
            this.lbMotivCerere.Image = global::AplicatieConcediu.Properties.Resources.BackGround;
            this.lbMotivCerere.Location = new System.Drawing.Point(204, 178);
            this.lbMotivCerere.Margin = new System.Windows.Forms.Padding(2, 0, 2, 0);
            this.lbMotivCerere.Name = "lbMotivCerere";
            this.lbMotivCerere.Size = new System.Drawing.Size(109, 15);
            this.lbMotivCerere.TabIndex = 5;
            this.lbMotivCerere.Text = "Motivul cererii:";
            // 
            // btnAdaugare
            // 
            this.btnAdaugare.FlatAppearance.BorderColor = System.Drawing.Color.FromArgb(((int)(((byte)(249)))), ((int)(((byte)(80)))), ((int)(((byte)(0)))));
            this.btnAdaugare.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btnAdaugare.Font = new System.Drawing.Font("Rockwell", 12F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnAdaugare.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(92)))), ((int)(((byte)(183)))), ((int)(((byte)(164)))));
            this.btnAdaugare.Image = global::AplicatieConcediu.Properties.Resources.BackGround;
            this.btnAdaugare.Location = new System.Drawing.Point(274, 288);
            this.btnAdaugare.Margin = new System.Windows.Forms.Padding(2);
            this.btnAdaugare.Name = "btnAdaugare";
            this.btnAdaugare.Size = new System.Drawing.Size(111, 34);
            this.btnAdaugare.TabIndex = 6;
            this.btnAdaugare.Text = "Adaugare";
            this.btnAdaugare.UseVisualStyleBackColor = true;
            this.btnAdaugare.Click += new System.EventHandler(this.button1_Click);
            // 
            // lbInlocuitor
            // 
            this.lbInlocuitor.AutoSize = true;
            this.lbInlocuitor.Font = new System.Drawing.Font("Rockwell", 9.75F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lbInlocuitor.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(249)))), ((int)(((byte)(80)))), ((int)(((byte)(0)))));
            this.lbInlocuitor.Image = global::AplicatieConcediu.Properties.Resources.BackGround;
            this.lbInlocuitor.Location = new System.Drawing.Point(238, 204);
            this.lbInlocuitor.Margin = new System.Windows.Forms.Padding(2, 0, 2, 0);
            this.lbInlocuitor.Name = "lbInlocuitor";
            this.lbInlocuitor.Size = new System.Drawing.Size(75, 15);
            this.lbInlocuitor.TabIndex = 8;
            this.lbInlocuitor.Text = "Inlocuitor:";
            // 
            // cbTipConcediu
            // 
            this.cbTipConcediu.DropDownStyle = System.Windows.Forms.ComboBoxStyle.DropDownList;
            this.cbTipConcediu.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.cbTipConcediu.FormattingEnabled = true;
            this.cbTipConcediu.Location = new System.Drawing.Point(317, 44);
            this.cbTipConcediu.Margin = new System.Windows.Forms.Padding(2);
            this.cbTipConcediu.Name = "cbTipConcediu";
            this.cbTipConcediu.Size = new System.Drawing.Size(151, 21);
            this.cbTipConcediu.TabIndex = 10;
            this.cbTipConcediu.SelectedIndexChanged += new System.EventHandler(this.comboBox1_SelectedIndexChanged);
            // 
            // tipConcediuBindingSource1
            // 
            this.tipConcediuBindingSource1.DataMember = "TipConcediu";
            // 
            // sqlConnection1
            // 
            this.sqlConnection1.FireInfoMessageEventOnUserErrors = false;
            // 
            // dateTimePickerDataIncepere
            // 
            this.dateTimePickerDataIncepere.Format = System.Windows.Forms.DateTimePickerFormat.Short;
            this.dateTimePickerDataIncepere.Location = new System.Drawing.Point(317, 87);
            this.dateTimePickerDataIncepere.Margin = new System.Windows.Forms.Padding(2);
            this.dateTimePickerDataIncepere.Name = "dateTimePickerDataIncepere";
            this.dateTimePickerDataIncepere.Size = new System.Drawing.Size(84, 20);
            this.dateTimePickerDataIncepere.TabIndex = 10;
            this.dateTimePickerDataIncepere.Value = new System.DateTime(2022, 9, 1, 0, 0, 0, 0);
            this.dateTimePickerDataIncepere.ValueChanged += new System.EventHandler(this.dateTimePicker1_ValueChanged);
            // 
            // dateTimePickerDataIncetare
            // 
            this.dateTimePickerDataIncetare.Format = System.Windows.Forms.DateTimePickerFormat.Short;
            this.dateTimePickerDataIncetare.Location = new System.Drawing.Point(317, 118);
            this.dateTimePickerDataIncetare.Margin = new System.Windows.Forms.Padding(2);
            this.dateTimePickerDataIncetare.Name = "dateTimePickerDataIncetare";
            this.dateTimePickerDataIncetare.Size = new System.Drawing.Size(84, 20);
            this.dateTimePickerDataIncetare.TabIndex = 11;
            this.dateTimePickerDataIncetare.ValueChanged += new System.EventHandler(this.dateTimePicker2_ValueChanged);
            // 
            // tbTotalZileConcediuCreat
            // 
            this.tbTotalZileConcediuCreat.Enabled = false;
            this.tbTotalZileConcediuCreat.Location = new System.Drawing.Point(317, 149);
            this.tbTotalZileConcediuCreat.Margin = new System.Windows.Forms.Padding(2);
            this.tbTotalZileConcediuCreat.Name = "tbTotalZileConcediuCreat";
            this.tbTotalZileConcediuCreat.Size = new System.Drawing.Size(84, 20);
            this.tbTotalZileConcediuCreat.TabIndex = 12;
            // 
            // btnBack
            // 
            this.btnBack.FlatAppearance.BorderSize = 0;
            this.btnBack.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btnBack.Font = new System.Drawing.Font("Rockwell", 20.25F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnBack.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(92)))), ((int)(((byte)(183)))), ((int)(((byte)(164)))));
            this.btnBack.Image = global::AplicatieConcediu.Properties.Resources.BackGround;
            this.btnBack.Location = new System.Drawing.Point(545, 11);
            this.btnBack.Margin = new System.Windows.Forms.Padding(2);
            this.btnBack.Name = "btnBack";
            this.btnBack.Size = new System.Drawing.Size(44, 45);
            this.btnBack.TabIndex = 1;
            this.btnBack.Text = "⮌";
            this.btnBack.UseVisualStyleBackColor = true;
            this.btnBack.Click += new System.EventHandler(this.buttonBack_Click);
            // 
            // cbInlocuitori
            // 
            this.cbInlocuitori.DropDownStyle = System.Windows.Forms.ComboBoxStyle.DropDownList;
            this.cbInlocuitori.FormattingEnabled = true;
            this.cbInlocuitori.Location = new System.Drawing.Point(317, 204);
            this.cbInlocuitori.Margin = new System.Windows.Forms.Padding(2);
            this.cbInlocuitori.Name = "cbInlocuitori";
            this.cbInlocuitori.Size = new System.Drawing.Size(151, 21);
            this.cbInlocuitori.TabIndex = 13;
            this.cbInlocuitori.SelectedIndexChanged += new System.EventHandler(this.comboBox2_SelectedIndexChanged);
            // 
            // tbMotiv
            // 
            this.tbMotiv.Location = new System.Drawing.Point(317, 176);
            this.tbMotiv.Margin = new System.Windows.Forms.Padding(2);
            this.tbMotiv.Name = "tbMotiv";
            this.tbMotiv.Size = new System.Drawing.Size(151, 20);
            this.tbMotiv.TabIndex = 14;
            // 
            // lbZileConcediuDisponibile
            // 
            this.lbZileConcediuDisponibile.AutoSize = true;
            this.lbZileConcediuDisponibile.Font = new System.Drawing.Font("Rockwell", 9.75F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lbZileConcediuDisponibile.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(249)))), ((int)(((byte)(80)))), ((int)(((byte)(0)))));
            this.lbZileConcediuDisponibile.Image = ((System.Drawing.Image)(resources.GetObject("lbZileConcediuDisponibile.Image")));
            this.lbZileConcediuDisponibile.Location = new System.Drawing.Point(140, 249);
            this.lbZileConcediuDisponibile.Name = "lbZileConcediuDisponibile";
            this.lbZileConcediuDisponibile.Size = new System.Drawing.Size(173, 15);
            this.lbZileConcediuDisponibile.TabIndex = 15;
            this.lbZileConcediuDisponibile.Text = "Zile concediu disponibile:";
            // 
            // lbRezultatZileConcediuDisponibile
            // 
            this.lbRezultatZileConcediuDisponibile.AutoSize = true;
            this.lbRezultatZileConcediuDisponibile.Font = new System.Drawing.Font("Rockwell", 9.75F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lbRezultatZileConcediuDisponibile.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(92)))), ((int)(((byte)(183)))), ((int)(((byte)(164)))));
            this.lbRezultatZileConcediuDisponibile.Image = global::AplicatieConcediu.Properties.Resources.BackGround;
            this.lbRezultatZileConcediuDisponibile.Location = new System.Drawing.Point(319, 249);
            this.lbRezultatZileConcediuDisponibile.Name = "lbRezultatZileConcediuDisponibile";
            this.lbRezultatZileConcediuDisponibile.Size = new System.Drawing.Size(47, 15);
            this.lbRezultatZileConcediuDisponibile.TabIndex = 16;
            this.lbRezultatZileConcediuDisponibile.Text = "label9";
            // 
            // labelEroareTipConcediu
            // 
            this.labelEroareTipConcediu.AutoSize = true;
            this.labelEroareTipConcediu.Font = new System.Drawing.Font("Rockwell", 7.75F, System.Drawing.FontStyle.Bold);
            this.labelEroareTipConcediu.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(92)))), ((int)(((byte)(183)))), ((int)(((byte)(164)))));
            this.labelEroareTipConcediu.Image = ((System.Drawing.Image)(resources.GetObject("labelEroareTipConcediu.Image")));
            this.labelEroareTipConcediu.Location = new System.Drawing.Point(212, 67);
            this.labelEroareTipConcediu.Name = "labelEroareTipConcediu";
            this.labelEroareTipConcediu.Size = new System.Drawing.Size(139, 14);
            this.labelEroareTipConcediu.TabIndex = 29;
            this.labelEroareTipConcediu.Text = "labelEroareTipConcediu";
            // 
            // labelEroareInlocuitor
            // 
            this.labelEroareInlocuitor.AutoSize = true;
            this.labelEroareInlocuitor.Font = new System.Drawing.Font("Rockwell", 7.75F, System.Drawing.FontStyle.Bold);
            this.labelEroareInlocuitor.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(92)))), ((int)(((byte)(183)))), ((int)(((byte)(164)))));
            this.labelEroareInlocuitor.Image = ((System.Drawing.Image)(resources.GetObject("labelEroareInlocuitor.Image")));
            this.labelEroareInlocuitor.Location = new System.Drawing.Point(238, 227);
            this.labelEroareInlocuitor.Name = "labelEroareInlocuitor";
            this.labelEroareInlocuitor.Size = new System.Drawing.Size(123, 14);
            this.labelEroareInlocuitor.TabIndex = 30;
            this.labelEroareInlocuitor.Text = "labelEroareInlocuitor";
            // 
            // tipConcediuBindingSource
            // 
            this.tipConcediuBindingSource.DataSource = typeof(AplicatieConcediu.TipConcediu);
            // 
            // Pagina_CreareConcediu
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.AutoValidate = System.Windows.Forms.AutoValidate.EnableAllowFocusChange;
            this.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(92)))), ((int)(((byte)(183)))), ((int)(((byte)(164)))));
            this.BackgroundImage = ((System.Drawing.Image)(resources.GetObject("$this.BackgroundImage")));
            this.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Stretch;
            this.ClientSize = new System.Drawing.Size(600, 366);
            this.Controls.Add(this.labelEroareInlocuitor);
            this.Controls.Add(this.labelEroareTipConcediu);
            this.Controls.Add(this.lbRezultatZileConcediuDisponibile);
            this.Controls.Add(this.lbZileConcediuDisponibile);
            this.Controls.Add(this.tbMotiv);
            this.Controls.Add(this.cbInlocuitori);
            this.Controls.Add(this.tbTotalZileConcediuCreat);
            this.Controls.Add(this.dateTimePickerDataIncetare);
            this.Controls.Add(this.dateTimePickerDataIncepere);
            this.Controls.Add(this.btnBack);
            this.Controls.Add(this.cbTipConcediu);
            this.Controls.Add(this.lbInlocuitor);
            this.Controls.Add(this.btnAdaugare);
            this.Controls.Add(this.lbMotivCerere);
            this.Controls.Add(this.lbTotalZile);
            this.Controls.Add(this.lbDataIncetare);
            this.Controls.Add(this.lbDataIncepere);
            this.Controls.Add(this.lbTipConcediu);
            this.Controls.Add(this.lbTitlu);
            this.DoubleBuffered = true;
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.None;
            this.Name = "Pagina_CreareConcediu";
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
            this.Text = "Form1";
            this.Load += new System.EventHandler(this.Pagin_CreareConcediu_Load);
            ((System.ComponentModel.ISupportInitialize)(this.tipConcediuBindingSource1)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.tipConcediuBindingSource)).EndInit();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Label lbTitlu;
        private System.Windows.Forms.Label lbTipConcediu;
        private System.Windows.Forms.Label lbDataIncepere;
        private System.Windows.Forms.Label lbDataIncetare;
        private System.Windows.Forms.Label lbTotalZile;
        private System.Windows.Forms.Label lbMotivCerere;
        private System.Windows.Forms.Button btnAdaugare;
        private System.Windows.Forms.Label lbInlocuitor;
        private System.Windows.Forms.ComboBox cbTipConcediu;
        private Microsoft.Data.SqlClient.SqlConnection sqlConnection1;
        private System.Windows.Forms.BindingSource tipConcediuBindingSource;
        //private DataSet1 dataSet1;
        private System.Windows.Forms.BindingSource tipConcediuBindingSource1;
       // private DataSet1TableAdapters.TipConcediuTableAdapter tipConcediuTableAdapter;
        private System.Windows.Forms.DateTimePicker dateTimePickerDataIncepere;
        private System.Windows.Forms.DateTimePicker dateTimePickerDataIncetare;
        private System.Windows.Forms.TextBox tbTotalZileConcediuCreat;
        private System.Windows.Forms.Button btnBack;
        private System.Windows.Forms.ComboBox cbInlocuitori;
        private System.Windows.Forms.TextBox tbMotiv;
		private System.Windows.Forms.Label lbZileConcediuDisponibile;
		private System.Windows.Forms.Label lbRezultatZileConcediuDisponibile;
        private System.Windows.Forms.Label labelEroareTipConcediu;
        private System.Windows.Forms.Label labelEroareInlocuitor;
    }
}