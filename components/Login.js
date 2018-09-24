import React,{Component} from 'react'
import {connect} from 'react-redux'
import { Card, Button, CardImg, CardTitle, CardDeck,
 CardSubtitle, CardBody } from 'reactstrap'
import './css/Login.css'
import {authUser} from "../actions/AuthenticatedUser"
import {Link, Redirect} from 'react-router-dom'
import { handleLogin } from '../actions/AuthenticatedUser'


class Login extends Component{
   state = {
        isLogged: false
    }
    
    handleLogin = (e, id) => {
        this.props.dispatch(handleLogin(id))
    }

    render() {
        const {users,authedUser}=this.props
        return(
        <div>
            <h1>Would You Rather !!!!</h1>
            {Object.keys(users).map(key=>(
                    <CardDeck className='main'>
                      <Card>
                        <CardImg className='img' src={users[key].avatarURL} alt="Card image cap" />
                        <CardBody>
                          <CardTitle className='title1'>{users[key].name}</CardTitle>
                            <CardSubtitle className= 'subtitle'>@{users[key].id}</CardSubtitle>
                          <Button className='button' onClick={e => this.handleLogin(e, users[key].id)}>Login</Button>
                        </CardBody>
                      </Card>
                    </CardDeck>
             ))}
            </div>
        )
    }
}

function mapStateToProps({users, authedUser}) {
    return {
        users: Object.values(users).map((user) => {
            return ({
                id: user.id,
                name: user.name,
                avatarURL:user.avatarURL
            })
        }),
        authedUser
    }
}
export default connect(mapStateToProps)(Login)