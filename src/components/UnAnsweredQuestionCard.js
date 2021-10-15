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
    await dispatch(
      handleAnswerQuestion({
        qid: id,
        authedUser: user.id,
        answer: chosenOption === optionOne ? "optionOne" : "optionTwo",
      })
    );
    history.push("/");
  };
  return (
    <Card inverted>
      <Card.Content>
        <Card.Description as="span">{name}</Card.Description>
      </Card.Content>
      <Card.Content>
        <Image floated="left" size="tiny" src={avatarURL} />
        <Card.Header as="h4">Would You Rather...</Card.Header>

        <Form>
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
        </Form>
        <Button fluid={true} inverted color="green" onClick={handleSubmit}>
          Submit
        </Button>
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
