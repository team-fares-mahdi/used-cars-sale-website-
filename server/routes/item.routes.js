const router = require('express').Router();
const {selectAll,add,suprim, modify, addUser, suprimUser, modifyUser, selectAllUser, selectOneUser} = require("../controllers/item.controller");

router.get("/AllCars", selectAll);
router.post("/add:email",add)
router.delete("/del:id",suprim)
router.put("/upd:id",modify)
//user tabel
router.post("/addUser", addUser)
router.delete("/user:id",suprimUser)
router.put("/modif:id",modifyUser)
router.get("/allUsers",selectAllUser)
router.get("/oneUser:email",selectOneUser)
module.exports = router;
