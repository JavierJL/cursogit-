import {Component} from '@angular/core';

@Component({
	selector: 'app-right',
	templateUrl : './right.component.html',
	styleUrls: ['./right.component.css']
})

export class RightComponent
{
	names:string[];
	constructor(){
	this.names=['Carlos','Francisco','Itzel','Ilse'];
	}	
}