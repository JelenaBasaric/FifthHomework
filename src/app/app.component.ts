import { Component } from '@angular/core';
import { CountService } from 'src/app/services/count.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //providers:[CountService]
})
export class AppComponent {
  activeUsers =this.userService.activeUsers;
  inactiveUsers = this.userService.inactiveUsers;

 constructor(private userService:UserService){}

  onSetToInactive(id: number) {
    this.userService.onSetToActive(id);
    // this.inactiveUsers.push(this.activeUsers[id]);
    // this.activeUsers.splice(id, 1);
  }

  onSetToActive(id: number) {
    this.userService.onSetToActive(id);
    // this.activeUsers.push(this.inactiveUsers[id]);
    // this.inactiveUsers.splice(id, 1);
  }
}
