const db = require("../database-mysql");
//methode to interact withe cars table
const selectAll = function (req, res) {
  db.query("SELECT * FROM cars", (err, items, fields) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(items);
    }
  });
};
const selectOne = (req, res) => {};

const add = (req, res) => {
  let sql = `INSERT INTO cars (imageUrl, brand, color, price, PhoneNumber, description, gearbox,fuel,User_idUser ) values (?,?,?,?,?,?,?,?,?)`;
  let data = [
    req.body.imageUrl,
    req.body.brand,
    req.body.color,
    req.body.price,
    req.body.PhoneNumber,
    req.body.description,
    req.body.gearbox,
    req.body.fuel,
    req.params.User_idUser
  ];
  db.query(sql, data, (err, result, fields) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(result);
    }
  });
};

const suprim = (req, res) => {
  let sql = "DELETE FROM cars WHERE idCars = ?";
  let data = [req.params.id];
  db.query(sql, data, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(202).send(result);
    }
  });
};
const modify = (req, res) => {
  let sql = `UPDATE cars SET imageUrl=?, brand=?, color=?, price=?, PhoneNumber=?, description=?, gearbox=?,fuel=? WHERE idCars = ?`;
  let data = [
    req.body.imageUrl,
    req.body.brand,
    req.body.color,
    req.body.price,
    req.body.PhoneNumber,
    req.body.description,
    req.body.gearbox,
    req.body.fuel,
    req.params.id
  ];
  db.query(sql, data, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(202).send(result);
    }
  });
};
//methode to interact with users table
const addUser=(req, res)=>{
    let sql= "INSERT INTO user (userName, email, password) values(?,?,?)"
    let data = [
        req.body.userName,
        req.body.email,
        req.body.password
      ];
      db.query(sql, data, (err, result) => {
        if (err) {
          res.status(500).send(err);
        } else {
          res.status(200).send(result);
        }
      })
}
const suprimUser =(req,res)=>{
    let sql = "DELETE FROM user WHERE idUser = ?";
    let data = [req.params.id];
    console.log(data);
    db.query(sql, data, (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(202).send(result);
      }
    });
}
const modifyUser =(req,res)=>{
    let sql= `UPDATE user SET userName= ?, email=?, password=? WHERE idUser = ? `
    let data = [
        req.body.userName,
        req.body.email,
        req.body.password,
        req.params.id
      ];
      db.query(sql, data, (err, result) => {
        if (err) {
          res.status(500).send(err);
        } else {
          res.status(202).send(result);
        }
      });
}
const selectAllUser=(req,res)=>{
    db.query("SELECT * FROM user", (err, items, fields) => {
        if (err) {
          res.status(500).send(err);
        } else {
          res.status(200).send(items);
        }
      });
}
// const selectOneUser =(req,res)=>{
//   let data=[req.body.email]
//   console.log(data);
//   var sql = 'SELECT * FROM user WHERE email = ?'
// db.query(sql, [data],  (err, result)=>{
//   if (err) {
//     res.status(500).send(err);
//   } else {
//     res.status(202).send(result);
//   }
// })}
const selectOneUser =(req,res)=>{
  let data=[req.params.email]
  console.log(data);
  var sql = 'SELECT * FROM user WHERE email = ?'
db.query(sql, [data],  (err, result)=>{
  if (err) {
    res.status(500).send(err);
  } else {
    res.status(202).send(result);
  }
})}
module.exports = { selectAll, add, suprim , modify, addUser,suprimUser, modifyUser,selectAllUser,selectOneUser };
