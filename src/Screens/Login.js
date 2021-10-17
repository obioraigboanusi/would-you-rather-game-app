import React, { useState } from "react";
import { batch, connect } from "react-redux";
import { useHistory } from "react-router";
import { Container, Dropdown, Image } from "semantic-ui-react";
import { Button } from "semantic-ui-react";
import { setAuthedUser } from "../actions/authedUsers";
import { setAnsweredQuestions } from "../actions/questions";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

function Login({ users, dispatch }) {
  const history = useHistory();
  const [user, setUser] = useState("");
  const [error, setError] = useState("");
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
    if (!!user) {
      const knownUser = Object.values(users).filter((a) => a.name === user);
      batch(() => {
        dispatch(setAuthedUser(knownUser[0].id));
        dispatch(setAnsweredQuestions(knownUser[0].id));
      });
      if (!!history.location.state) {
        if (history.location.state.from === null || undefined || "") {
          history.push("/");
        } else {
          history.push(`${history.location.state.from}`);
        }
      } else {
        history.push("/");
      }
    } else {
      setError("You must select a user to proceed!");
      setTimeout(() => {
        setError("");
      }, 3000);
    }
  };

  return (
    <>
      <NavBar />
      <main>
        <div className="container-card">
          <div>
            <h3 style={{ textAlign: "center" }}>
              Welcome to "Would You Rather...?" game!
            </h3>
            <p style={{ textAlign: "center", alignSelf: "flex-start" }}>
              Please login to continue
            </p>
          </div>
          <div className="login ">
            <Image size="tiny" src="/logo192.png" alt="react logo" />

            <form onSubmit={handleSubmit}>
              <h2>Sign In</h2>
              {!!error && <p style={{ color: "red" }}>{error}</p>}
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
        </div>
      </main>
      <Footer />
    </>
  );
}
function mapStateToProps({ users, authedUser }) {
  return {
    users,
    authedUser,
  };
}
export default connect(mapStateToProps)(Login);
