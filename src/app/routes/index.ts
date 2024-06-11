import express from 'express';
import { AcademicSemesterRoutes } from '../modules/academicSemester/academicSemester.routes';
import { AcademicDepartmentRoutes } from '../modules/academicDepartment/academicDepartment.routes';
import { AcademicFacultyRoutes } from '../modules/academicFaculty/academicFaculty.routes';
import { buildingRoutes } from '../modules/buildings/building.routes';

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
  }
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
