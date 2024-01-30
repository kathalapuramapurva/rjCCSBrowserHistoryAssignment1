import './index.css'

const EachHistory = props => {
  const {eachHistory, deleteEachHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = eachHistory
  const deleteItem = () => {
    deleteEachHistory(id)
  }
  return (
    <li className="each-item-container">
      <p className="style-time">{timeAccessed}</p>
      <div className="history-item">
        <img className="style-logo" src={logoUrl} alt="domain logo" />
        <div className="name-delete">
          <div className="name-container">
            <p className="style-title">{title}</p>
            <p className="style-domain-url">{domainUrl}</p>
          </div>
          <button
            className="style-button"
            data-testid="delete"
            type="button"
            onClick={deleteItem}
          >
            <img
              className="style-delete-icon"
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              alt="delete"
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default EachHistory
