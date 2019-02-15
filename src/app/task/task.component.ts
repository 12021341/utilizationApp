import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatSort, MatTableDataSource, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TaskCreation } from '../interface/task.model';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormBuilder } from '@angular/forms';


export interface Priority {
  value: string,
  viewValue: string
}

export interface skillDetails {
  value: string,
  viewValue: string
}

var startDate = new Date('December 17, 2018 03:24:00');
var endDate = new Date('November 3, 2019 03:24:00');

const TASK_DATA: TaskCreation[] = [
  { projectName: 'SPTEL', priority: 'High', startDate: startDate, completeDate: endDate, resourceCount: '2', skillRqd: 'java', projDesc: 'asd', status: 'active' },
  { projectName: 'Changi', priority: 'Low', startDate: startDate, completeDate: endDate, resourceCount: '4', skillRqd: 'java', projDesc: 'asd', status: 'active' },
  { projectName: 'Passport', priority: 'Medium', startDate: startDate, completeDate: endDate, resourceCount: '6', skillRqd: 'java', projDesc: 'asd', status: 'active' },
  // { projectName: 'Project Earth', priority: 'LOW', startDate: startDate, completeDate: endDate, status: 'inactive' },
  // { projectName: 'LTO', priority: 'MEDIUM', start: startDate, completeDate: endDate, status: 'active' }

];

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  displayedColumns: string[] = ['project name', 'priority', 'start date', 'end date', 'status'];

  dataSource = new MatTableDataSource(TASK_DATA);


  @ViewChild(MatSort) sort: MatSort;

  constructor(private fb: FormBuilder, public dialog: MatDialog) { }
  ngOnInit() { }

  openLoginDialog(): void {
    const dialogRef = this.dialog.open(CreateTaskComponent, {
      height: '490px',
      width: '490px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


}
import { Location } from '@angular/common';
@Component({
  selector: 'app-create-task',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task.component.scss']
})

export class CreateTaskComponent implements OnInit {

  public taskForm: FormGroup;

  priorities: Priority[] = [
    { value: 'high', viewValue: 'High' },
    { value: 'medium', viewValue: 'Medium' },
    { value: 'low', viewValue: 'Low' }
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


  constructor(public dialogRef: MatDialogRef<CreateTaskComponent>, private location: Location, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.taskForm = new FormGroup({
      taskName: new FormControl(''),
      startDate: new FormControl(''),
      endDate: new FormControl(''),
      status: new FormControl(''),
      priority: new FormControl(''),
      resourceCount: new FormControl(''),
      skill: new FormControl('')

    });
    this.initProjectForm();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  public createForm = (regFormValue) => {
    if (this.taskForm.valid) {
      this.executeRegCreation(regFormValue);
    }
  }
  private executeRegCreation = (regFormValue) => {
    console.log("success");
  }
  public onCancel = () => {
    this.location.back();
  }

  // public createForm = (regFormValue) => {
  //   if (this.regForm.valid) {
  //     this.executeRegCreation(regFormValue);
  //   }
  // }

  public projForm: FormGroup;

  initProjectForm() {
    this.projForm = new FormGroup({
      projectName: new FormControl(''),
      startDate: new FormControl(''),
      endDate: new FormControl(''),
      priority: new FormControl(''),
      resourceCount: new FormControl(''),
      status: new FormControl(''),
      skillRqd: new FormControl(''),
      projDesc: new FormControl('')
    })
  }
  addTask() {

  }

}
