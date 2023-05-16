import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  @Input() users: string[]=[];
  constructor(private userService:UserService){}
 // @Output() userSetToInactive = new EventEmitter<number>();

  onSetToInactive(id: number) {

    this.userService.onSetToInactive(id);
  }
}
