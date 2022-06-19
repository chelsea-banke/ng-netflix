import { Component, OnInit } from '@angular/core';
import { QA } from 'src/app/interfaces/qa';
import { QAsService } from '../../services/qas.service'

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  qas: QA[] = [];

  constructor(private quasservice: QAsService) { }

  ngOnInit(): void {
    this.qas = this.quasservice.getQAs();
  }
}
