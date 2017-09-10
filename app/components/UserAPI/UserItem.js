import React,{ Component} from 'react'
import {Link} from 'react-router-dom'

class UserItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      likeStatus: ''
    }
    this.onLikeHandle = this.onLikeHandle.bind(this)
  }

  onLikeHandle() {
    this.setState({likeStatus: this.props.likeStatus === -1 ? 'happy' : 'broken'})
    this.props.emotionEvent(this.props.email)
  }

  render() {
    const { name, email, imgURL, gender, emotionEvent, likeStatus, removeEvent, path} = this.props
    const genderClass = gender === 'male' ? 'male' : 'female'
    const likeAnimation = this.state.likeStatus
    return(
      <div className='user-item__wrapper'>
        <div className='user-item__img-wrapper' >
          <img src={imgURL} className={`user-item__img ${genderClass}`}/>
          <div className='heart-wrapper' onClick ={this.onLikeHandle}>
            <span className='fa fa-heart heart-beat'></span>
            <div className={`heart ${likeAnimation}`}></div>
          </div>
        </div>
        <Link
          to = {
            {
              pathname: `${path}/user`,
              search: `${name}`,
              query: this.props.data
            }
          }
        >
          <h3 className='user-item__name'>{name}</h3>
        </Link>
        <h3 className='user-item__email'>{email}</h3>
        <div className='user-item__action'>
          <span className={likeStatus === -1 ? 'fa fa-thumbs-up fa-lg like' :'fa fa-thumbs-down fa-lg dislike'} onClick ={this.onLikeHandle}>{likeStatus === -1 ? 'like' : 'dislike'}</span>
          <span className='fa fa-remove fa-lg remove' onClick={()=> removeEvent(email)} >remove</span>
        </div>
      </div>
    )
  }
}

export default UserItem
