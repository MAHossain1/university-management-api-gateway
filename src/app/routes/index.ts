import express from 'express';
import { AcademicSemesterRoutes } from '../modules/academicSemester/academicSemester.routes';
import { AcademicDepartmentRoutes } from '../modules/academicDepartment/academicDepartment.routes';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/academic-semesters',
    route: AcademicSemesterRoutes
  },
  {
    path: '/academic-departments',
    route: AcademicDepartmentRoutes
  }
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
