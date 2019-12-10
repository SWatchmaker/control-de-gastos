import authReducer from "../../reducers/auth";

test("Setea uid en login", () => {
  const action = {
    type: "LOGIN",
    uid: "abc123"
  };

  const state = authReducer({}, action);

  expect(state.uid).toBe(action.uid);
});

test("Borra uid en logout", () => {
  const action = {
    type: "LOGOUT"
  };
  const state = authReducer({ uid: "123abc" }, action);

  expect(state).toEqual({});
});
