const Job = require("../models/job");

module.exports = {
  create,
  delete: deleteEvent,
};

function create(req, res) {
  Job.findById(req.params.id, function (err, job) {
    job.events.push(req.body);
    job.save(function (err) {
      if (err) console.log(err);
      if (err) return res.redirect(`/jobs/${req.params.id}/edit`);
      res.redirect(`/jobs/${job._id}/edit`);
    });
  });
}

async function deleteEvent(req, res, next) {
  try {
    const job = await Job.findOne({ "events._id": req.params.id });
    if (!job) return res.redirect("/jobs");
    job.events.remove(req.params.id);
    await job.save();
    res.redirect(`/jobs/${job._id}/edit`);
  } catch (err) {
    return next(err);
  }
}
