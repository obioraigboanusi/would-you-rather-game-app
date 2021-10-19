import React from "react";
import { connect } from "react-redux";
import { Redirect, useHistory } from "react-router";
import AnsweredQuestionCard from "../components/AnsweredQuestionCard";
import AppLayout from "../components/AppLayout";
import UnAnsweredQuestionCard from "../components/UnAnsweredQuestionCard";
import PropTypes from "prop-types";

function QuestionDetails({ authedUser, match, questions }) {
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
  if (!!questions[qid] === false) {
    return <Redirect to="/not_found" />;
  }
  const { isAnswered } = questions[qid];

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
function mapStateToProps({ questions, authedUser }) {
  return {
    questions,
    authedUser,
  };
}

QuestionDetails.propTypes = {
  authedUser: PropTypes.string,
  questions: PropTypes.object,
  match: PropTypes.object,
};
export default connect(mapStateToProps)(QuestionDetails);
