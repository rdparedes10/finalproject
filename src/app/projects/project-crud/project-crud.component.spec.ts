import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCRUDComponent } from './project-crud.component';

describe('ProjectCRUDComponent', () => {
  let component: ProjectCRUDComponent;
  let fixture: ComponentFixture<ProjectCRUDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectCRUDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectCRUDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
