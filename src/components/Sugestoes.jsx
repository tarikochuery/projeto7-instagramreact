import { Sugestao } from "./Sugestao";

export function Sugestoes(){
  const sugestoes = [
    {username: 'bad.vibes.meme', image:'assets/follower-images/badvibesmemes.png'},
    {username: 'chibirdart', image:'assets/follower-images/chibirdart.png'},
    {username: 'razoesparaacreditar', image:'assets/follower-images/razoesparaacreditar.png'},
    {username: 'adorable_animals', image:'assets/follower-images/adorableanimals.png'},
    {username: 'smallcutecats', image:'assets/follower-images/smallcutecats.png'},
  ]

  return(
      <main className="suggestions">
        <div className="suggestions-header">
          <p>Sugestões para você</p>
          <p>Ver tudo</p>
        </div>
        <div className="suggestions-content">
          {sugestoes.map((sugestao, idx) => <Sugestao key={idx} username={sugestao.username} image={sugestao.image} />)}
        </div>
      </main>
  )
}