import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('src/app/modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'chat',
    loadChildren: () =>
      import('src/app/modules/chat/chat.module').then(m => m.ChatModule)
  }
  ,
  { path: '**', redirectTo: 'auth/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutes {}
