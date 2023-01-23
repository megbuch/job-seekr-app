const Job = require("../models/job");

module.exports = {
  create,
};

function create(req, res) {
  Job.findOne({ _id: req.params.id }, function (err, job) {
    job.events.push(req.body);
    job.save(function (err) {
      if (err) console.log(err);
      if (err) return res.redirect(`/jobs/${req.params.id}`);
      console.log(job);
      res.redirect(`/jobs/${job._id}`);
    });
  });
}
