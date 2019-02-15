import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormBuilder, NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { PersonForCreation } from '../interface/registration.model';
import { RepositoryService } from '../shared/repository.service';
import { Observable } from 'rxjs';
import { EmployeeService } from '../services/employee.service';

export interface employeeDetails {
  value: string;
  viewValue: string;
}
export interface broadBandDetails {
  value: string;
  viewValue: string;
}
export interface departmentDetails {
  value: string;
  viewValue: string;
}
export interface skillDetails {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  empDetails: employeeDetails[] = [
    { value: 'I03', viewValue: 'I03' },
    { value: 'I04', viewValue: 'I04' },
    { value: 'I05', viewValue: 'I05' },
    { value: 'I06', viewValue: 'I06' },
    { value: 'I07', viewValue: 'I07' },
    { value: 'I08', viewValue: 'I08' },
    { value: 'I09', viewValue: 'I09' },
    { value: 'I010', viewValue: 'I010' },
  ];

  bbDetails: broadBandDetails[] = [
    { value: 'Bb1', viewValue: 'Broadband-1' },
    { value: 'Bb2', viewValue: 'Broadband-2' },
    { value: 'Bb3', viewValue: 'Broadband-3' },
    { value: 'Bb4', viewValue: 'Broadband-4' },
  ];

  dptDetails: departmentDetails[] = [
    { value: 'AD', viewValue: 'AD' },
    { value: 'AD-CMT', viewValue: 'AD-CMT' },
    { value: 'Oracle', viewValue: 'Oracle' },
    { value: 'SAP', viewValue: 'SAP' },
    { value: 'TS', viewValue: 'TS' },
    { value: 'MS', viewValue: 'MS' },
  ];

  skillDetails: skillDetails[] = [
    { value: 'Java', viewValue: 'Java' },
    { value: 'Angular', viewValue: 'Angular' },
    { value: 'Oracle', viewValue: 'Oracle' },
    { value: 'Nodejs', viewValue: 'Nodejs' },
    { value: 'Vuejs', viewValue: 'Vuejs' },
    { value: 'MySQL', viewValue: 'MySQL' },
    { value: 'Flutter', viewValue: 'Flutter' },
    { value: 'Reactjs', viewValue: 'Reactjs' },
    { value: 'PHP', viewValue: 'PHP' }
  ];


  public regForm: FormGroup;

  constructor(private location: Location, private employeeService: EmployeeService) {
    this.initRegForm();
  }

  ngOnInit() { }

  initRegForm() {
    this.regForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      eid: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      address: new FormControl('', Validators.required),
      position: new FormControl('', Validators.required),
      broadband: new FormControl('', Validators.required),
      project: new FormControl('', Validators.required),
      careerStep: new FormControl('', Validators.required),
      capability: new FormControl('', Validators.required),
      skill: new FormControl('', Validators.required)
      // username: new FormControl('', Validators.required),
      // password: new FormControl('', Validators.required)
    });
  }


  public hasError = (controlName: string, errorName: string) => {
    return this.regForm.controls[controlName].hasError(errorName);
  }

  public onCancel = () => {
    this.location.back();
  }

  reset() {
    Object.keys(this.regForm.controls).forEach(name => {
      this.regForm.controls[name].setValue('');
      this.regForm.controls[name].setErrors(null)
    });

  }
  showForm: boolean = true;
  createEmployee() {
    console.log(this.regForm.value);
    if (this.regForm.valid) {

      this.employeeService.addUser(this.regForm.value).subscribe(
        res => {
          console.log(res);
        },
        reject => { console.error(reject) }
      );

    } setTimeout(() => {
      this.showForm = false;
      this.reset();
      alert("Success!")
    });
  }

}
