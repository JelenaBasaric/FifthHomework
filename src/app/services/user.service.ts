import { Injectable } from "@angular/core";
import { CountService } from "./count.service";

@Injectable()
export class UserService{
    constructor(private countService:CountService){}
    activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];
  activeUser=false;

  onSetToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.activeUser=false;
    this.countService.countActToInac();
  }

  onSetToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    //this.activeUser=true;
    this.countService.countInactToAct();
  }
}