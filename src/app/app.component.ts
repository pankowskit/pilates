import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.scss',
    './sass/styles.scss'
  ]
})
export class AppComponent {
  MenuData:Array<any>=[
    {path:"",name:"Home"},
    {path:"trainers",name:"Trainers"},
    {path:"about",name:"About"},
    {path:"classes",name:"Classes"},
    {path:"prices",name:"Prices"},
    {path:"contact",name:"Contact"}
  ];
  title = 'babysitting';
}
