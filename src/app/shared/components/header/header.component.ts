import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'blog-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  @Output() isLoggedOut = new EventEmitter();

  openAddBlogPopup: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logout(){
    this.router.navigate[('./login')];
  }

  newBlog(){
    this.openAddBlogPopup = !this.openAddBlogPopup;
  }

}
