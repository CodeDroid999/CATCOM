import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ContentfulService } from '../../../services/contentful.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor(private ContentfulService : ContentfulService) { }

  blogPosts$ : Observable<any> | undefined


  ngOnInit(): void {
    this.blogPosts$= this.ContentfulService.getAllEntries();
  }

}
