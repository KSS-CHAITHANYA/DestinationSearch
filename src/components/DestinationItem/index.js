import './index.css'

const DestinationItem = props => {
  const {userDetails} = props
  const {name, imgUrl} = userDetails

  return (
    <li>
      <div className="image-container">
        <img src={imgUrl} alt={name} className="image" />
        <p>{name}</p>
      </div>
    </li>
  )
}

export default DestinationItem
