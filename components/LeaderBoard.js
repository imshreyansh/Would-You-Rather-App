import React,{Component} from 'react'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap'
import {connect} from 'react-redux'
import './css/LeaderBoard.css'

class LeaderBoard extends Component{
    render(){
        const {leadUsers}=this.props
        
        return (
            <div>
            {leadUsers.map((users)=>(
              <Card className="leadmain">
                  <div>
                        <div className="leaderboard-header">
                            <img className='leadimg' src={users.avatarURL} />
                        </div>
                        <div className="leaderboard-header-name">
                            {users.name}
                        </div>
                        <div className="leaderboard-header">
                            Total Score: {users.totalScore}
                        </div>
                        <div className="leaderboard-header">
                            Created Question: {users.totalQuestions}
                        </div>
            <div className="leaderboard-header">
                            Answered: {users.totalAnswers}
                        </div>
                  </div>
              </Card>
            ))}
           </div>
        );
    }
}
function mapStateToProps({users}){
    const leaderboardUsers = Object.keys(users).map((key) => ({
        id: key,
        name: users[key].name,
        avatarURL: users[key].avatarURL,
        totalAnswers: Object.keys(users[key].answers).length,
        totalQuestions: users[key].questions.length,
        totalScore: Object.keys(users[key].answers).length + users[key].questions.length
    }))
    
    
    return {
        leadUsers: leaderboardUsers.sort((a, b) => b.totalScore - a.totalScore)
    }
}

export default connect(mapStateToProps)(LeaderBoard)