import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Redirect, useHistory } from "react-router";
import { Container } from "semantic-ui-react";
import { handleAnswerQuestion } from "../actions/questions";
import AnsweredQuestionCard from "../components/AnsweredQuestionCard";
import AppLayout from "../components/AppLayout";
import NavBar from "../components/NavBar";
import UnAnsweredQuestionCard from "../components/UnAnsweredQuestionCard";

function QuestionDetails({ questions, authedUser }) {
  const history = useHistory();
  const { id } = history.location.state;
  const [question] = useState(questions[id] || {});
  const { isAnswered } = question;

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

  return (
    <AppLayout>
      {!isAnswered ? (
        <UnAnsweredQuestionCard question={question} />
      ) : (
        <AnsweredQuestionCard question={question} />
      )}
    </AppLayout>
  );
}
function mapStateToProps({ questions }) {
  return {
    questions,
  };
}

export default connect(mapStateToProps)(QuestionDetails);
