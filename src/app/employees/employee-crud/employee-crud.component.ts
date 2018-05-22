import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from '../employee';
import { AdministrateService } from '../../shared/administrate.service';
import { Project } from '../../projects/project';
import { copyStyles } from '@angular/animations/browser/src/util';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-employee-crud',
  templateUrl: './employee-crud.component.html',
  styleUrls: ['./employee-crud.component.css']
})
export class EmployeeCRUDComponent implements OnInit {
  @Input() employee;
  @Input() birthday;
  @Output() employeeCRUD:EventEmitter<Employee> = new EventEmitter<Employee>();
  employeeEmpty = "" ;
  isValid = true ;
  projects$;
  dateAux ;
  date;

  constructor(private administrateService:AdministrateService ){
  }
    
  ngOnInit() {
   const assingProject = (projects) => {
      this.projects$ = projects;
    };
    this.administrateService.consultar<Project[]>("api/projects").subscribe(assingProject); 
  }

  addEmployee(valueInput){
    let employeeAux = new Employee();
    for(var i=0 ; i < valueInput.length ; i++){
      if(valueInput[i] === this.employeeEmpty){
        this.isValid = false;
        console.log(valueInput[i]);
      }
    }
    if(this.isValid){
      employeeAux.id = valueInput[0];
      employeeAux.name = valueInput[1];
      employeeAux.company = valueInput[2];
      employeeAux.age = valueInput[3];
      employeeAux.birthday = valueInput[4];
      employeeAux.favoriteColor = valueInput[5];
      employeeAux.project = valueInput[6];
    }
    this.employeeCRUD.emit(employeeAux);
  }
}
