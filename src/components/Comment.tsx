import ProfileImage from '../assets/profile.png';
import CheckmarkImage from '../assets/checkmark.png';
import LikeImage from '../assets/like.png';
import CommentImage from '../assets/comment.png';
import NestedComment from './NestedComment';

const Comment = () => {
  return (
    <div className="comment">
      <button className="descriptive_button">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div className="character">
        <img src={ProfileImage} alt="profile image" />
        <div className="title">
          <h3>안녕 나 응애 </h3>
          <img src={CheckmarkImage} alt="verified" />
          <span>1일전</span>
        </div>
      </div>
      <div className="comment_description">
          어머 제가 있던 테이블이 제일 반응이 좋았나보네요 
          우짤래미님도 아시겠지만 저도 일반인 몸매 그 이상도 이하도
          아니잖아요?! 그런 제가 기꺼이 도전해봤는데 생각보다
          괜찮았어요! 오늘 중으로 라이브 리뷰 올라온다고 하니
          꼭 봐주세용~!
        <div className="like">
          <button><img src={LikeImage} alt="like" /> 5</button>
          <button><img src={CommentImage} alt="like" /> 5</button>
        </div>
      </div>
      <NestedComment />
    </div>
  )
}

export default Comment