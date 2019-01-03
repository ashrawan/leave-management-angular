import { Employee } from './employee';
import { LeaveType } from './leaveType';

export class EmployeeLeave {
    leaveId: number;
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

    constructor(leaveId) {
        this.leaveId = leaveId;
    }
}
