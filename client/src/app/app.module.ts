import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './shared-components/navbar/navbar.component';
import { AuthModule } from './modules/auth/auth.module';
import { AppRoutes } from './app.routing';
import { FormsModule } from '@angular/forms';
import { AuthService } from './@core/services/auth.service';
import { ChatModule } from './modules/chat/chat.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AuthModule,
    AppRoutes,
    FormsModule,
    HttpClientModule,
    ChatModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
