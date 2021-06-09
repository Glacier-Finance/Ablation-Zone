import { Navbar, Nav } from "react-bootstrap";
import { NavHashLink as Link } from "react-router-hash-link";

export default function NavbarDefault() {
  const scrollWithOffset = (el: any, offset: number) => {
    window.scroll({
      top: el.offsetTop - offset,
      left: 0,
      behavior: "smooth"
    });
  };

  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="sm"
        className="navbar"
        bg="navbar"
        variant="dark"
      >
        <Navbar.Brand id="brand">GLACIER FINANCE</Navbar.Brand>
          <Nav className="ml-auto nav-links">
            <Link
              activeClass="active"
              to="/#home"
              spy={true}
              smooth={true}
              scroll={(el: any) => scrollWithOffset(el, 75)}
              exact
              className="nav-link"
            >
              Home
            </Link>

            <Link
              activeClass="active"
              to="/#team"
              spy={true}
              smooth={true}
              duration={500}
              scroll={(el: any) => scrollWithOffset(el, 75)}
              exact
              className="nav-link"
            >
              Team
            </Link>
            <Link
              activeClass="active"
              to="/#about"
              spy={true}
              smooth={true}
              duration={500}
              exact
              className="nav-link"
            >
              About
            </Link>
          </Nav>
      </Navbar>
    </div>
  );
}
