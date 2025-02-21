import express from "express";
import EmployeeController from "../controllers/employeeController";

const router = express.Router();
const data = new EmployeeController();

router.get("/employee", data.getAllEmployee);
router.get("/employee/:id", data.getEmployee);
router.post("/employee", data.createEmployee);
router.patch("/employee/:id", data.updateEmployee);
router.delete("/employee/:id", data.deleteEmployee);

export default router;