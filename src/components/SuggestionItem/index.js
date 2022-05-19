// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, upDatedSearch} = props
  const {suggestion} = suggestionDetails

  const onClikedArrow = () => {
    upDatedSearch(suggestion)
  }
  return (
    <div className="list-cont">
      <li className="list-style">
        <p>{suggestion}</p>
      </li>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png "
        alt="arrow"
        className="arrow-img"
        onClick={onClikedArrow}
      />
    </div>
  )
}

export default SuggestionItem
