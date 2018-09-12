import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

	@Input() postTitle: string;
	@Input() postContent: string;
	@Input() postLoveIts: number;
	@Input() postCreated: date;


  constructor() { }

  ngOnInit() {
  }

  addLike(){
  	this.postLoveIts++;
  }

  delLike(){
  	this.postLoveIts--;
  }

}
