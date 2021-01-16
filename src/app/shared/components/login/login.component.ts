import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isRegisterEnabled: boolean = false;

  constructor(private router: Router, private service: CommonService) { }

  ngOnInit(): void {
  }

  navigateToDashboard(){
    this.router.navigate(['/home']);
  }

  navigateToRegister(){
    this.router.navigate(['/register']);
  }

  openRegisterForm(){
    this.isRegisterEnabled = true;
  }

}
