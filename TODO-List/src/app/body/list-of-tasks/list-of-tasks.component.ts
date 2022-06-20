import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-of-tasks',
  templateUrl: './list-of-tasks.component.html',
  styleUrls: ['./list-of-tasks.component.css']
})
export class ListOfTasksComponent implements OnInit {

  list: string[] = ['Arrumar a cama', 'Fazer o café' ];

  constructor() { }

  ngOnInit(): void {
  }

}
