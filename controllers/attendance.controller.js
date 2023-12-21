const { teacher_service } = require("../services/index.js");
const { handle_error } = require("../lib/error_handler.js");

get_filtered_course = async (req, res) => {
  try {
    const response = await advisor_service.get_filtered_course(req);
    res.status(200).send(response);
  } catch (error) {
    console.log("Error during getting filtered course: ", error);
    handle_error(res, error);
  }
};

module.exports = { get_filtered_course };
