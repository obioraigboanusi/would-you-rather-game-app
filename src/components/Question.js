import React from "react";
import { Button, Card, Divider, Feed, Grid, Image } from "semantic-ui-react";
import jenny from "../assets/jenny.jpg";
const poll = {
  authur: "obiora igboanusi",
  choices: {
    1: "be frontend developer",
    2: "petroleum engineering",
  },
};

function Question() {
  return (
    <Card inverted>
      <Card.Content>
        <Card.Header as="h3">{poll.authur}</Card.Header>
      </Card.Content>
      <Card.Content>
        <Image floated="left" size="tiny" src={jenny} />
        <Card.Header as="h4">Would You Rather</Card.Header>

        <Card.Meta as="span" className="mt-5 fw-b ">
          {poll.choices[1].slice(0, 15)}...
        </Card.Meta>
        <Button fluid={true} inverted color="green" floated="right">
          View Full
        </Button>
      </Card.Content>
    </Card>
  );
}

export default Question;
