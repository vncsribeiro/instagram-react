function Post(props) {
    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.profileImage} />
                    {props.userName}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src={props.postImage} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.likes} />
                    <div class="texto">
                        Curtido por <strong>{props.likedBy}</strong> e <strong>{props.quantityLikes}</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}


const posts = [
    {user: "meowed", profileImg: "assets/img/meowed.svg", postImg: "assets/img/gato-telefone.svg", likesImg: "assets/img/respondeai.svg", likedByUser: "respondeai", quantity: "outras 101.523 pessoas"},
    {user: "barked", profileImg: "assets/img/barked.svg", postImg: "assets/img/dog.svg", likesImg: "assets/img/adorable_animals.svg", likedByUser: "adorable_animals", quantity: "outras 99.159 pessoas"}
]

export default function Posts() {
    return (
        <div class="posts">
            
            <Post userName="meowed" profileImage="assets/img/meowed.svg" postImage ="assets/img/gato-telefone.svg" likes ="assets/img/respondeai.svg" likedBy="respondeai" quantityLikes="outras 101.523 pessoas"/>
            <Post userName="barked" profileImage="assets/img/barked.svg" postImage ="assets/img/dog.svg" likes ="assets/img/adorable_animals.svg" likedBy="adorable_animals" quantityLikes="outras 99.159 pessoas"/>
        </div>
    );
}