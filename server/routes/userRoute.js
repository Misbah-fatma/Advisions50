const {
  getStudent__controller,
  getTeacher__controller,
  deleteTeacher__controller,
  createUser__controller,
  createUser,
  updateUserRole,
  deleteUser,
  updateUserPassword
} = require("../controllers/userController");
const { adminAuthentication, studentAuthentication, teacherAuthentication } = require("../middlewares/authentication");
const { requireLogin } = require("../middlewares/requireLogin");

const router = require("express").Router();

router.get(
  "/student",
  requireLogin,
  getStudent__controller
);


router.get(
  "/teacher",
  requireLogin,

  getTeacher__controller
); 


router.get(
  "/delete-teacher",
  requireLogin,
  adminAuthentication,
  deleteTeacher__controller
);

router.post('/createUser',

 createUser
);

router.put('/updateRole', 
updateUserRole
);

router.put('/updatePassword', 
updateUserPassword
);

router.delete('/:userId', 
deleteUser);

module.exports = router;
