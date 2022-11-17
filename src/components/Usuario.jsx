function Usuario() {
  return (
    <header className="profile">
      <div className="profile-img">
        <img src="assets/catanacomics.png" alt='catanacomics'/>
      </div>
      <div class="profile-info">
        <strong>catanacomics</strong>
        <p>Catana</p>
      </div>
    </header>
  );
}

export { Usuario };

//TODO: Adicionar lápis ao lado do nome
//TODO: Dar função de edição ao nome do usuário
//TODO: Dar função de edição à imagem do usuário