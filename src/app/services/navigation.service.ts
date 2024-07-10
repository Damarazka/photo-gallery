import { Injectable } from '@angular/core';
import {Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(private route : Router) { }

  goToThirdPage(){
    this.route.navigate(['/tabs/tab3'])
  }
}
