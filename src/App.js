import './App.css'
import {Component} from 'react'
import EachHistory from './components/HistoryItem'

// These are the list used in the application. You can move them to any component needed.
const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

// Replace your code here
class History extends Component {
  state = {
    searchName: '',
    historyList: initialHistoryList,
  }

  onChangeSearchInput = event => {
    this.setState({searchName: event.target.value})
  }

  deleteEachHistory = givenId => {
    const {historyList} = this.state
    const newList = historyList.filter(each => each.id !== givenId)
    this.setState({historyList: newList})
  }

  render() {
    const {searchName, historyList} = this.state
    const filteredList = historyList.filter(eachHistory =>
      eachHistory.title.toLowerCase().includes(searchName.toLowerCase()),
    )
    return (
      <div className="main-container">
        <div className="content-container">
          <div className="heading-container">
            <img
              className="style-image"
              src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
              alt="app logo"
            />
            <div className="search-container-full">
              <img
                className="style-search-icon"
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search"
              />
              <div className="search-container">
                <input
                  className="style-input"
                  placeholder="Search history"
                  type="search"
                  onChange={this.onChangeSearchInput}
                  value={searchName}
                />
              </div>
            </div>
          </div>
          <div className="bottom-container">
            {filteredList.length === 0 ? (
              <p className="style-para">There is no history to show</p>
            ) : (
              <ul className="history-items-container">
                {filteredList.map(eachHistory => (
                  <EachHistory
                    eachHistory={eachHistory}
                    key={eachHistory.id}
                    deleteEachHistory={this.deleteEachHistory}
                  />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    )
  }
}
const App = () => <History initialHistoryList={initialHistoryList} />

export default App
