import {ActionType, reducer, StateType} from "./reducer";

test('test reducer', () => {

    const state: StateType = {collapsed: false};

    const action: ActionType = {type: 'TOGGLE-COLLAPSED'}

    const newState = reducer(state, action);

    expect(newState).not.toBe(state);
    expect(newState.collapsed).toBe(true);
})