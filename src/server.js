const express = require('express')
const cors = require('cors')
const app = express();
const fs1 = require('node:fs')
const mysql = require('mysql2')
const Sequelize = require('sequelize');

app.use(cors());
app.use(express.json());


port = 3080;

app.listen(port,()=>{
  console.log('Server listening on the port: '+port)
});


//Connexió base dades sense Sequelize
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'patata',
  database: 'unimarcrubio'
});

connection.connect((err)=>{
  if (err) throw err;
  console.log("Connexió realitzada a la base de dades MySQL")
});



//Ex1
  app.post('/modifCorreu', (req, res) => {
  const emailColumn = 'alumn_e_mail';
  const newColumnType = 'VARCHAR(30)';
  const tableName = 'alumnes';

  const query = `ALTER TABLE ${tableName} MODIFY ${emailColumn} ${newColumnType};`;

  connection.query(query, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'No se pudo modificar la columna email' });
    } else {
      if (result.warningCount > 0) {
        res.status(200).json({ message: 'La columna email ya es VARCHAR(30)' });
      } else {
        res.status(200).json({ message: 'Columna email modificada a VARCHAR(30)' });
      }
    }
  });
});



//Ex2
app.get('/llistaAssiInfo', (req, res) => {
  const deptNom = 'INFORMATICA I MATEMATICA APLICADA';
  const query = `SELECT assig.ASSIG_NOM, assig.ASSIG_CODI
                 FROM ASSIGNATURES assig
                 INNER JOIN ASSIGNATURES_PROFESSOR assigpro ON assig.ASSIG_CODI = assigpro.ASSIGPROF_ASSIG_CODI
                 INNER JOIN PROFESSOR pro ON assigpro.ASSIGPROF_PROF_DNI = pro.PROF_DNI
                 INNER JOIN DEPARTAMENT dep ON pro.PROF_DNI = dep.DEPT_PROF_DNI
                 WHERE dep.DEPT_NOM = '${deptNom}'`;

  connection.query(query, (err, info) => {
    if (err) {
      throw err;
    } else {
      res.json(info);
      console.log(info)
    }
  });
});



//Ex3


//Conexió base de dades amb Sequelize
const sequelize = new Sequelize('unimarcrubio', 'root', 'patata', {
  host: 'localhost',
  dialect: 'mysql',
});


const initModels = require('C:\\Users\\marcr\\OneDrive\\Escritorio\\1r DAM\\LEA\\UF1- Entorns de desenvolupament\\UF2_ExMarcRubio\\models\\init-models.js')
const models = initModels(sequelize);

app.post("/afegirDepartament", (req) =>{
  console.log('Insert fet!!!')
  console.log(req.body)
  models.departament.create(req.body)
});
