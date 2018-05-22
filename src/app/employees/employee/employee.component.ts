import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { EmployeeDataSource } from './employee-datasource';
import { AdministrateService } from '../../shared/administrate.service';
import { Employee } from '../employee';
import { FormControl } from '@angular/forms';
import { Project } from '../../projects/project';

@Component({
  selector: 'employees/employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: EmployeeDataSource = null;
  isOn;
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name','company','age','favoriteColor','project','EditOrDelete'];
  employees$;
  employeeCrud;
  flag = false;
  date:FormControl;
  projectEdit:Project;
  projectName;
  constructor(private administrateService:AdministrateService ){
    
  }
 
  ngOnInit() {
    this.isOn = false;
    try{
      const assingEmployee = (employee) => {
        this.employees$ = employee;
        this.dataSource = new EmployeeDataSource(this.paginator, this.sort,this.employees$);
      };
      this.administrateService.consultar<Employee[]>("api/employees").subscribe(assingEmployee); 
    }catch(e){
      console.log(e);
    }
  }
  editEmployee(employeeId){
    this.isOn = true;
    this.employeeCrud = employeeId;
    this.flag = false;
    this.date = new FormControl(new Date(employeeId.birthday));
    this.projectName = employeeId.project;
    console.log("Employee Componet" + this.date.value)
  }
  deleteEmployee(employeeId){
    console.log(employeeId);
    this.administrateService.deteleData("api/employees",employeeId.id); 
    this.ngOnInit();
  }
  addEmployee(){
    this.isOn = true;
    this.employeeCrud = { id: '', name: '',company:'', age:'', birthday:'', favoriteColor:'',project:''};
    this.flag = true;
    this.date = new FormControl(new Date(""));
    this.projectName = "";
  }
  addOrUpdateEmployee(employeeUp){
    console.log("add funcion"+employeeUp);
    try{
      this.administrateService.insertar("api/employees",employeeUp); 
      if(employeeUp.project !== this.projectName){
        const assingProject = (project) => {
          this.projectEdit = project;
         };
         this.administrateService.consultar<Project>("api/projects/?name=^"+ employeeUp.project).subscribe(assingProject);
         this.projectEdit[0].teamSize = (parseInt(this.projectEdit[0].teamSize) + 1) + "";
         this.administrateService.insertar("api/projects",this.projectEdit[0]); 
      }
      this.ngOnInit();
    }catch(e){
      console.log(e);
    }
  
  }
}
