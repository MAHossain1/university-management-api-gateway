import express from 'express';
import { AcademicSemesterController } from './academicSemester.controller';

const router = express.Router();

router.post('/', AcademicSemesterController.insertIntoDB);
router.get('/', AcademicSemesterController.getAllFromDB);

export const AcademicSemesterRoutes = router;
