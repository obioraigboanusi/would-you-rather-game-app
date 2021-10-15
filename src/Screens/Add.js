import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect, useHistory } from "react-router";
import { Button, Divider, Form, Segment } from "semantic-ui-react";
import { handleAddQuestion } from "../actions/shared";
import NavBar from "../components/NavBar";

function Add({ dispatch, authedUser }) {
  const [optionOne, setOptionOne] = useState("");
  const [optionTwo, setOptionTwo] = useState("");
  const [errorMessages] = useState({
    optionOne: "Please enter the first option",
    optionTwo: "Please enter the second option",
  });
  const [error, setError] = useState({
    optionOne: "",
    optionTwo: "",
  });
  const history = useHistory();

  if (authedUser === null || undefined || "") {
    return (
      <Redirect
        to={{
          pathname: "/login",
          state: {
            from: history.location.pathname,
          },
        }}
      />
    );
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    if (optionOne && optionTwo) {
      // add question to store and db
      dispatch(
        handleAddQuestion({
          optionTwoText: optionTwo,
          optionOneText: optionOne,
          author: authedUser,
        })
      );
      // clear input fields
      setOptionOne("");
      setOptionTwo("");

      // navigate to home page
      history.push("/");
    } else {
      // show error message
      handleError(optionOne, optionTwo);

      //clear error messages after three seconds
      setTimeout(() => {
        setError({
          optionOne: "",
          optionTwo: "",
        });
      }, 3000);
    }
  };
  const handleError = (optionOne, optionTwo) => {
    if (optionOne === "" && optionTwo === "") {
      setError({
        optionOne: errorMessages.optionOne,
        optionTwo: errorMessages.optionTwo,
      });
    }
    if (optionOne === "" && optionTwo !== "") {
      setError({
        optionOne: errorMessages.optionOne,
        optionTwo: "",
      });
    }
    if (optionOne !== "" && optionTwo === "") {
      setError({
        optionOne: "",
        optionTwo: errorMessages.optionTwo,
      });
    }
  };

  return (
    <>
      <NavBar />
      <div className="container">
        <Form onSubmit={handleSubmit}>
          <p>Complete the questions:</p>
          <h2>Would you rather....</h2>
          <Segment basic textAlign="center">
            <Form.Field>
              {!!error.optionOne && (
                <p style={{ color: "red", textAlign: "left" }}>
                  {error.optionOne}
                </p>
              )}
              <input
                placeholder="Enter option one"
                value={optionOne}
                onChange={(e) => setOptionOne(e.target.value)}
              />
            </Form.Field>
            <Divider horizontal>Or</Divider>
            <Form.Field>
              {!!error.optionTwo && (
                <p style={{ color: "red", textAlign: "left" }}>
                  {error.optionTwo}
                </p>
              )}
              <input
                placeholder="Enter option two"
                value={optionTwo}
                onChange={(e) => setOptionTwo(e.target.value)}
              />
            </Form.Field>
            <Button
              fluid={true}
              color="green"
              content="Create New Poll"
              icon="add"
              type="submit"
              labelPosition="left"
            />
          </Segment>
        </Form>
      </div>
    </>
  );
}
function mapStateToProps({ authedUser, dispatch }) {
  return {
    authedUser,
    dispatch,
  };
}

export default connect(mapStateToProps)(Add);
