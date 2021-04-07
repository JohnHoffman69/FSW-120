import React from 'react';
import SideMenu from './SideMenu';
import TweetsContainer from './TweetsContainer';

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      tweet: {
        id: 11,
        handle: "Master Hacker",
        tweetContent: ""
      },
      tweetList: []
    }
  }

  handleCreateTweet = (props) => {
    let form = document.getElementById("inputForm");

    let newTweet = form.tweetContent.value;

    console.log(newTweet)

      this.setState((prevstate) => ({
          tweet: {id: prevstate.tweet.id + 1,
                  handle: this.state.tweet.handle,
                  
                  tweetContent: newTweet}
          }), () => this.updateTweetList(this.state.tweet)
          )

      console.log(this.state.tweetList)

  }

  updateTweetList = () => {
    this.setState({
      tweetList: this.state.tweetList.concat(this.state.tweet)
  })     

  }


  render() {

    return (     
      <div className="App">
        <nav id="navbar">
          <p id="loginNav">Login
          </p>
          <img id="twitterimg" src="https://www.citypng.com/public/uploads/preview/-51614174826hzvag4ikru.png" alt="twitter"/>
        </nav>
        <SideMenu onAddNewTweet={this.handleCreateTweet} />
        <TweetsContainer tweet={this.state.tweet} tweetList={this.state.tweetList} />
      </div>
    )
  }
}

export default App;