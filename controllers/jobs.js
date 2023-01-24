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

async function index(req, res) {
  try {
    const jobs = await Job.find({ user: req.user.id }).lean();
    res.render("jobs/index", { jobs, name: req.user.firstName });
  } catch (err) {
    console.error(err);
    res.render("error");
  }
}

function newJob(req, res) {
  res.render("jobs/new");
}

async function create(req, res) {
  try {
    req.body.user = req.user.id;
    await Job.create(req.body);
    res.redirect("/jobs");
  } catch (err) {
    console.error(err);
    res.render("error");
  }
}

async function show(req, res) {
  try {
    let job = await Job.findById(req.params.id).populate("user");

    if (!job) {
      return res.render("error");
    }

    res.render("jobs/show", { job });
  } catch (err) {
    console.error(err);
    res.render("error");
  }
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
