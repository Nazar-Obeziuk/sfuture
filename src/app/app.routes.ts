import { Routes } from '@angular/router';

export const routes: Routes = [
    { 
        path: 'home', 
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)   
      },
      { 
        path: 'exercise', 
        loadChildren: () => import('./pages/exercise/exercise.module').then(m => m.ExerciseModule)   
      },
      { 
        path: 'plan', 
        loadChildren: () => import('./pages/plan/plan.module').then(m => m.PlanModule)   
      },
      { 
        path: 'profile', 
        loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfileModule)   
      },
      { 
        path: 'settings', 
        loadChildren: () => import('./pages/settings/settings.module').then(m => m.SettingsModule)   
      },
      { 
        path: 'admin',
        // canActivate:[authGuard],
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) 
      }
];
