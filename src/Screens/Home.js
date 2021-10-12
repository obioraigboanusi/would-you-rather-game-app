import React, { useState } from "react";
import { connect } from "react-redux";
import { Container, Label, Menu } from "semantic-ui-react";
import NavBar from "../components/NavBar";
import Question from "../components/Question";
import { Tab } from "semantic-ui-react";

function Home({ questions }) {
  const answered = questions?.filter((item) => item.isAnswered);
  const unanswered = questions?.filter((item) => !item.isAnswered);

  const panes = [
    {
      menuItem: {
        key: "Unanswered",
        // icon: "users",
        content: (
          <Menu.Item key="messages">
            Unanswered Questions<Label>{unanswered.length}</Label>
          </Menu.Item>
        ),
      },
      pane: {
        key: "unanswered",
        content: (
          <div className="questions">
            {unanswered.map((item, index) => (
              <Question key={index} question={item} />
            ))}
          </div>
        ),
      },
    },
    {
      menuItem: {
        key: "answered",
        // icon: "users",
        content: (
          <Menu.Item key="messages">
            Answered Questions<Label>{answered.length}</Label>
          </Menu.Item>
        ),
      },
      pane: {
        key: "answered",
        content: (
          <div className="questions">
            {answered.map((item, index) => (
              <Question key={index} question={item} />
            ))}
          </div>
        ),
      },
    },
  ];

  return (
    <div>
      <NavBar />
      <Container>
        <Tab panes={panes} renderActiveOnly={false} />
      </Container>
    </div>
  );
}
function mapStateToProps({ questions }) {
  // console.log(questions);
  return {
    questions: Object.values(questions),
  };
}
export default connect(mapStateToProps)(Home);
