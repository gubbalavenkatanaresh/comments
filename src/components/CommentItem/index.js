import './index.css'

const CommentItem = props => {
  const {eachComment, toggleIsLike, deleteComment} = props
  const {id, name, comment, isLike, profileBackground} = eachComment

  const onLike = () => {
    toggleIsLike(id)
  }

  const onDelete = () => {
    deleteComment(id)
  }

  return (
    <li>
      <div>
        <div className={profileBackground}>{name[0]}</div>
        <h1>{name}</h1>
        <p>less than a minute ago</p>
        <p>{comment}</p>
      </div>
      <div>
        <button type="button" onClick={onLike}>
          <img
            src={
              isLike
                ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
            }
            alt="like"
          />
        </button>
        <button type="button" data-testid="delete" onClick={onDelete}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default CommentItem
