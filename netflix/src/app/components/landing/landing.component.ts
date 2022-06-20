import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { QA } from 'src/app/interfaces/qa';
import { QAsService } from '../../services/qas.service'
import { RouterSwitchService } from '../../services/router-switch.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  qas: QA[] = [];

  constructor(private quasservice: QAsService, private routerSwitch: RouterSwitchService) {}

  ngOnInit(): void {
    this.qas = this.quasservice.getQAs();
  }

  signIn(){
    this.routerSwitch.switch('/sign-in');
  }
}
