import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isUserLoggedIn: boolean = false;

  constructor(private router: Router, private service: CommonService) { }

  ngOnInit(): void {
  }

  navigateToDashboard(){
    // this.isUserLoggedIn = true;
    // this.service.activateHeaderFooter(this.isUserLoggedIn);
    this.router.navigate(['/home']);
  }

}
