import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { NewComponent } from './new/new.component';
import {ProjectsRoutingModule} from "./projects-routing.module";
import { ExistingComponent } from './existing/existing.component';

@NgModule({
  imports: [
    CommonModule,
    ProjectsRoutingModule
  ],
  declarations: [NewComponent, ExistingComponent]
})
export class ProjectsModule { }
