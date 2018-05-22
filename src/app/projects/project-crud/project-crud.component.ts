import { Component, OnInit, Input, Output,EventEmitter} from '@angular/core';
import { Project } from '../project';

@Component({
  selector: 'app-project-crud',
  templateUrl: './project-crud.component.html',
  styleUrls: ['./project-crud.component.css']
})
export class ProjectCRUDComponent implements OnInit {
  @Input() project;
  @Input() birthday;
  @Output() projectCRUD:EventEmitter<Project> = new EventEmitter<Project>();
  projectEmpty = "" ;
  isValid = true ;
  constructor() { }

  ngOnInit() {
  }
  addProject(valueInput){
    let projectAux = new Project();
    this.isValid = true;
    for(var i=0 ; i < valueInput.length ; i++){
      if(valueInput[i] === this.projectEmpty){
        this.isValid = false;
        console.log(valueInput[i]);
      }
    }
    if(this.isValid){
      projectAux.id = valueInput[0];
      projectAux.name = valueInput[1];
      projectAux.clientName = valueInput[2];
      projectAux.teamSize = valueInput[3];
      this.projectCRUD.emit(projectAux);
    }
  }

}
