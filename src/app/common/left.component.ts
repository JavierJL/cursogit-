import {Component} from '@angular/core';

@Component({
	selector: 'app-left',
	templateUrl : './left.component.html',
	styleUrls: ['./left.component.css']
})

export class LeftComponent
{

	title:string = "News";
	items:array<string> = ["Welcome","Hi","Good Bye"];
	constructor()
	{
	this.title = 'Noticias';
	}
	
}
