import { Employee } from "./employee";
import { LeaveType } from "./leaveType";

export class EmployeeLeave {
    id: number
    employee: Employee
    leaveType: LeaveType
    leaveReason: string
    leaveDateFrom: Date
    leaveDateTo: Date
    isApproved: number
    deniedReason: string
    status: number
    createdDateTime: Date
    reviewedByEmployee: Employee

    constructor(id) {
        this.id = id; 
         
     }
}