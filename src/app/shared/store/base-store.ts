import { BehaviorSubject, distinctUntilChanged, map, Observable } from "rxjs";
import { State } from "./state";

export class BaseStore {
    private state$: BehaviorSubject<State>;

    protected get state(): State {
        return this.state$.getValue();
    }

    constructor(initialState: State) {
        this.state$ = new BehaviorSubject<State>(initialState);
    }

    protected select<K>(mapFn: (state: State) => K): Observable<K> {
        return this.state$.asObservable().pipe(
            map((state: State) => mapFn(state)),
            distinctUntilChanged()
        );
    }

    protected setState(newState: Partial<State>) {
        this.state$.next({
            ...this.state,
            ...newState
        });
    }
}