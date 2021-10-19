import React from "react";
import { Image, Label, Segment } from "semantic-ui-react";
import PropTypes from "prop-types";

function LeaderCard({ user, index }) {
  const { avatarURL, name, questions, answers } = user;
  const totalQuestions = questions.length;
  const totalAnswers = Object.keys(answers).length;
  const color = index === 0 ? "green" : index === 1 ? "blue" : "purple";
  return (
    <Segment fluid="true" className="leader-card">
      <Label as="a" corner="left" className="label ">
        <i className={`ui heart icon ${color}`}></i>
      </Label>
      <div className="avatar">
        <Image src={avatarURL} />
      </div>
      <div className="details">
        <h3>{name}</h3>
        <div>
          <span>Answered Questions</span>
          <span>{totalAnswers || 0}</span>
        </div>
        <div>
          <span>Created Questions</span>
          <span>{totalQuestions || 0}</span>
        </div>{" "}
      </div>
      <div>
        <Segment className="score">
          <div>Score:</div>
          <div>
            <span>{totalQuestions + totalAnswers || 0}</span>
          </div>
        </Segment>
      </div>
    </Segment>
  );
}
LeaderCard.propTypes = {
  user: PropTypes.object,
  index: PropTypes.number.isRequired,
};
export default LeaderCard;
