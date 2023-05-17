import {counterReducer, decrementCounterAC, incrementCounterAC, resetCounterAC} from "./couter-reducer";

let startState: { counter: number };
let startState1: { counter: number };
let startState2: { counter: number };
let startState3: { counter: number };
let startState4: { counter: number };

beforeEach(() => {
    startState = { counter: 2 };
    startState1 = { counter: 6 };
    startState2 = { counter: 1 };
    startState3 = { counter: 8 };
    startState4 = { counter: 9 };
});

test('increment action creator should work correctly', () => {
    let action = incrementCounterAC();

    let endState = counterReducer(startState, action);
    let endState1 = counterReducer(startState1, action);
    let endState2 = counterReducer(startState2, action);
    let endState3 = counterReducer(startState3, action);
    let endState4 = counterReducer(startState4, action);

    expect(endState).toEqual({ counter: 3 });
    expect(endState1).toEqual({ counter: 7 });
    expect(endState2).toEqual({ counter: 2 });
    expect(endState3).toEqual({ counter: 9 });
    expect(endState4).toEqual({ counter: 10 });
});
test('decrement action creator should work correctly', () => {
    let action = decrementCounterAC();

    let endState = counterReducer(startState, action);
    let endState1 = counterReducer(startState1, action);
    let endState2 = counterReducer(startState2, action);
    let endState3 = counterReducer(startState3, action);
    let endState4 = counterReducer(startState4, action);

    expect(endState).toEqual({ counter: 1 });
    expect(endState1).toEqual({ counter: 5 });
    expect(endState2).toEqual({ counter: 0 });
    expect(endState3).toEqual({ counter: 7 });
    expect(endState4).toEqual({ counter: 8 });
});
test('reset action creator should work correctly', () => {
    let action = resetCounterAC(0);

    let endState = counterReducer(startState, action);
    let endState1 = counterReducer(startState1, action);
    let endState2 = counterReducer(startState2, action);
    let endState3 = counterReducer(startState3, action);
    let endState4 = counterReducer(startState4, action);

    expect(endState).toEqual({ counter: 0 });
    expect(endState1).toEqual({ counter: 0 });
    expect(endState2).toEqual({ counter: 0 });
    expect(endState3).toEqual({ counter: 0 });
    expect(endState4).toEqual({ counter: 0 });
});
