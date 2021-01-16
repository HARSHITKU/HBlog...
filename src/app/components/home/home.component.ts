import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/shared/models/Blog';
import { CommonService } from 'src/app/shared/services/common.service';

@Component({
  selector: 'blog-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  sendBlogDetailData: Blog;
  isOpen: boolean = false;
  isDataProcessed: boolean = false;

  constructor(private service: CommonService) { }

  ngOnInit(): void {
  }

  getBlogDetails(blog){
    this.isDataProcessed = true;
    setTimeout(() => {
      this.sendBlogDetailData = blog;
      if(this.sendBlogDetailData){
        this.isDataProcessed = false;
      }
    }, 2000);
    console.log('detail', this.sendBlogDetailData)
  }

  openDialogue(){
    this.service.sendRequest(true);
  }

}
