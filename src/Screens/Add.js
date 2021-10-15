import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect, useHistory } from "react-router";
import { Button, Divider, Form, Segment } from "semantic-ui-react";
import { handleAddQuestion } from "../actions/questions";
import NavBar from "../components/NavBar";

function Add({ dispatch, authedUser }) {
  const [optionOne, setOptionOne] = useState("");
  const [optionTwo, setOptionTwo] = useState("");

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
      dispatch(
        handleAddQuestion({
          optionTwoText: optionTwo,
          optionOneText: optionOne,
          author: authedUser,
        })
      );
    }
    console.log({
      optionTwoText: optionTwo,
      optionOneText: optionOne,
      author: authedUser,
    });
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
              <input
                placeholder="Enter option one"
                value={optionOne}
                onChange={(e) => setOptionOne(e.target.value)}
              />
            </Form.Field>
            <Divider horizontal>Or</Divider>
            <Form.Field>
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
