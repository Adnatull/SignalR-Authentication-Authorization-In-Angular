import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat.component';
import { FormsModule } from '@angular/forms';
import { ChatRoutes } from './chat.routing';
import { PersonalComponent } from './personal/personal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ChatRoutes
  ],
  declarations: [
    ChatComponent,
    PersonalComponent
  ]
})
export class ChatModule { }
