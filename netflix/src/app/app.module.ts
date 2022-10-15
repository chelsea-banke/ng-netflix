import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { UserComponent } from './components/user/user.component';
import { HomeComponent } from './components/home/home.component';
import { ShowsComponent } from './components/shows/shows.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    SignInComponent,
    UserComponent,
    HomeComponent,
    ShowsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'welcome', component: LandingComponent},
      { path: 'sign-in', component: SignInComponent  },
      { path: 'user', component: UserComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full'},
    ])
  ],
  providers: [{
    provide: 'Window', useValue: window
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
