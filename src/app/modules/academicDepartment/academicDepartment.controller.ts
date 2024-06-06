import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { AcademicDepartmentService } from './academicDepartment.service';

const insertIntoDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicDepartmentService.insertIntoDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const AcademicDepartmentController = {
  insertIntoDB
};
