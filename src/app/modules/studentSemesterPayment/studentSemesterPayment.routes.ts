import express from 'express';
import { studentSemesterPaymentController } from './studentSemesterPayment.controller';

const router = express.Router();

router.get('/my-semester-payments', studentSemesterPaymentController.getMyPayment);

export const studentSemesterPaymentRoutes = router;
