import React from "react";
import { connect } from "react-redux";
import Footer from "../components/Footer";
import LeaderCard from "../components/LeaderCard";
import NavBar from "../components/NavBar";
import PropTypes from "prop-types";

function Leaderboard({ users }) {
  const compareFn = (a, b) => {
    const totalQuestionsA = a.questions.length;
    const totalAnswersA = Object.keys(a.answers).length;
    const totalQuestionsB = b.questions.length;
    const totalAnswersB = Object.keys(b.answers).length;
    return totalQuestionsB + totalAnswersB - (totalQuestionsA + totalAnswersA);
  };
  return (
    <>
      <NavBar />
      <main>
        <div className="container leaders">
          {Object.values(users)
            ?.sort(compareFn)
            .map((user, index) => (
              <LeaderCard key={user.id} user={user} index={index} />
            ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
function mapStateToProps({ users }) {
  return {
    users,
  };
}
LeaderCard.propTypes = {
  users: PropTypes.object.isRequired,
};
export default connect(mapStateToProps)(Leaderboard);
