// Write your code here
import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  upDatedSearch = suggestion => {
    this.setState({searchInput: suggestion})
  }

  onSearchInput = event => {
    this.setState({searchInput: event.target.value})
    // console.log(searchInput)
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props
    const searchResult = suggestionsList.filter(eachSuggestion =>
      eachSuggestion.suggestion
        .toLowerCase()
        .includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="google-logo"
        />
        <div className="suggestions-cont">
          <div className="search-cont">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png "
              alt="search icon"
              className="search-icon"
            />
            <input
              className="search-box"
              type="search"
              value={searchInput}
              placeholder="search google"
              onChange={this.onSearchInput}
            />
          </div>
          <ul className="un-ordered-list">
            {searchResult.map(eachSuggestion => (
              <SuggestionItem
                key={eachSuggestion.id}
                suggestionDetails={eachSuggestion}
                upDatedSearch={this.upDatedSearch}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
