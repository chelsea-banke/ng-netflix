import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouterSwitchService {

  private route = new BehaviorSubject<any>('');
  route$ = this.route.asObservable();

  constructor() { }

  switch(route: any){
    this.route.next(route);
  }
}
