import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { Button, Card, Image } from "semantic-ui-react";

function Question({ question, user }) {
  const history = useHistory();
  const { authur, id, optionOne } = question;
  const { avatarURL } = user;
  return (
    <Card fluid>
      <Card.Content>
        <Card.Description as="span">{authur}</Card.Description>
      </Card.Content>
      <Card.Content>
        <Image floated="left" size="tiny" src={avatarURL} />
        <Card.Header as="h4">Would You Rather...</Card.Header>

        <Card.Meta as="span" className="mt-5 fw-b ">
          {optionOne.text.slice(0, 15)}...
        </Card.Meta>
        <Button
          fluid={true}
          inverted
          color="green"
          onClick={() =>
            history.push({
              pathname: `/questions/${id}`,
              state: {
                id,
              },
            })
          }
        >
          View Full
        </Button>
      </Card.Content>
    </Card>
  );
}

function mapStateToProps({ questions, users, authedUser }) {
  return {
    questions: Object.keys(questions),
    user: users[authedUser],
  };
}

export default connect(mapStateToProps)(Question);
