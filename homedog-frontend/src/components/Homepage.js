import React from 'react'
import { Image} from 'semantic-ui-react'
import { connect } from 'react-redux'
import * as actions from '../actions'

const style = {
  width:"100%",
  "max-height": "500px"

  // float: "right",

}

const Homepage = (props) => {
  console.log(props.me);
  return(
    <div className="intro">
      {props.me ? <div>
        <Image style={style}src={require('../images/dogrunning.jpg')}/>
        <h1><center>What is Homed<img src={require('../images/pawpaw.png')}/>g?</center></h1>
        <div style={{width:"50%", margin:"auto"}}>
          <h4 className="introText">Have an adorable furry friend but freaking out over the high cost of dog hotels in the city? Homedog is for you! We are a network of fellow dog-lovers who would be more than happy to dog-sit for you, at a fraction of the cost! You can also dog-sit for other memebers and receive awesome perks!</h4>
        </div>

      </div>
      : null}
    </div>
  )
}

const mapStateToProps = ({auth, users}) => ({
  currentUser: auth.currentUser,
  allUsers: users,
  me: users.find(x => x.username === auth.currentUser.username)
});

export default connect(mapStateToProps, actions) (Homepage)
