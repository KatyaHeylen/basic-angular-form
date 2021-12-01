import { Component, OnInit } from '@angular/core';
import { Friend } from './friend';
import { AddFriendService } from "./add-friend.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'be my friend';
  public friend = new Friend('', '', '','', '');
  allFriends: any;
  constructor(private addFriendService: AddFriendService) {
  }

  onSubmit() {
    console.log(this.friend);
    this.addFriendService.addFriend(this.friend)
    .subscribe(data => console.log(data), error => console.log(error));
    this.getAllFriends('http://localhost:9069/allFriends').then();
}

ngOnInit(): any {
  this.getAllFriends('http://localhost:9069/allFriends').then();
  console.log(this.getAllFriends);
}

  public async getAllFriends(url: string): Promise<any> {
    return await fetch(url, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => (this.allFriends = data));
  }
}
