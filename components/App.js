import React,{Component,Fragment} from 'react'
import LoadingBar from 'react-redux-loading-bar'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import {handleInitialData} from '../actions/Shared'
import Dashboard from './Dashboard'
import Login from './Login'
import AddQuestion from './AddQuestion'
import './css/bootstrap.css'
import './css/App.css'
import NavBar from './NavBar'
import LeaderBoard from './LeaderBoard'
import Question from './Question'
import NotFound from './NotFound'

class App extends Component{
componentDidMount(){
this.props.dispatch(handleInitialData())
}
    render(){
        const { authedUser } = this.props;

        return(
         <div>
                <Router>
                    <Fragment>
                    <LoadingBar />
                        {authedUser ?
                                <div>
                                    <NavBar />
                                    <Switch>
                                        <Route path='/' exact component={Dashboard} />
                                        <Route path='/add' component={AddQuestion} />
                                        <Route path='/leaderboard' component={LeaderBoard} />
                                        <Route path='/question/:id' component={Question} />
                                        <Route component={NotFound} />
                                    </Switch>
                                </div>
                            : <Login />}
                    </Fragment>
                </Router>
            </div>

        )
    }
}
function mapStateToProps({authedUser}){
    return{
        authedUser
    }
}
export default connect(mapStateToProps)(App)
