import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { Button, Card, Form, Image, Radio } from "semantic-ui-react";
import { handleAnswerQuestion } from "../actions/shared";

function UnAnsweredQuestionCard({ question, user, dispatch }) {
  const history = useHistory();
  const { id } = history.location.state;

  const [chosenOption, setChosenOption] = useState("");

  const { optionOne, optionTwo } = question;
  const { avatarURL, name } = user;

  const handleChange = (e) => {
    e.preventDefault();
    setChosenOption(e.target.textContent);
  };

  const handleSubmit = async () => {
    if (!!chosenOption) {
      await dispatch(
        handleAnswerQuestion({
          qid: id,
          authedUser: user.id,
          answer: chosenOption === optionOne ? "optionOne" : "optionTwo",
        })
      );
      history.push("/");
    }else{
      alert("Please select atleast one option")
    }
  };
  return (
    <Card basic fluid>
      <Card.Content>
        <Card.Description as="span">{name}</Card.Description>
      </Card.Content>
      <Card.Content className="card-inner">
        <div>
          <Image floated="left" size="tiny" src={avatarURL} />
        </div>
        <div>
          <Card.Header as="h4">Would You Rather...</Card.Header>

          <Form onSubmit={(e) => e.preventDefault()}>
            <Form.Field>
              Selected value: <b>{chosenOption}</b>
            </Form.Field>
            <Form.Field>
              <Radio
                label={optionOne.text}
                name="option"
                value={optionOne.text}
                checked={optionOne.text === chosenOption}
                onChange={handleChange}
              />
            </Form.Field>
            <Form.Field>
              <Radio
                label={optionTwo.text}
                name="option"
                value={optionTwo.text}
                checked={optionTwo.text === chosenOption}
                onChange={handleChange}
              />
            </Form.Field>
            <Form.Field>
              <Button
                fluid={true}
                inverted
                color="green"
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </Form.Field>
          </Form>
        </div>
      </Card.Content>
    </Card>
  );
}
function mapStateToProps({ questions, authedUser, dispatch, users }) {
  return {
    questions,
    user: users[authedUser],
    dispatch,
  };
}

export default connect(mapStateToProps)(UnAnsweredQuestionCard);
