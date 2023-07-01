import './index.css'

const TagItem = props => {
  const {tagDetails, isActive, onClickTag} = props
  const {displayText, optionId} = tagDetails
  const activeClass = isActive ? 'active-tag' : ''
  const onClickTagItem = () => {
    onClickTag(optionId)
  }
  return (
    <li>
      <button
        onClick={onClickTagItem}
        className={`tag-btn ${activeClass}`}
        type="button"
      >
        {displayText}
      </button>
    </li>
  )
}

export default TagItem
