import ProfileImage from '../assets/profile.png';
import LikeImage from '../assets/like.png';
import ThreeDot from '../custom_elements/ThreeDot';

const NestedComment = () => {
  return (
    <>
      <div className="nested_comment">
        <ThreeDot />
        <div className="character">
          <img src={ProfileImage} alt="profile image" />
          <div className="title">
            <h3>ㅇㅅㅇ</h3>
            <span>1일전</span>
          </div>
        </div>
        <div className="comment_description">
          오 대박! 라이브 리뷰 오늘 올라온대요? 챙겨봐야겠다
          <div className="like">
            <button><img src={LikeImage} alt="like" /> 5</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default NestedComment