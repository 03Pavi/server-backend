const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json({
    status: "This is the Thesis Advisors Catalog Microservice 1.0.0",
  });
});

router.use("/attendance", require("./attendance.route"));
router.use("/session", require("./session.route"));
