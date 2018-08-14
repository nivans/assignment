import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsListComponent } from './components/projects-list/projects-list.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ProjectsListComponent],
  declarations: [ProjectsListComponent, ProjectCardComponent]
})
export class ProjectsModule { }
