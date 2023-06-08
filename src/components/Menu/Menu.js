import React from 'react';
import PropTypes from 'prop-types';
// Styles
import './Menu.css';
// Icons
import { FaMoon, FaSun } from 'react-icons/fa';

/*
 * TODO: Refactor Menu as a functional component
 *
 * Requirements:
 * - Create a custom hook to implement dark mode named useDarkMode
 * - Switch from setState to the useDarkMode hook
 * - Use function closures instead of this for callbacks and event handlers
 * - Menu logic and behavior should remain the same
 *
 */
class Menu extends React.Component {
  state = {
    darkMode: false,
  };

  handleOnChangeMode = () => {
    this.setState(prevState => ({
      ...prevState,
      darkMode: !prevState.darkMode,
    }));
  };

  render() {
    const ModeIcon = this.state.darkMode ? FaSun : FaMoon;

    const brandLogo = this.state.darkMode
      ? `${process.env.PUBLIC_URL}/logo_white.svg`
      : `${process.env.PUBLIC_URL}/logo.svg`;

    return (
      <div className="menu-container">
          <h6><div className="copyright">Copyright © {new Date().getFullYear()} {" "}
          <a href="https://www.riyonchakraborty.in" target="_blank" rel="noreferrer" className="copyright-link" style={{color:"white",textDecoration:"none"}}>RIYON</a>
         </div></h6>
        <ul className="menu-nav">
          {this.props.items.map((item, i) => (
            <li
              key={item}
              onClick={() => this.props.onSelectItem(i)}
              className={this.props.selectedItem === i ? 'selected' : null}
            >
              <h2>{item}</h2>
            </li>
          ))}
        
        </ul>
      </div>
    );
  }
}

Menu.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
  selectedItem: PropTypes.number,
  onSelectItem: PropTypes.func,
};

export default Menu;
