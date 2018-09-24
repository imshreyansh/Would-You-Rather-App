import React,{Component, Fragment} from 'react'
import LoadingBar from 'react-redux-loading-bar'
import {Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavLink as reactNav} from 'reactstrap'
import {connect} from 'react-redux'
import {signOut} from "../actions/AuthenticatedUser"
import {Redirect,NavLink, BrowserRouter as Router} from 'react-router-dom'
import Dashboard from './Dashboard'
class NavBar extends Component{
    toggleNavbar = this.toggleNavbar.bind(this);
    state = {
      collapsed: true,
    };
 
    toggleNavbar() {
        this.setState({
          collapsed: !this.state.collapsed
        });
    }
    handleLogOut = (e) => {
        e.preventDefault()
        this.props.dispatch(signOut())
    }
    render(){
        
        const { authedUser} = this.props
        return(
          <Fragment>
          
          <Navbar color="faded" light>
          <NavbarBrand href="/" className="mr-auto">{`Hello ${authedUser}`}</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink to="/">Dashboard</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/add">Add Question</NavLink>
              </NavItem>
                <NavItem>
                    <NavLink to="/leaderboard">Leaderboard</NavLink>
                  </NavItem>
                <NavItem>
                <NavLink to="#" onClick={this.handleLogOut}>Sign Out</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        </Fragment>
        )
    }
}
function mapStateToProps({authedUser,users}){
    return {
     authedUser: authedUser ? authedUser: ' '
    }
}

export default connect(mapStateToProps)(NavBar)