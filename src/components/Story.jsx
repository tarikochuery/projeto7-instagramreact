export function Story({ image, username }) {
  return (
    <div class="story-container">
      <div class="story-img-container">
        <img src={image} alt={username}/>
      </div>
      <p>{username}</p>
    </div>
  );
}