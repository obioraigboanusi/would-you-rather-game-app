import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Redirect, useHistory } from "react-router";
import AnsweredQuestionCard from "../components/AnsweredQuestionCard";
import AppLayout from "../components/AppLayout";
import UnAnsweredQuestionCard from "../components/UnAnsweredQuestionCard";
import PropTypes from "prop-types";

function QuestionDetails({ authedUser, match, users, questions }) {
  const history = useHistory();

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
  const qid = match.params.id;
  const {isAnswered} = questions[qid];

  return (
    <AppLayout>
      {!isAnswered ? (
        <UnAnsweredQuestionCard qid={qid} />
      ) : (
        <AnsweredQuestionCard qid={qid} />
      )}
    </AppLayout>
  );
}
function mapStateToProps({ questions, authedUser, users }) {
  return {
    questions,
    authedUser,
    users,
  };
}

QuestionDetails.propTypes = {
  authedUser: PropTypes.string.isRequired,
  questions: PropTypes.object.isRequired,
};
export default connect(mapStateToProps)(QuestionDetails);
