const Job = require("../models/job");

module.exports = {
  index,
};

function index(req, res) {
  Job.find({}, function (err, jobs) {
    res.render("jobs/index", jobs);
  });
}
