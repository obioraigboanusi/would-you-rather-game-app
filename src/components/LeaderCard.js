import React from "react";
import { Icon, Image, Label, Progress, Segment } from "semantic-ui-react";

function LeaderCard({ user, index }) {
  console.log(index);
  const { id, avatarURL, name, questions, answers } = user;
  const totalQuestions = questions.length;
  const totalAnswers = Object.keys(answers).length;
  const color = index === 0 ? "green" : index === 1 ? "blue" : "purple";
  return (
    <Segment
      fluid
      // label={{ as: "button", corner: "left", icon: "heart" }}
      className="leader-card"
    >
      <Label as="a" corner="left" icon="heart" className="label ">
        <i className={`ui heart icon ${color}`}></i>
      </Label>
      <div className="avatar">
        <Image src={avatarURL} />
      </div>
      <div className="details">
        <h2>{name}</h2>
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

export default LeaderCard;
