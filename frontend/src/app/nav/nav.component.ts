import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }

  sidebartogglerbutton(e){
    e.preventDefault();
    document.getElementById("wrapper").classList.toggle('toggled');

  }
}
