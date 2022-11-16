import { Sugestoes } from "./Sugestoes";
import { Usuario } from "./Usuario";

function SideBar() {
  return (
    <aside className="side-bar">
      <Usuario />
      <Sugestoes />
      <footer class="aside-footer">
        <p>
          Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos
          • Localizações • Contas mais relevantes • Hashtags • Idioma
        </p>
        <p>© 2021 INSTAGRAM DO FACEBOOK</p>
      </footer>
    </aside>
  );
}

export { SideBar };