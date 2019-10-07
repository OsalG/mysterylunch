import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-mysterylunch',
  templateUrl: './mysterylunch.component.html',
  styleUrls: ['./mysterylunch.component.scss']
})
export class MysterylunchComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {  }

  autoRenew = new FormControl(false);
  isShow = false;
  //true weil das die erste entscheidung ist, diese muss Sichtbar sein
  bild1 = true;
  bild2 = false;
  bild3 = false;
  bild4 = false;

  choose1;
  choose2;
  choose3;
  choose4;

  ngOnInit() {
  }
  participate(e){
    //muss noch definiert werden
  }
  specify(){
    this.isShow = !this.isShow;
  }
  activate34(choose){
    this.choose1 = choose;
    this.bild1 = !this.bild1;



    document.getElementById("choose1").innerHTML = " -"+choose;
    this.bild2 = !this.bild2;

  }
  activate56(choose){
    this.bild2 = !this.bild2;
    this.choose2 = choose;



    document.getElementById("choose2").innerHTML = " -"+choose;
    this.bild3 = !this.bild3;
  }
  activate78(choose){
    this.bild3 = !this.bild3;
    this.choose3 = choose;



    document.getElementById("choose3").innerHTML = " -"+choose;
    this.bild4 = !this.bild4;
  }
  activatelast(choose){
    this.bild4 = !this.bild4;
    this.choose4 = choose;



    document.getElementById("choose4").innerHTML = " -"+choose;
  }
}
