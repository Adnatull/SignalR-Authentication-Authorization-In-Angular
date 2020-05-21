import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PersonalComponent } from './personal/personal.component';

const routes: Routes = [
  {path: 'personal', component: PersonalComponent},
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatRoutes {}
