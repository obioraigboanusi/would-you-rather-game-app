import React, { useState } from "react";
import { connect } from "react-redux";
import { Label, Menu } from "semantic-ui-react";
import Question from "../components/Question";
import { Tab } from "semantic-ui-react";
import { useHistory } from "react-router";
import AppLayout from "../components/AppLayout";

function Home({ questions }) {

  const answered = questions?.filter((item) => item.isAnswered);
  const unanswered = questions?.filter((item) => !item.isAnswered);

  const panes = [
    {
      menuItem: {
        key: "Unanswered",
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
    <AppLayout>
      <Tab panes={panes} renderActiveOnly={false} className="pane" />
    </AppLayout>
  );
}
function mapStateToProps({ questions, authedUser }) {
  return {
    questions: Object.values(questions),
    authedUser,
  };
}
export default connect(mapStateToProps)(Home);
