import { createReducer, on } from "@ngrx/store";
import { decrement, increment, reset } from "./counter.actions";

export interface CounterState {
    count: number,
    counterRange: number,
}

export const initialState : CounterState = {
    count: 0,
    counterRange: 1,
}

export const counterReducer = createReducer(
    initialState,
    on(increment, state => ({...state, count: state.count + state.counterRange})),
    on(decrement, state => ({...state, count: state.count - state.counterRange})),
    on(reset, state => ({...state, count : 0, counterRange: 1})),
);