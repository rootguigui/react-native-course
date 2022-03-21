const router = require('express').Router();
const { CourseController } = require('../controllers/course.controller');
const { authRoutes } = require('../middlewares/auth.middleware');

const { upload } = require('../middlewares/upload.middleware');

router.get('/:id', [authRoutes], CourseController.getById);
router.post('/create', [authRoutes, upload.single('image')], CourseController.create);
router.put('/update', [authRoutes], CourseController.update);
router.delete('/delete', [authRoutes], CourseController.delete);
router.get('/', [authRoutes], CourseController.courses);

module.exports.courseRouter = router;