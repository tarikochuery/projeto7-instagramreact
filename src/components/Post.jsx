import { IoChatbubbleOutline, IoPaperPlaneOutline, IoHeartOutline, IoBookmarkOutline } from 'react-icons/io5';

function Post({ author, postImage }) {
  const { username, image } = author;
  return (
    <div class="post">
      <header class="post-header">
        <div class="author">
          <div class="img-profile">
            <img src={image} alt={username}/>
          </div>
          <strong class="author-username">{username}</strong>
        </div>
        <div class="options">
          <img src="assets/options-icon.svg" alt='options'/>
        </div>
      </header>
      <article class="post-image">
        <img src={postImage} alt={`${username}'s post`}/>
      </article>
      <footer class="post-footer">
        <div class="options-container">
          <ul class="interation-options">
            <li class="interation">
              <IoHeartOutline />
            </li>
            <li class="interation">
              <IoChatbubbleOutline />
            </li>
            <li class="interation">
              <IoPaperPlaneOutline />
            </li>
          </ul>
          <div class="save-options">
            <IoBookmarkOutline />
          </div>
        </div>
        <div class="post-informations">
          <div class="comments-user">
            <img src="assets/stories-images/respondeai.png" alt='respondeai'/>
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

//TODO: Dar função de salvar post (Alterar ícone bookmark)
//TODO: Dar função de like