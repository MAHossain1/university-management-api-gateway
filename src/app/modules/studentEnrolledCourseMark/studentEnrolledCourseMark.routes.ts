import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { StudentEnrolledCourseMarkController } from './studentEnrolledCourseMark.controller';

const router = express.Router();

router.get('/', StudentEnrolledCourseMarkController.getAllFromDB);
router.get('/my-marks', StudentEnrolledCourseMarkController.getStudentMarks);

router.post(
  '/update-marks',
  auth(ENUM_USER_ROLE.FACULTY),
  StudentEnrolledCourseMarkController.updateMarks
);

router.post(
  '/update-course-final-marks',
  auth(ENUM_USER_ROLE.FACULTY),
  StudentEnrolledCourseMarkController.updateCourseFinalMarks
);

export const studentEnrolledCourseMarkRoutes = router;
