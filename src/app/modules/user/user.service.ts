import { Request } from 'express';
import { FileUploadHelper } from '../../../helpers/FileUploadHelper';
import { ICloudinaryResponse, IUploadFile } from '../../../interfaces/file';
import { AuthService } from '../../../shared/axios';
import { IGenericResponse } from '../../../interfaces/common';

const createStudent = async (req: Request) => {
  const file = req.file as IUploadFile;
  const uploadedImage: ICloudinaryResponse = await FileUploadHelper.uploadToCloudinary(file);

  if (uploadedImage) {
    req.body.profileImage = uploadedImage.secure_url;
  }

  const { academicDepartment, academicFaculty, academicSemester } = req.body.student;

  //   console.log(academicSemester, 'Academic semester');
  //   console.log('object academic department', academicDepartment);
  //   console.log('academic Faculty', academicFaculty);

  const academicDepartmentResponse = await AuthService.get(
    `/academic-department?syncId=${academicDepartment}`
  );

  //   console.log('no response?', academicDepartmentResponse);

  if (academicDepartmentResponse.data && Array.isArray(academicDepartmentResponse.data)) {
    req.body.student.academicDepartment = academicDepartmentResponse.data[0].id;
  }

  const academicFacultyResponse = await AuthService.get(
    `/academic-faculty?syncId=${academicFaculty}`
  );

  //   console.log('No no faculty', academicFacultyResponse);

  if (academicFacultyResponse.data && Array.isArray(academicFacultyResponse.data)) {
    req.body.student.academicFaculty = academicFacultyResponse.data[0].id;
  }

  const academicSemesterResponse = await AuthService.get(
    `/academic-semester?syncId=${academicSemester}`
  );
  //   console.log('academic semester', academicSemesterResponse);

  if (academicSemesterResponse.data && Array.isArray(academicSemesterResponse.data)) {
    req.body.student.academicSemester = academicSemesterResponse.data[0].id;
  }
  console.log(academicSemesterResponse);

  //   console.log(req.body);

  const response: IGenericResponse = await AuthService.post('/users/create-student', req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return response;
};

export const UserService = {
  createStudent
};
