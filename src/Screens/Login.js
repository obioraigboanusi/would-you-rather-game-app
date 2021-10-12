import React, { useState } from "react";
import { batch, connect } from "react-redux";
import { useHistory } from "react-router";
import { Container, Dropdown, Item } from "semantic-ui-react";
import { Button } from "semantic-ui-react";
import { setAuthedUser } from "../actions/authedUsers";
import { setAnsweredQuestions } from "../actions/questions";
import NavBar from "../components/NavBar";

function Login({ users, dispatch }) {
  const history = useHistory();
  const [user, setUser] = useState("");
  const userOptions = Object.values(users).map((item) => {
    const { id, avatarURL, name } = item;
    return {
      key: id,
      text: name,
      value: id,
      image: avatarURL,
    };
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const knownUser = Object.values(users).filter((a) => a.name === user);
    batch(() => {
      dispatch(setAuthedUser(knownUser[0].id));
      dispatch(setAnsweredQuestions(knownUser[0].id));
    });
    history.push("/");
  };
  return (
    <>
      <NavBar />
      <Container>
        <div className="login">
          <h1>Login to continue</h1>
          <form onSubmit={handleSubmit}>
            <Dropdown
              placeholder="Select user"
              fluid
              selection
              closeOnBlur
              onChange={(e) => setUser(e.target.textContent)}
              options={userOptions}
            />
            <Button inverted color="green" fluid className="btn">
              Submit
            </Button>
          </form>
        </div>
      </Container>
    </>
  );
}
function mapStateToProps({ users }) {
  return {
    users,
  };
}
export default connect(mapStateToProps)(Login);
