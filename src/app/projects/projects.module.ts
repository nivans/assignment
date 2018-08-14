import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsListComponent } from './components/projects-list/projects-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ProjectsListComponent],
  declarations: [ProjectsListComponent]
})
export class ProjectsModule { }
