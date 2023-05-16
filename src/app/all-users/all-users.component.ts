import { Component,Input } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent {
  @Input() activeUsers=this.userService.activeUsers;
  @Input() inactiveUsers=this.userService.inactiveUsers;
    constructor(private userService:UserService){}
   // @Output() userSetToInactive = new EventEmitter<number>();

    onSetToInactive(id: number) {
  
      this.userService.onSetToInactive(id);
    }
    onSetToActive(id: number) {
      // this.userSetToActive.emit(id);
      this.userService.onSetToActive(id);
     }

}
