import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterSwitchService } from './services/router-switch.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'netflix';

  constructor (private router: Router, private routerSwitchService: RouterSwitchService){
    this.routerSwitchService.route$.subscribe((route) => {
      this.router.navigate([route]);
    })
  }
}
