import { Employee } from './employee';
import { LeaveType } from './leaveType';

export class EmployeeLeave {
    leaveID: number;
    employeeDTO: Employee;
    leaveTypeDTO: LeaveType;
    leaveReason: string;
    dateFrom: Date;
    dateTo: Date;
    approved: number;
    deniedReason: string;
    status: number;
    createdAt: Date;
    reviewedBy: Employee;

    constructor(leaveID) {
        this.leaveID = leaveID;
    }
}
