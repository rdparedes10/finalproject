import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { ProjectDataSource } from './project-datasource';
import { AdministrateService } from '../../shared/administrate.service';
import { Project } from '../project';

@Component({
  selector: 'projects/project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: ProjectDataSource;
  isOn = false;
  flag = true;
  projectCrud;
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name','teamSize','clientName','EditOrDelete'];

  projects$;
  constructor(private administrateService:AdministrateService ){
  }
 
  ngOnInit() {
    this.isOn = false;
    const assingProject = (projects) => {
      this.projects$ = projects;
      this.dataSource = new ProjectDataSource(this.paginator, this.sort,this.projects$);
    };
    this.administrateService.consultar<Project[]>("api/projects").subscribe(assingProject); 
  }

  editProject(projectId){
    this.isOn = true;
    this.projectCrud = projectId;
    this.flag = false;
  }
  deleteProject(projectId){
    console.log(projectId);
    this.administrateService.deteleData("api/projects",projectId.id); 
    this.ngOnInit();
  }
  addProject(){
    this.isOn = true;
    this.projectCrud = { id: '', name: '',teamSize:'', clientName:''};;
    this.flag = true;
  }
  addOrUpdateProject(projectUp){
    console.log("add funcion"+projectUp);
    try{
      this.administrateService.insertar("api/projects",projectUp); 
      this.ngOnInit();
    }catch(e){
      console.log(e);
    }
  
  }
}
