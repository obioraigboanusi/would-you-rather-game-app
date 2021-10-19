import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect, useHistory } from "react-router";
import { Button, Card, Form, Image, Radio } from "semantic-ui-react";
import { handleAnswerQuestion } from "../actions/shared";
import PropTypes from "prop-types";

function UnAnsweredQuestionCard({ question, user, dispatch, qid }) {
  console.log(qid);
  const history = useHistory();
  const [chosenOption, setChosenOption] = useState("");

  if (question === null) {
    return <Redirect to="/not_found" />;
  }

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
          qid,
          authedUser: user.id,
          answer: chosenOption === optionOne ? "optionOne" : "optionTwo",
        })
      );
      history.push("/");
    } else {
      alert("Please select atleast one option");
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
              <Button fluid inverted color="green" onClick={handleSubmit}>
                Submit
              </Button>
            </Form.Field>
          </Form>
        </div>
      </Card.Content>
    </Card>
  );
}
function mapStateToProps({ authedUser, dispatch, users, questions }, { qid }) {
  return {
    user: users[authedUser] || null,
    dispatch,
    question: questions[qid] || null,
  };
}
UnAnsweredQuestionCard.propTypes = {
  questions: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  qid: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(UnAnsweredQuestionCard);
