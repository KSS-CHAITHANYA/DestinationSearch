import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchInput: '',
      userDetailsList: props.destinationsList,
    }
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput, userDetailsList} = this.state

    const searchResults = userDetailsList.filter(eachUser =>
      eachUser.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="main-background">
        <h1>Destination Search</h1>
        <input
          type="search"
          className="input"
          value={searchInput}
          onChange={this.onChangeSearchInput}
        />

        <ul className="items-container">
          {searchResults.map(eachItem => (
            <DestinationItem userDetails={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
