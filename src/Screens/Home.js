import React, { useState } from "react";
import { connect } from "react-redux";
import { Button, ButtonContent, Label, Menu } from "semantic-ui-react";
import Question from "../components/Question";
import PropTypes from "prop-types";
import AppLayout from "../components/AppLayout";

function Home({ questions }) {
  const [activeTab, setActiveTab] = useState("Unanswered");
  const answered = questions?.filter((item) => item.isAnswered);
  const unanswered = questions?.filter((item) => !item.isAnswered);

  return (
    <AppLayout>
      <div className="home">
        <Button.Group attached="top" className="home-tabs">
          <Button
            basic
            onClick={() => setActiveTab("Unanswered")}
            className={activeTab === "Unanswered" ? "active" : ""}
          >
            Unanswered Questions<Label as="span">{unanswered.length}</Label>
          </Button>
          <Button
            basic
            onClick={() => setActiveTab("answered")}
            className={activeTab === "answered" ? "active" : ""}
          >
            Answered Questions<Label as="span">{answered.length}</Label>
          </Button>
        </Button.Group>
        <div className="questions">
          {activeTab === "Unanswered" &&
            unanswered.map((item, index) => (
              <Question key={index} question={item} />
            ))}
          {activeTab === "answered" &&
            answered.map((item, index) => (
              <Question key={index} question={item} />
            ))}
        </div>
      </div>
    </AppLayout>
  );
}
function mapStateToProps({ questions }) {
  return {
    questions: Object.values(questions),
  };
}
Home.propTypes = {
  questions: PropTypes.object.isRequired,
};
export default connect(mapStateToProps)(Home);
