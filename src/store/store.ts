import { BehaviorSubject } from "rxjs";

export class Store<TState> {
    private state: BehaviorSubject<TState>;

    constructor(initialState: TState) {
        this.state = new BehaviorSubject(initialState);
    }

    public setState(state: TState) {
        this.state.next(state);
    } 

    public getState() {
        return this.state.asObservable();
    }
}
