// Write your code here
import './index.css'

const EventItem = props => {
  const {details, activeid, changeRegisterStatus} = props
  const {imageUrl, name, location, registrationStatus, id} = details
  const showStatus = () => {
    changeRegisterStatus(registrationStatus, id)
  }
  return (
    <li
      className={`card-1 ${id === activeid ? 'border-style' : ''}`}
      onClick={showStatus}
    >
      <div className="card__cover">
        <img className="image-1" src={imageUrl} alt={name} />
      </div>
      <div className="card__content">
        <h1>{name}</h1>
        <p>{location}</p>
      </div>
    </li>
  )
}

export default EventItem
