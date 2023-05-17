import { UiReducer, isShowAC, isDisableAC } from "./ui-reducer";


test("toggle show action should toggle the show state", () => {
    const initialState = { show: false, disabled: false };
    const toggleShowAction = isShowAC();

    const nextState = UiReducer(initialState, toggleShowAction);

    expect(nextState.show).toBe(true);
});

test("set disable action should toggle the disabled state", () => {
    const initialState = { show: false, disabled: false };
    const setDisableAction = isDisableAC();

    const nextState = UiReducer(initialState, setDisableAction);

    expect(nextState.disabled).toBe(true);
});
