import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here

class Comments extends Component {
  state = {oldComments: [], name: '', comment: '', count: 0}

  deleteComment = id => {
    this.setState(prevState => ({
      oldComments: prevState.oldComments.filter(
        eachComment => eachComment.id !== id,
      ),
      count: prevState.count - 1,
    }))
  }

  toggleIsLike = id => {
    this.setState(prevState => ({
      oldComments: prevState.oldComments.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isLike: !eachComment.isLike}
        }
        return eachComment
      }),
    }))
  }

  onAddComment = event => {
    event.preventDefault()
    const {oldComments, name, comment} = this.state
    const newComment = {
      id: uuidv4(),
      name,
      comment,
      isLike: false,
      profileBackground:
        initialContainerBackgroundClassNames[oldComments.length],
    }
    this.setState(prevState => ({
      oldComments: [...prevState.oldComments, newComment],
      name: '',
      comment: '',
      count: prevState.count + 1,
    }))
  }

  getName = event => {
    this.setState({name: event.target.value})
  }

  getComment = event => {
    this.setState({comment: event.target.value})
  }

  render() {
    const {oldComments, name, comment, count} = this.state
    return (
      <div className="container">
        <h1>Comments</h1>
        <div className="card">
          <form className="form-component" onSubmit={this.onAddComment}>
            <p>Say something about 4.0 Technologies</p>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="name"
              onChange={this.getName}
              value={name}
            />
            <textarea
              placeholder="Your comment"
              rows="10"
              className="comment"
              onChange={this.getComment}
              value={comment}
            >
              m
            </textarea>
            <button type="submit" className="button">
              Add Comment
            </button>
          </form>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
            />
          </div>
        </div>
        <hr className="horizontal" />
        <div>
          <div className="comments-counter">
            <p className="comments-count">{count}</p>
            <p>Comments</p>
          </div>
          <ul className="list-comments">
            {oldComments.map(eachComment => (
              <CommentItem
                eachComment={eachComment}
                key={eachComment.id}
                toggleIsLike={this.toggleIsLike}
                deleteComment={this.deleteComment}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
