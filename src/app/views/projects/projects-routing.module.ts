import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewComponent } from './new/new.component';
import { ExistingComponent } from './existing/existing.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Projects'
    },
    children: [
      {
        path: 'new',
        component: NewComponent,
        data: {
          title: 'Create New Project'
        }
      },
      {
        path: 'existing',
        component: ExistingComponent,
        data: {
          title: 'Existing Projects'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule {}
