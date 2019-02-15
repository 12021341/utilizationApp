import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Data } from '../data';
// import { chart } from 'highcharts';
import * as Highcharts from 'highcharts';
import { Chart } from 'angular-highcharts';
import { MatTableDataSource } from '@angular/material';

export interface EmployeeDetails {
  name: string;
  team: string;
  utilization: string;
  careerStep: string;
  project: string;
}

const ELEMENT_DATA: EmployeeDetails[] = [
  { name: 'Leo Flores', team: "AD-CMT", utilization: '50%', careerStep: 'I05', project: 'SPTEL' },
  { name: 'Chuck Norris', team: "AD", utilization: '10%', careerStep: 'I06', project: 'BIR' },
  { name: 'Juan Dela Cruz', team: "AD-CMT", utilization: '8%', careerStep: 'I07', project: 'LTO' },
  { name: 'Jimmy Neeson', team: "MS", utilization: '4%', careerStep: 'I08', project: 'DENR' },
  { name: 'Boron Guise', team: "Oracle", utilization: '89%', careerStep: 'I09', project: 'PCCW' },
  { name: 'Chao Xy', team: "AD-CMT", utilization: '90%', careerStep: 'I09', project: 'Globe' },
  { name: 'Therese Sy', team: "AD-CMT", utilization: '99%', careerStep: 'I05', project: 'Smart' },
  { name: 'Chao Fan', team: "AD", utilization: 'O%', careerStep: 'I05', project: 'Pldt' },
  { name: 'Sarah Gee', team: "AD-CMT", utilization: '0%', careerStep: 'I03', project: 'Singtel' },
  { name: 'Dellson Sons', team: "TS", utilization: '0%', careerStep: 'I01', project: 'Changi' },
];


@Component({
  selector: 'app-utilization',
  templateUrl: './utilization.component.html',
  styleUrls: ['./utilization.component.scss']
})
export class UtilizationComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'team', 'utilization', 'project', 'career step', 'actions'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  @ViewChild('chartTarget') chartTarget: ElementRef;
  options: any;


  Highcharts = Highcharts;
  chartOptions = {
    title: {
      text: "Team Utilization"
    },
    plotOptions: {
      series: {
        showInLegend: true
      },
      label: {
        connectorAllowed: false
      },
      pointStart: 2010
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle'
    },
    yAxis: {
      title: {
        text: 'Number of Employees'
      }
    },
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    series: [{
      name: 'CRM',
      data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
    }, {
      name: 'AD',
      data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
    }, {
      name: 'Oracle',
      data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
    }, {
      name: 'Management',
      data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
    }, {
      name: 'Other',
      data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
    }],
    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom'
          }
        }
      }]
    }
  };

  constructor() { }

  ngOnInit() {


  }



}