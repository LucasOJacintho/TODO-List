import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  titleBody: string = "TODO - List";
  constructor() { }

  ngOnInit(): void {
  }

}
