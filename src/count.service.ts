export class CountService {
    activeToInactive = 0;
    InactiveToActive = 0;

    countActToInac() {
        this.activeToInactive++;
        console.log('Active to inactive: ' + this.activeToInactive)
    }
    countInactToAct() {
        this.activeToInactive++;
        console.log('AInactive to active: ' + this.InactiveToActive)
    }
}