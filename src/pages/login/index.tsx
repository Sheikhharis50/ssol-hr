import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { formDataToDict } from "../../utils";

type Props = {};

const LoginPage: React.FC<Props> = () => {
  let navigate = useNavigate();
  let location = useLocation();
  let auth = useAuth();

  let from = location.state?.from?.pathname || "/";

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    auth.signin(formDataToDict(formData), () => {
      navigate(from, { replace: true });
    });
  }

  return (
    <div>
      <p>You must log in to view the page at {from}</p>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input name="name" type="text" />
        </div>
        <br />
        <div>
          <label>Email:</label>
          <input name="username" type="text" />
        </div>
        <br />
        <div>
          <label>Role:</label>
          <select name="role">
            <option value="admin">Admin</option>
            <option value="hr">HR</option>
          </select>
        </div>
        <br />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
