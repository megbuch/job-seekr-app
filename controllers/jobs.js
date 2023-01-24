const Job = require("../models/job");

module.exports = {
  index,
  new: newJob,
  create,
  show,
  edit,
  update,
  delete: deleteJob,
};

function index(req, res) {
  Job.find({}, function (err, jobs) {
    res.render("jobs/index", { jobs, name: req.user.firstName });
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

function edit(req, res) {
  Job.findOne({ _id: req.params.id }, function (err, job) {
    res.render("jobs/edit", { job });
  });
}

function update(req, res) {
  Job.findOneAndUpdate(
    { _id: req.params.id }, //conditions, update, options, callback fn
    req.body,
    { new: true },
    function (err, job) {
      if (!err) {
        res.redirect(`/jobs/${req.params.id}`);
      } else {
        console.log("Error while updating record : " + err);
      }
    }
  );
}

function deleteJob(req, res) {
  Job.deleteOne({ _id: req.params.id }, function (err, job) {
    if (!err) {
      res.redirect("/jobs");
    } else {
      console.log("Error : " + err);
    }
  });
}
