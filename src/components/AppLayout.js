import React from "react";
import { connect } from "react-redux";
import { Redirect, useHistory } from "react-router";
import { Dimmer, Loader } from "semantic-ui-react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import PropTypes from "prop-types";

function AppLayout({ loading, authedUser, children }) {
  const history = useHistory();
  return (
    <div>
      <NavBar />
      <Dimmer
        {...{ active: loading ? true : false }}
      >
        <Loader size="massive">Loading...</Loader>
      </Dimmer>
      {!!loading ? null : !!authedUser ? (
        <main>
          <div className="container">{children}</div>{" "}
        </main>
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: {
              from: history.location.pathname,
            },
          }}
        />
      )}
      }
      <Footer />
    </div>
  );
}
function mapStateToProps({ loading, authedUser }) {
  return {
    loading,
    authedUser,
  };
}
AppLayout.propTypes = {
  loading: PropTypes.string.isRequired,
  authedUser: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
export default connect(mapStateToProps)(AppLayout);
