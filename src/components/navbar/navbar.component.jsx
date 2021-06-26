import React, { Component } from 'react';
import './navbar.styles.scss';
import { withRouter } from 'react-router-dom';
import { logoTrustest } from '../../assets';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navbar: false
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.changeBackground);
  }

  changeBackground = () => {
    if (window.scrollY >= 80) {
      this.setState({
        navbar: true
      });
    } else {
      this.setState({
        navbar: false
      });
    }
  };

  handleChange = (link) => {
    this.props.history.push(link);
    window.scrollTo(0, 0);
  };

  render() {
    return (
      <div className={`navbar ${this.state.navbar ? 'active' : ''} `}>
        <div className="navbar__logo" onClick={() => this.handleChange('/')}>
          <img src={logoTrustest} alt="logo" />
        </div>
        {/* <p className = {`${this.state.navbar ? 'active' : ''}`} onClick={() => this.handleChange('/members')}>Member</p>
        <p className = {`${this.state.navbar ? 'active' : ''}`} onClick={() => this.handleChange('/aboutus')}>About Us</p> */}
      </div>
    );
  }
}

export default withRouter(Navbar);
