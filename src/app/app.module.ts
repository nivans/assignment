import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsListComponent } from './projects/components/projects-list/projects-list.component';
import { ProjectsModule } from './projects/projects.module';

// import 'rxjs/add/observable/from';

const routes: Routes = [
  {
    path: 'projects',
    component: ProjectsListComponent,
  },
  {
    path: '**',
    redirectTo: 'projects'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ProjectsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
