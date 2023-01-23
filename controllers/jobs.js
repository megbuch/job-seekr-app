const Job = require("../models/job");

module.exports = {
  index,
  new: newJob,
  create,
  show,
};

function index(req, res) {
  Job.find({}, function (err, jobs) {
    res.render("jobs/index", { jobs });
  });
}

function newJob(req, res) {
  res.render("jobs/new");
}

function create(req, res) {
  const job = new Job(req.body);
  job.save(function (err) {
    if (err) console.log(err);
    if (err) return res.redirect("/jobs/new");
    console.log(job);
    res.redirect("/jobs");
  });
}

function show(req, res) {
  Job.findOne({ _id: req.params.id }, function (err, job) {
    res.render("jobs/show", { job });
  });
}
