import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Blog } from 'src/app/shared/models/Blog';
import { CommonService } from "../../shared/services/common.service";

@Component({
  selector: 'blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  blogs: Blog[] = [];
  isClicked: boolean = false;

  @Output() sendBlogDetails = new EventEmitter<Blog>();

  constructor(private service: CommonService) { }

  ngOnInit(): void {
    this.blogs = this.service.getBlogsList();
  }

  openBlogDetails(blogData: Blog){
   this.sendBlogDetails.emit(blogData);
   this.isClicked = true;
  }

}
