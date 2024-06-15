import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { studentSemesterPaymentService } from './studentSemesterPayment.service';

const getMyPayment = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await studentSemesterPaymentService.getMyPayment(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const studentSemesterPaymentController = {
  getMyPayment
};
