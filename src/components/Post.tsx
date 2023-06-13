import ProfileImage from '../assets/profile.png';
import CheckmarkImage from '../assets/checkmark.png';
import ImagemodeImage from '../assets/imagesmode.png';
import LikeImage from '../assets/like.png';
import CommentImage from '../assets/comment.png';
import SaveImage from '../assets/save.png';
import Comment from './Comment';
import ThreeDot from '../custom_elements/ThreeDot';
import SliderDot from '../custom_elements/SliderDot';
import Tags from './Tags';

const Post = () => {
  const tags = ['#2023', '#TODAYISMONDAY', '#TOP', '#POPS!', '#WOW', '#ROW'];
  
  return (
    <div className="post">
      <div className="post_header">
        <img className="profile" src={ProfileImage} alt="character" />
        <div className="heading">
          <span><h3>안녕 나 응애 </h3><img src={CheckmarkImage} alt="verified icon" className="checkmark" /> <p>1일전</p></span>
          <p>165cm • 53kg</p>
        </div>
        <button className="btn">팔로우</button>
      </div>

      <div className="post_description">
        <div className="heading">지난 월요일에 했던 이벤트 중 가장 괜찮은 상품 뭐야?</div>
        <div className="description">
          <p>지난 월요일에 2023년 S/S 트렌드 알아보기 이벤트 참석했던 팝들아~
            혹시 어떤 상품이 제일 괜찮았어?</p>
          <p>후기 올라오는거 보면 로우라이즈? 그게 제일 반응 좋고 그 테이블이 
            제일 재밌었다던데 맞아???</p>
          <p>올해 로우라이즈가 트렌드라길래 나도 도전해보고 싶은데 말라깽이가
            아닌 사람들도 잘 어울릴지 너무너무 궁금해ㅜㅜ로우라이즈 테이블에
            있었던 팝들 있으면 어땠는지 후기 좀 공유해주라~~!</p>
        </div>
        <Tags tags={tags} />
      </div>

      <div className="post_img">
        <img src={ImagemodeImage} alt="post" />
        <SliderDot />
      </div>

      <div className="post_bottom">
        <button><img src={LikeImage} alt="like button" /> 5</button>
        <button><img src={CommentImage} alt="comment button" /> 5</button>
        <button><img src={SaveImage} alt="save button" /></button>
        <ThreeDot />
      </div>

      <div className="post_comment_section">
        <Comment />
        <div className="comment_input">
          <img src={ImagemodeImage} alt="photo icon" />
          <input type="text" placeholder="댓글을 남겨주세요." />
          <p>등록</p>
        </div>
      </div>
    </div>
  )
}

export default Post