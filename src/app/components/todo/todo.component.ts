import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from 'src/app/http-service.service';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  list?: string;
  data = '';
  singleList = '';
  allList: string[] = [];
  constructor(private httpService: HttpServiceService) {}

  ngOnInit(): void {}
  setData(data: any) {
    this.httpService.postList(data);
  }
  getAllList(): void {
    this.httpService
      .getAllList()
      .subscribe((data) => (this.allList = data.message));
  }
  getList(id: string) {
    this.httpService
      .getList(id)
      .subscribe((data) => (this.singleList = data.message));
  }
  deleteList(id: string) {
    this.httpService.deleteList(id);
  }
  deleteAllList() {
    this.httpService.deleteAllList();
  }

  public items = [];

  /* A two-way binding performed which
     pushes text on division */
  public newTask?: any;

  /* When input is empty, it will
     not create a new division */

  /* This function takes to input the
     task, that has to be deleted*/
}
