const express = require("express");
const router = express.Router();

router.route("/students").get();
router.route("/students/:studentId").get();
router.route("/students/:studentId/courses").get();
router.route("/students/:studentId/courses/:courseId").get();

module.exports = router;