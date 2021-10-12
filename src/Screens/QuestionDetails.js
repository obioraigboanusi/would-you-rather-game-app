import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { Button, Card, Container, Form, Image, Radio } from "semantic-ui-react";
import { handleAnswerQuestion } from "../actions/questions";

function QuestionDetails({ questions, user, dispatch }) {
  const history = useHistory();
  const { id } = history.location.state;

  const [question, setQuestion] = useState(questions[id] || {});
  const [chosenOption, setChosenOption] = useState("");

  const { avatarURL, name } = user;

  const { optionOne, optionTwo } = question;

  const handleChange = (e) => {
    // console.log("clicked", e.target.textContent);
    e.preventDefault();
    setChosenOption(e.target.textContent);
  };
  const handleSubmit = () => {
    dispatch(
      handleAnswerQuestion({
        qid: id,
        authedUser: user.id,
        answer: chosenOption === optionOne ? "optionOne" : "optionTwo",
      })
    );
  };

  return (
    <Container>
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
    </Container>
  );
}
function mapStateToProps({ questions, authedUser, dispatch, users }) {
  return {
    questions,
    user: users[authedUser],
    dispatch,
  };
}

export default connect(mapStateToProps)(QuestionDetails);
