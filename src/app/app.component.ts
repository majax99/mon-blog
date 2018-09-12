import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

	posts = [
	{
		title: 'Mon premier post',
		content: 'Ceci est le premier post'
		loveIts: 0,
		created_at: new Date()
	},
	{
		title: 'Mon second post',
		content: 'Ceci est le second post'
		loveIts: 0,
		created_at: new Date()
	},
	{
		title: 'Mon troisième post',
		content: 'Ceci est le troisième post'
		loveIts: 0,
		created_at: new Date()
	}
	]



}
