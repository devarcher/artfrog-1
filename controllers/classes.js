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

const addNewClass = (req, res) => {
  const post = req.body;
  const query = db.query('INSERT INTO artfrog.classes SET ?', post, err => {
    if (err) throw err;
  });
  console.log('ADD /classes: ', query.sql);
  res.send('success'); // render to the admin panel
};

module.exports = { getAllClasses, addNewClass };
