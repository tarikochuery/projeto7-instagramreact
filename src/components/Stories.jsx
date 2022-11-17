import { Story } from "./Story";

export function Stories() {
  const stories = [
    { username: '9gag', image: 'assets/stories-images/9gag.png' },
    { username: 'meowed', image: 'assets/stories-images/meowed.png' },
    { username: 'barked', image: 'assets/stories-images/barked.png' },
    { username: 'nathanwpyle...', image: 'assets/stories-images/nathanwpylestrangeplanet.png' },
    { username: 'wawawiwac...', image: 'assets/stories-images/wawawiwacomicsa.png' },
    { username: 'respondeai', image: 'assets/stories-images/respondeai.png' },
    { username: 'filomoderna', image: 'assets/stories-images/filomoderna.png' },
    { username: '9gag', image: 'assets/stories-images/9gag.png' },
  ];

  return (
    <div className="stories-wraper">
      <div className="stories-container">
        <div class="swipe">
          <img src="assets/arrow-icon.svg" alt="" />
        </div>
        {stories.map((story, idx) => <Story key={idx} username={story.username} image={story.image} />)}
      </div>
    </div>
  );
}