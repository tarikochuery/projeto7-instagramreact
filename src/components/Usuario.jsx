import { useState } from 'react';
import {IoPencilOutline} from 'react-icons/io5'


function Usuario() {
  const [username, setUsername] = useState('Catana')
  const [usernameImage, setUsernameImage] = useState('assets/catanacomics.png')
  
  const handleClickUsername = () => {
    const newUsername = prompt('Qual seu novo nome de usuário?')
    setUsername(newUsername)
  }

  const handleClickUsernameImage = () => {
    const newUsernameImage = prompt('Insira o link da nova imagem')
    setUsernameImage(newUsernameImage)
  }

  return (
    <header className="profile">
      <div className="profile-img" onClick={handleClickUsernameImage}>
        <img src={usernameImage} alt={username} />
      </div>
      <div class="profile-info">
        <strong>catanacomics</strong>
        <div className="user-container">
          <p>{username}</p>
          <div className="edit-icon">
            <IoPencilOutline size='1.2rem' onClick={handleClickUsername}/>
          </div>
        </div>
      </div>
    </header>
  );
}

export { Usuario };

//TODO: Dar função de edição ao nome do usuário
//TODO: Dar função de edição à imagem do usuário