import { useState } from 'react';
import {IoPencilOutline} from 'react-icons/io5'


function Usuario() {
  const [username, setUsername] = useState('Catana')
  const [usernameImage, setUsernameImage] = useState('assets/catanacomics.png')
  
  const validateUrlImage = (url) => {
    const urlImageRegex = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/g
    return urlImageRegex.test(url)
  }

  const handleClickUsername = () => {
    const newUsername = prompt('Qual seu novo nome de usuário?')
    setUsername(newUsername)
  }

  const handleClickUsernameImage = () => {
    const newUsernameImage = prompt('Insira o link da nova imagem')
    if (validateUrlImage(newUsernameImage)) {
      setUsernameImage(newUsernameImage)
      return
    }
    alert('Insira uma url válida')
  }

  return (
    <header className="profile" data-test='user'>
      <div className="profile-img">
        <img src={usernameImage} onClick={handleClickUsernameImage} alt={username} data-test='profile-image'/>
      </div>
      <div class="profile-info">
        <strong>catanacomics</strong>
        <div className="user-container">
          <p data-test='name'>{username}</p>
          <div className="edit-icon">
            <IoPencilOutline size='1.2rem' data-test='edit-name' onClick={handleClickUsername}/>
          </div>
        </div>
      </div>
    </header>
  );
}

export { Usuario };