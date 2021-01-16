import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { CommonService } from './shared/services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  isUserLoggedIn: boolean = false;
  isLoginScreen: boolean = false;

  constructor(private service: CommonService, private router: Router){
    router.events.forEach((event) => {
      if(event instanceof NavigationEnd){
        if(event['url'] == '/login'){
          this.isLoginScreen = false;
        }else if(event['url'] == '/home'){
          this.isLoginScreen = true;
        }
      }
    });
  }

  ngOnInit(){
  }
}
