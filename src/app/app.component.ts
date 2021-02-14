import { Component, OnInit } from '@angular/core';

import { navs } from './route.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AngularRichEditor';
  isSidebarOpen = true;
  navs = navs;

  ngOnInit(): void {
    console.log(this.isSidebarOpen);

  }

  sidebarToggle(toogle: boolean): void {
    this.isSidebarOpen = toogle;
    console.log(this.isSidebarOpen);
  }
}
