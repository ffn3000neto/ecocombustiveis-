import { FuelPump } from "react-bootstrap-icons";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBarC() {
  return (
    <Navbar
      expand="lg"
      style={{ backgroundColor: "#d8d8d8", flexDirection: "column" }}
    >
      <FuelPump size={84}/>
      <Container>
        <Navbar.Brand href="/">
          <h1>EcoCombustíveis</h1>
        </Navbar.Brand>
        <div className="justify-content-end">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/cadastro">Inserir Produto</Nav.Link>
          </Nav>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavBarC;
