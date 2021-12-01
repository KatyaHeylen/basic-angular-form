import { Component } from '@angular/core';
import { Friend } from './friend';
import { AddFriendService } from "./add-friend.service";
import {createLogErrorHandler} from "@angular/compiler-cli/ngcc/src/execution/tasks/completion";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'be my friend';
  public friend = new Friend('', '', '','', '');
  constructor(private addFriendService: AddFriendService) {
  }

  onSubmit() {
    console.log(this.friend);
    this.addFriendService.addFriend(this.friend)
    .subscribe(data => console.log(data), error => console.log(error));
}
}
