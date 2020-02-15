const mysql = require('mysql');

const getAllClasses = (req, res) => {
  const sql = 'SELECT * FROM classes';
  db.query(sql, (err, results) => {
    if (err) {
      console.log('********** ERROR REQUESTING FROM DATABASE *************');
      throw err;
    }
    console.log(results);
    // res.json(results);
    res.render('classes.ejs', { classes: results });
  });
};

// ---------------------------------------------------------------------------------

// CMS SubSection
const getAllClassesCMS = (req, res) => {
  let sql = 'SELECT ?? FROM ??';
  const replacements = ['*', 'classes'];
  sql = mysql.format(sql, replacements);
  db.query(sql, (err, results) => {
    if (err) {
      console.log('********** ERROR REQUESTING FROM DATABASE *************');
      throw err;
    }
    // console.log(results);
    res.send({ classes: JSON.parse(JSON.stringify(results)) });
  });
};

const createClass = (req, res) => {
  let sql = 'INSERT INTO ?? (??, ??, ??, ??, ??) VALUES (?, ?, ?, ?, ?)';
  const post = req.body;
  const replacements = [
    'classes',
    'class_name',
    'description',
    'date',
    'start_time',
    'end_time',
    post.class_name,
    post.description,
    post.date,
    post.start_time,
    post.end_time,
  ];
  sql = mysql.format(sql, replacements);
  db.query(sql, (err, results) => {
    if (err) {
      console.log('********** ERROR REQUESTING FROM DATABASE *************');
      throw err;
    }
    console.log(results);
    res.send('Success: Teacher Created');
  });
};

const editClass = (req, res) => {
  let sql = 'UPDATE ?? set ? where ?? = ?';
  const replacements = ['classes', req.body, 'class_id', req.body.class_id];
  sql = mysql.format(sql, replacements);
  db.query(sql, (err, results) => {
    if (err) {
      console.log('********** ERROR REQUESTING FROM DATABASE *************');
      throw err;
    }
    console.log(results);
    res.send('Success: Class Updated');
  });
};

const deleteClass = (req, res) => {
  let sql = 'DELETE from ?? where ?? = ?';
  const replacements = ['classes', 'class_id', req.body.class_id];
  sql = mysql.format(sql, replacements);
  db.query(sql, (err, results) => {
    if (err) {
      console.log('********** ERROR REQUESTING FROM DATABASE *************');
      throw err;
    }
    // console.log('Controller Results: ', results);
    res.send('Success: Class Deleted');
  });
};

module.exports = {
  getAllClasses,
  getAllClassesCMS,
  createClass,
  editClass,
  deleteClass,
};
