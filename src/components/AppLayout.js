import React from "react";
import { connect } from "react-redux";
import { Redirect, useHistory } from "react-router";
import { Dimmer, Loader, Segment } from "semantic-ui-react";
import NavBar from "./NavBar";

function AppLayout({ loading, authedUser, children }) {
  const history = useHistory();
  return (
    <div>
      <NavBar />
      <Dimmer {...{ active: loading ? true : false }}>
        <Loader size="massive">Loading...</Loader>
      </Dimmer>{" "}
      {!!authedUser ? (
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
    </div>
  );
}
function mapStateToProps({ loading, authedUser }) {
  return {
    loading,
    authedUser,
  };
}
export default connect(mapStateToProps)(AppLayout);