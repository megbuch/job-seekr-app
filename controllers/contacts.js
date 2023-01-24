const Job = require("../models/job");

module.exports = {
  create,
  // delete: deleteContact,
};

function create(req, res) {
  Job.findOne({ _id: req.params.id }, function (err, job) {
    job.contacts.push(req.body);
    job.save(function (err) {
      if (err) console.log(err);
      if (err) return res.redirect(`/jobs/${req.params.id}/edit`);
      res.redirect(`/jobs/${job._id}/edit`);
    });
  });
}

// async function deleteContact(req, res, next) {
//   try {
//     const job = await Job.findOne({ "contacts._id": req.params.id });
//     if (!job) return res.redirect("/jobs");
//     job.contacts.remove(req.params.id);
//     await job.save();
//     res.redirect(`/jobs/${job._id}`);
//   } catch (err) {
//     return next(err);
//   }
// }
