import {Component} from 'react'
import EachHistory from '../HistoryItem'
import './index.css'

class History extends Component {
  state = {
    searchName: '',
  }

  onChangeSearchInput = event => {
    this.setState({searchName: event.target.value})
  }

  render() {
    const {initialHistoryList} = this.props
    const {searchName} = this.state
    const filteredList = initialHistoryList.filter(eachHistory =>
      eachHistory.title.toLowerCase().includes(searchName.toLowerCase()),
    )
    console.log(filteredList.length)
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
                  <EachHistory eachHistory={eachHistory} key={eachHistory.id} />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    )
  }
}
export default History
