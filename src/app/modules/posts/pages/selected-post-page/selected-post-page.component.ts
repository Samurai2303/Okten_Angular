import { Component, OnInit } from '@angular/core';
import {IPost} from "../../interfaces";
import {ActivatedRoute, Router} from "@angular/router";
import {PostsService} from "../../services";

@Component({
  selector: 'app-selected-post-page',
  templateUrl: './selected-post-page.component.html',
  styleUrls: ['./selected-post-page.component.css']
})
export class SelectedPostPageComponent implements OnInit {

  post: IPost;

  constructor(private activatedRoute:ActivatedRoute, private router:Router,private postsService:PostsService) {
    this.activatedRoute.params.subscribe(({id})=>{
      this.post = this.router.getCurrentNavigation()?.extras.state?.['post'];
      if (!this.post) {
        this.postsService.getById(id).subscribe(value => this.post = value);
      }
    })
  }

  ngOnInit(): void {
  }

}
