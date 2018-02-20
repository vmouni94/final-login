import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import {
  FullLayoutComponent,
  SimpleLayoutComponent
} from './containers';
import {AuthGuard} from './auth-guard.service';
import {ProjectsModule} from "./views/projects/projects.module";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'pages/login',
    pathMatch: 'full',
  },
  {
    path: '',
    component: FullLayoutComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'projects',
        // canActivate: [AuthGuard],
        loadChildren: './views/projects/projects.module#ProjectsModule'
      },
      {
        path: 'buttons',
        // canActivate: [AuthGuard],
        loadChildren: './views/buttons/buttons.module#ButtonsModule'
      },
      {
        path: 'charts',
        // canActivate: [AuthGuard],
        loadChildren: './views/chartjs/chartjs.module#ChartJSModule'
      },
      {
        path: 'dashboard',
        // canActivate: [AuthGuard],
        loadChildren: './views/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'icons',
        // canActivate: [AuthGuard],
        loadChildren: './views/icons/icons.module#IconsModule'
      },
      {
        path: 'notifications',
        // canActivate: [AuthGuard],
        loadChildren: './views/notifications/notifications.module#NotificationsModule'
      },
      {
        path: 'theme',
        // canActivate: [AuthGuard],
        loadChildren: './views/theme/theme.module#ThemeModule'
      },
      {
        path: 'widgets',
        // canActivate: [AuthGuard],
        loadChildren: './views/widgets/widgets.module#WidgetsModule'
      }
    ]
  },
  {
    path: 'pages',
    component: SimpleLayoutComponent,
    data: {
      title: 'Pages'
    },
    children: [
      {
        path: '',
        loadChildren: './views/pages/pages.module#PagesModule',
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
