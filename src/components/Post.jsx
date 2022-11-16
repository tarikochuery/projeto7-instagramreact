import { HeartOutline, ChatbubbleOutline, PaperPlaneOutline, BookmarkOutline } from 'react-ionicons';

function Post({ author, postImage }) {
  const { username, image } = author;
  return (
    <div class="post">
      <header class="post-header">
        <div class="author">
          <div class="img-profile">
            <img src={image} />
          </div>
          <strong class="author-username">{username}</strong>
        </div>
        <div class="options">
          <img src="assets/options-icon.svg" />
        </div>
      </header>
      <article class="post-image">
        <img src={postImage} alt="" />
      </article>
      <footer class="post-footer">
        <div class="options-container">
          <ul class="interation-options">
            <li class="interation">
              <HeartOutline />
            </li>
            <li class="interation">
              <ChatbubbleOutline />
            </li>
            <li class="interation">
              <PaperPlaneOutline />
            </li>
          </ul>
          <div class="save-options">
            <BookmarkOutline />
          </div>
        </div>
        <div class="post-informations">
          <div class="comments-user">
            <img src="assets/stories-images/respondeai.png" />
          </div>
          <p>
            Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong>
          </p>
        </div>
      </footer>
    </div>
  );
}

export { Post };