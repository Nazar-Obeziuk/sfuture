import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminExerciseComponent } from './admin-exercise/admin-exercise.component';
import { AdminCategoryComponent } from './admin-category/admin-category.component';


const routes: Routes = [
    { path: '', component: AdminComponent, children: [
        { path: 'exercise', component: AdminExerciseComponent },
        { path: 'category', component: AdminCategoryComponent },
    ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }