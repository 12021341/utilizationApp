import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-view-employee',
    templateUrl: './view-employee.component.html',
    styleUrls: ['./view-employee.component.scss']
})
export class ViewEmployeeComponent {
    private employeeForm: FormGroup;

    private toUpdate = false;
    constructor() {
        this.dataEmployeeForm(true);
    }

    ngOnInit() { this.dataEmployeeForm(this.toUpdate)}
    
    onClick() {
        this.toUpdate = true;
        this,this.dataEmployeeForm(this.toUpdate);
    }

    dataEmployeeForm(toUpdate) {
        this.employeeForm = new FormGroup({
            eid: new FormControl({ value: '', disabled : false}),
            firstName: new FormControl({ value: '', disabled : true}),
            lastName: new FormControl({ value: '', disabled : true}),
            address: new FormControl({ value: '', disabled : true}),
            email: new FormControl({ value: '', disabled : true}),
            mobileNumber: new FormControl({ value: '', disabled : true}),
            project: new FormControl({ value: '', disabled : true}),
            broadband: new FormControl({ value: '', disabled : true}),
            careerStep: new FormControl({ value: '', disabled : true}),
            position: new FormControl({ value: '', disabled : true}),
            capability: new FormControl({ value: '', disabled : true}),
            dateHired: new FormControl({ value: '', disabled : true}),
            status: new FormControl({ value: '', disabled : true}),
            tExperience: new FormControl({ value: '', disabled : true}),
            skills: new FormControl({ value: '', disabled : true}),
            sLeaves: new FormControl({ value: '', disabled : true}),
            vLeaves: new FormControl({ value: '', disabled : true}),
        })
    }
}