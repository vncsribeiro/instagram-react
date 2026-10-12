function User(props) {
    return (
        <div class="usuario">
            <img src={props.userImg} />
            <div class="texto">
                <strong>{props.user}</strong>
                <span>
                    {props.nickName}
                    <ion-icon name="pencil" ></ion-icon>
                </span>
            </div>
        </div>
    );
}


function Suggestions(props) {
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={props.profileImg} />
                <div class="texto">
                    <div class="nome">{props.profileName}</div>
                    <div class="razao">{props.action}</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    );
}


const suggestions = [
    { profileName: "bad.vibes.memes", profileImg: "assets/img/bad.vibes.memes.svg", action: "Segue você" },
    { profileName: "chibirdart", profileImg: "assets/img/chibirdart.svg", action: "Segue você" },
    { profileName: "razoesparaacreditar", profileImg: "assets/img/razoesparaacreditar.svg", action: "Novo no Instagram" },
    { profileName: "adorable_animals", profileImg: "assets/img/adorable_animals.svg", action: "Segue você" },
    { profileName: "smallcutecats", profileImg: "assets/img/smallcutecats.svg", action: "Segue você" },
]


export default function Sidebar() {
    return (
        <div class="sidebar">
            <User userImg="assets/img/catanacomics.svg" user="catanacomics" nickname="Catana"/>
            

            <div class="sugestoes">
                <div class="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>

                {suggestions.map(suggestion => (
                    <Suggestions profileName={suggestion.profileName} profileImg={suggestion.profileImg} action={suggestion.action} />))}

            </div>

            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
                Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    )
}