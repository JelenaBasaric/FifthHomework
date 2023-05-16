export class CountService {
    activeToInactive = 0;
    InactiveToActive = 0;

    countActToInac() {
        this.activeToInactive++;
        console.log('Active to inactive: ' + this.activeToInactive);
    }
    countInactToAct() {
        this.InactiveToActive++;
        console.log('Inactive to active: ' + this.InactiveToActive);
    }
}