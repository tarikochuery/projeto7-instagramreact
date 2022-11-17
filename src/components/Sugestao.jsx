export function Sugestao({ username, image }) {
  return (
    <div class="follow-suggestion">
      <div class="follower-profile">
        <div class="follower-img">
          <img src={image} alt={username}/>
        </div>
        <div class="follower-info">
          <strong class="follower-username">{username}</strong>
          <p>Segue você</p>
        </div>
      </div>
      <p>Seguir</p>
    </div>
  );
}