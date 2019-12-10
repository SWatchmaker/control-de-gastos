import { login, logout } from "../../actions/auth";

test("Genera acción de login", () => {
  const uid = "abc123";
  const action = login(uid);
  expect(action).toEqual({
    type: "LOGIN",
    uid
  });
});

test("Genera acción de logout", () => {
  const action = logout();
  expect(action).toEqual({
    type: "LOGOUT"
  });
});
