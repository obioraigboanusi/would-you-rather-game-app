import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Card, Divider, Image, Label, Progress } from "semantic-ui-react";

function AnsweredQuestionCard({ question, user }) {
  const { optionOne, optionTwo, isAnswered } = question;
  const { avatarURL, name } = user;
  const choice = question.optionOne.votes.includes(user.id)
    ? "optionOne"
    : "optionTwo";
  const totalVotes = optionOne.votes.length + optionTwo.votes.length;
  return (
    <>
      <div className="card">
        <div>
          <h2>{name}</h2>
        </div>
        <div className="seg">
          <div>
            <img src={avatarURL} />
          </div>
          <div className="inner">
            <div
              className={
                optionOne.votes.length < totalVotes / 2 ? "" : "winning-card"
              }
            >
              {choice === "optionOne" && (
                <Label color="teal" floating>
                  Own choice
                </Label>
              )}
              <p>Would you rather {optionOne.text}</p>
              <Progress
                value={optionOne.votes.length}
                total={totalVotes}
                progress="percent"
                success
              >
                {optionOne.votes.length} out of {totalVotes} votes
              </Progress>
            </div>

            <div
              className={
                optionTwo.votes.length < totalVotes / 2 ? "" : "winning-card"
              }
            >
              {choice === "optionTwo" && (
                <Label color="teal" floating>
                  Own choice
                </Label>
              )}
              <p>Would you rather {optionTwo.text}</p>
              <Progress
                value={optionTwo.votes.length}
                total={totalVotes}
                progress="percent"
                success
              >
                {optionTwo.votes.length} out of {totalVotes} votes
              </Progress>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
function mapStateToProps({ authedUser, users }) {
  return {
    user: users[authedUser],
  };
}
export default connect(mapStateToProps)(AnsweredQuestionCard);