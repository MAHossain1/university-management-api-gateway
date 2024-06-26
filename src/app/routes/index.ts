import express from 'express';
import { AcademicDepartmentRoutes } from '../modules/academicDepartment/academicDepartment.routes';
import { AcademicFacultyRoutes } from '../modules/academicFaculty/academicFaculty.routes';
import { AcademicSemesterRoutes } from '../modules/academicSemester/academicSemester.routes';
import { buildingRoutes } from '../modules/buildings/building.routes';
import { courseRoutes } from '../modules/course/course.routes';
import { offeredCourseRoutes } from '../modules/offeredCourse/offeredCourse.routes';
import { offeredCourseClassScheduleRoutes } from '../modules/offeredCourseClassSchedule/offeredCourseClassSchedule.routes';
import { offeredCourseSectionRoutes } from '../modules/offeredCourseSection/offeredCourseSection.routes';
import { roomRoutes } from '../modules/room/room.routes';
import { semesterRegistrationRoutes } from '../modules/semesterRegistration/semesterRegistration.routes';
import { studentEnrolledCourseRoutes } from '../modules/studentEnrolledCourse/studentEnrolledCourse.routes';
import { studentEnrolledCourseMarkRoutes } from '../modules/studentEnrolledCourseMark/studentEnrolledCourseMark.routes';
import { studentSemesterPaymentRoutes } from '../modules/studentSemesterPayment/studentSemesterPayment.routes';
import { UserRoutes } from '../modules/user/user.routes';
import { authRoutes } from '../modules/auth/auth.routes';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/academic-semesters',
    route: AcademicSemesterRoutes
  },
  {
    path: '/academic-departments',
    route: AcademicDepartmentRoutes
  },
  {
    path: '/academic-faculties',
    route: AcademicFacultyRoutes
  },
  {
    path: '/buildings',
    route: buildingRoutes
  },
  {
    path: '/rooms',
    route: roomRoutes
  },
  {
    path: '/courses',
    route: courseRoutes
  },
  {
    path: '/offered-courses',
    route: offeredCourseRoutes
  },
  {
    path: '/offered-course-class-schedules',
    route: offeredCourseClassScheduleRoutes
  },
  {
    path: '/offered-course-sections',
    route: offeredCourseSectionRoutes
  },
  {
    path: '/semester-registrations',
    route: semesterRegistrationRoutes
  },
  {
    path: '/student-enrolled-courses',
    route: studentEnrolledCourseRoutes
  },
  {
    path: '/student-enrolled-course-marks',
    route: studentEnrolledCourseMarkRoutes
  },
  {
    path: '/student-semester-payments',
    route: studentSemesterPaymentRoutes
  },
  {
    path: '/users',
    route: UserRoutes
  },
  {
    path: '/auth',
    route: authRoutes
  }
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
