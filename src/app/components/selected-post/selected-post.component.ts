import {Component, Input, OnInit} from '@angular/core';
import {IPost} from "../../interfaces";
import {ActivatedRoute, Router} from "@angular/router";
import {PostsService} from "../../services";

@Component({
  selector: 'app-selected-post',
  templateUrl: './selected-post.component.html',
  styleUrls: ['./selected-post.component.css']
})
export class SelectedPostComponent implements OnInit {
  @Input()
  post: IPost;

  constructor(private activatedRoute:ActivatedRoute, private postsService:PostsService, private router:Router) {
    this.activatedRoute.params.subscribe(({id}) => {
      this.post = this.router.getCurrentNavigation()?.extras.state?.['post'];
      if (!this.post) {
        this.postsService.getById(id).subscribe(value => this.post = value);
      }
    })
  }

  ngOnInit(): void {
  }

}
