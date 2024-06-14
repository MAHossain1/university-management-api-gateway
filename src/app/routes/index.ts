import express from 'express';
import { AcademicSemesterRoutes } from '../modules/academicSemester/academicSemester.routes';
import { AcademicDepartmentRoutes } from '../modules/academicDepartment/academicDepartment.routes';
import { AcademicFacultyRoutes } from '../modules/academicFaculty/academicFaculty.routes';
import { buildingRoutes } from '../modules/buildings/building.routes';
import { roomRoutes } from '../modules/room/room.routes';
import { courseRoutes } from '../modules/course/course.routes';
import { offeredCourseRoutes } from '../modules/offeredCourse/offeredCourse.routes';
import { offeredCourseClassScheduleRoutes } from '../modules/offeredCourseClassSchedule/offeredCourseClassSchedule.routes';

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
  }
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
