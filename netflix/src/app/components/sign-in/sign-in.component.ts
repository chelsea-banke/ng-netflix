import { Component, OnInit } from '@angular/core';
import { RouterSwitchService } from 'src/app/services/router-switch.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor( private routeSwitch: RouterSwitchService ) { }

  ngOnInit(): void {
  }

  loginUser(){
    this.routeSwitch.switch('/user')
  }
}
