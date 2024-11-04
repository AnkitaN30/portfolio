import { NavLink } from "react-router-dom";
import "./NavigationBar.css";

const NavigationBar = () => {
  const navLinkData = [
    {
      linkName: "Home",
      active: true,
      path: "/home",
    },
    {
      linkName: "About Us",
      active: false,
      path: "/about",
    },
    {
      linkName: "Skills",
      active: false,
      path: "/skills",
    },
    {
      linkName: "Qualifications",
      active: false,
      path: "/qualification",
    },
    {
      linkName: "Contact Me",
      active: false,
      path: "/contact",
    },
  ];

  return (
    <header>
      <div className="container">
        <div className="logo-brand">
          <NavLink to="/">Ankita N</NavLink>
        </div>

        <nav className="navigationBarWrapper">
          <ul>
            {navLinkData?.map((link) => (
              <li>
                <NavLink
                  to={link.path}
                  style={({ isActive, isPending, isTransitioning }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      color: isPending ? "red" : "black",
                      viewTransitionName: isTransitioning ? "slide" : "",
                    };
                  }}
                >
                  {" "}
                  {link.linkName}{" "}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavigationBar;
