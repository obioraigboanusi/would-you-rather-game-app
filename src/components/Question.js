import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { Button, Card, Image } from "semantic-ui-react";

function Question({ question, users }) {
  const history = useHistory();
  const { author, id, optionOne } = question;
  return (
    <Card basic fluid>
      <Card.Content>
        <Card.Description as="span">{users[author]?.name}</Card.Description>
      </Card.Content>
      <Card.Content className="card-inner">
        <div>
          <Image floated="left" size="tiny" src={users[author]?.avatarURL} />
        </div>
        <div>
          <Card.Header as="h4">Would You Rather...</Card.Header>

          <span className="mt-5 fw-b ">{optionOne.text.slice(0, 15)}...</span>
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
            className="mt-10"
          >
            View Full
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
}

function mapStateToProps({ questions, users, authedUser }) {
  return {
    questions: Object.keys(questions),
    users,
  };
}

export default connect(mapStateToProps)(Question);
