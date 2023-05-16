import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ActiveUsersComponent } from './active-users/active-users.component';
import { InactiveUsersComponent } from './inactive-users/inactive-users.component';
import { UserService } from 'src/app/services/user.service';
import { CountService } from 'src/app/services/count.service';
import { AllUsersComponent } from './all-users/all-users.component';

@NgModule({
  declarations: [
    AppComponent,
    ActiveUsersComponent,
    InactiveUsersComponent,
    AllUsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [UserService,CountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
