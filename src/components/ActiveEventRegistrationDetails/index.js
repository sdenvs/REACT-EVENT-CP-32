// Write your code here

const eventStatusList = {
  initial: 'INITIAL',
  registered: 'REGISTERED',
  yetToRegistered: 'YET_TO_REGISTER',
  registerClosed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {eventStatus} = props

  const initialRender = () => (
    <div className="p-2 text-center">
      <p className="status-text">
        Click on an event, to view its registration details
      </p>
    </div>
  )

  const registeredRender = () => (
    <div className="text-center mt-5 p-2">
      <img
        className="w-50"
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
      />
      <h1 className="status-text">You have already registered for the event</h1>
    </div>
  )

  const yetToRegisteredRender = () => (
    <div className="text-center mt-5 p-2">
      <img
        className="w-100 mb-3"
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
      />
      <p>
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form.
      </p>
      <button className="btn btn-primary">Register Here</button>
    </div>
  )

  const registerationClosedRender = () => (
    <div className="text-center mt-5 p-2">
      <img
        className="w-100"
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
      />
      <h1 className="status-text">Registrations Are Closed Now!</h1>
      <p>Stay tuned. We will reopen the registration soon!</p>
    </div>
  )

  switch (eventStatus) {
    case eventStatusList.initial:
      return initialRender()
    case eventStatusList.registered:
      return registeredRender()
    case eventStatusList.yetToRegistered:
      return yetToRegisteredRender()
    case eventStatusList.registerClosed:
      return registerationClosedRender()
    default:
      return null
  }
}

export default ActiveEventRegistrationDetails
