import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Sidebar,
  Visibility,
} from "semantic-ui-react";

function NavBar() {
  const [fixed, setfixed] = useState(true);
  return (
    <Menu
      // fixed={fixed ? "top" : null}
      inverted
      pointing={!fixed}
      secondary={!fixed}
      size="large"
    >
      <Container>
        {/* <Menu.Item as="a" active>
          Home
        </Menu.Item>
        <Menu.Item as="a" active>Work</Menu.Item>
        <Menu.Item as="a">Company</Menu.Item>
        <Menu.Item as="a">Careers</Menu.Item>
        <Menu.Item position="right">
          <Button as="a" 
          inverted={!fixed}
          >
            Log in
          </Button>
          <Button
            as="a"
            inverted={!fixed}
            primary={fixed}
            style={{ marginLeft: "0.5em" }}
          >
            Sign Up
          </Button>
        </Menu.Item> */}
        <div className="nav">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/add">Add</Link>
          <Link to="/">LeaderShip board</Link>
        </div>
      </Container>
    </Menu>
  );
}

export default NavBar;
