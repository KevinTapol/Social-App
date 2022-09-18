const express = require("express");
const router = express.Router();


const commentsController = require("../controllers/comments");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Comment Routes - simplified for now
router.post("/createComment/:id", commentsController.createComment);
// route for deleting commments colon syntax means variable
// order in which referencing in the router doesn't matter as long as both methods are being referenced since it is going straight to the controller; however the order in the view does matter
router.delete("/deleteComment/:postid/:commentid", commentsController.deleteComments)

module.exports = router;
