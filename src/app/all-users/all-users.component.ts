import { Component,Input } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { bindCallback } from 'rxjs';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent {
 // @Input() users=this.userService.activeUsers;
  @Input() Inactiveusers=this.userService.inactiveUsers;
  @Input() activeUser=this.userService.activeUser;
  @Input() title!:string;
  @Input() text!: string;
   @Input() users: string[]=[]; 
   @Input() callbackFunc!: string; 
    constructor(private userService:UserService){}
   // @Output() userSetToInactive = new EventEmitter<number>();
   
   onSetToInactive(id: number)
     {  
      this.userService.onSetToInactive(id);
    }
    onSetToActive(id: number) {
      // this.userSetToActive.emit(id);
      this.userService.onSetToActive(id);
     }
     callbackFuncRunIt=function(){
      //callbackFunk;
     };
  
  var runIt(function (){
  => callbackFuncRunIt();)
 }
    }
