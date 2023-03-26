import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkoutsComponent } from './workouts/workouts.component';

const routes: Routes = [
  {
    component: WorkoutsComponent,
    path: 'workouts'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
