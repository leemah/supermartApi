const express = require("express")
const Router = express.Router();
const {
    getAllEntry,
    getSingleEntry,
    createEntry,
    updateSingleEntry,
    deleteSingleEntry,
} = require("./view");


//router.route('/').get(getAllEntry)
//router.route('/').post(createEntry)
//router.route('/:id').patch(updateSingleEntry)
//router.route('/:id').delete(deleteSingleEntry)

Router.route("/").get(getAllEntry).post(createEntry);
Router.route("/:id")
  .patch(updateSingleEntry)
  .delete(deleteSingleEntry)
  .get(getSingleEntry);

module.exports = Router;

//module.exports = router;
