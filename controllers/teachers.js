const mysql = require('mysql');

// EJS VIEWS
const getAllTeachers = (req, res) => {
  let sql = 'SELECT ?? FROM ??';
  const replacements = ['*', 'teachers'];
  sql = mysql.format(sql, replacements);
  db.query(sql, (err, results) => {
    if (err) {
      console.log('********** ERROR REQUESTING FROM DATABASE *************');
      throw err;
    }
    console.log(results);
    res.render('teachers.ejs', { teachers: results });
  });
};

// ---------------------------------------------------------------------------------

// CMS SubSection
const getAllTeachersCMS = (req, res) => {
  let sql = 'SELECT ?? FROM ??';
  const replacements = ['*', 'teachers'];
  sql = mysql.format(sql, replacements);
  db.query(sql, (err, results) => {
    if (err) {
      console.log('********** ERROR REQUESTING FROM DATABASE *************');
      throw err;
    }
    // console.log(results);
    res.send({ teachers: JSON.parse(JSON.stringify(results)) });
  });
};

const createTeacher = (req, res) => {
  const post = req.body;
  // console.log('Post Object: ', post.first_name);

  const query = db.query(
    `INSERT INTO teachers(first_name, last_name, bio) VALUES ('${post.first_name}', '${post.last_name}', '${post.bio}')`,
    err => {
      if (err) throw err;
    }
  );
  // console.log('ADD /teachers: ', query.sql);
  res.send('Success: Teacher Created');
};

const editTeacher = (req, res) => {
  let sql = 'UPDATE ?? set ? where ?? = ?';

  const replacements = ['teachers', req.body, 'id', req.body.id];
  sql = mysql.format(sql, replacements);
  db.query(sql, (err, results) => {
    if (err) {
      console.log('********** ERROR REQUESTING FROM DATABASE *************');
      throw err;
    }
    console.log(results);
    res.send('Success: Teacher Updated');
  });
};

const deleteTeacher = (req, res) => {
  let sql = 'DELETE from ?? where ?? = ?';
  const replacements = ['teachers', 'id', req.body.id];
  sql = mysql.format(sql, replacements);
  db.query(sql, (err, results) => {
    if (err) {
      console.log('********** ERROR REQUESTING FROM DATABASE *************');
      throw err;
    }
    console.log('Controller Results: ', results);
    res.send('Success: Teacher Deleted');
  });
};

module.exports = {
  getAllTeachers,
  createTeacher,
  getAllTeachersCMS,
  editTeacher,
  deleteTeacher,
};
