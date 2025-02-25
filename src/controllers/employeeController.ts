import { Request, Response } from "express";
import { EmployeeModel } from '../db/employee';

class EmployeeController {
    getAllEmployee = async (request: Request, response: Response): Promise<any> => {
        try {
            const employees = await EmployeeModel.find();
            return response.status(200).json({ data: employees })
        } catch (error) {
            return response.sendStatus(400);
        }
    }
    getEmployee = async (request: Request, response: Response): Promise<any> => {
        try {
            const { id } = request.params;
            const employee = await EmployeeModel.findById(id);
            return response.status(200).json({ data: employee })
        } catch (error) {
            return response.sendStatus(400);
        }
    }
    createEmployee = async (request: Request, response: Response): Promise<any> => {
        try {
            const { name, email, mobile, dob, doj } = request.body;
            const employee = new EmployeeModel({
                name,
                email,
                mobile,
                dob,
                doj
            });
            await employee.save();
            return response.status(200).json({ message: "Employee Created", data: employee })
        } catch (error) {
            console.log('error: ', error);
            return response.sendStatus(400);
        }
    }
    updateEmployee = async (request: Request, response: Response): Promise<any> => {
        try {
            const { id } = request.params;
            const { name, email, mobile, dob, doj } = request.body;
            const employee = await EmployeeModel.findById(id);
            if (employee) {
                employee.name = name;
                employee.email = email;
                employee.mobile = mobile;
                employee.dob = dob;
                employee.doj = doj;
                await employee.save();
                return response.status(200).json({ message: "Employee Updated", data: employee })
            }
            return response.sendStatus(400);
        } catch (error) {
            console.log('error: ', error);
            return response.sendStatus(400);
        }
    }
    deleteEmployee = async (request: Request, response: Response): Promise<any> => {
        try {
            const { id } = request.params;
            await EmployeeModel.findByIdAndDelete({ _id: id });
            return response.status(200).json({ message: "Employee Deleted" })
        } catch (error) {
            return response.sendStatus(400);
        }
    }
}
export default EmployeeController;