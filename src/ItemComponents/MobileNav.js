import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useTransition, animated } from "react-spring";
import MobileNavMenu from "./MobileNavMenu";

function MobileNav() {
  const [showMenu, setShowMenu] = useState(false);

  const menuTransitions = useTransition(showMenu, null, {
    from: { opacity: 0, transform: "translateX(100%)", zIndex: 50 },
    enter: { opacity: 1, transform: "translateX(0%)", zIndex: 50 },
    leave: { opacity: 0, transform: "translateX(100%)", zIndex: 50 }
    
  });

  return (
    <div>
      <nav className="navbar bg-secondary justify-content-between py-3">
        <img src={ require("../resources/images/raketech-logo.png") } alt="logo" width="150" />
        <span className="text-xl text-primary">
          <FontAwesomeIcon
            icon={faBars}
            onClick={() => setShowMenu(!showMenu)}
          />
        </span>
      </nav>

      {menuTransitions.map(
        ({ item, key, props }) =>
          item && (
            <animated.div
              key={key}
              style={props}
              className="position-fixed bg-primary-light right-0 w-100 h-100 shadow p-3"
            >
              <MobileNavMenu closeMenu={() => setShowMenu(false)} />
            </animated.div>
          )
      )}
    </div>
  );
}

export default MobileNav;
