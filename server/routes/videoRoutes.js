const express = require('express');

const { addYtVideo, getAllVideos, deleteVideo, publishVideo } = require('../controllers/videoController');
const router = express.Router();

router.get('/videos',getAllVideos)
// POST for add youtube video
router.post('/addvideo', addYtVideo);

router.delete('/video/delete/:id', deleteVideo);

router.put("/video/publish/:id", publishVideo);

module.exports = router;