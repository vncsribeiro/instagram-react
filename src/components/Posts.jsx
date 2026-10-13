import React from 'react';


function Post(props) {

    const [isLiked, setIsliked] = React.useState(props.liked);

    function likePost() {
        setIsliked(!isLiked);
    }



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
                        {isLiked ? (<ion-icon name="heart" class="like" onClick={likePost}></ion-icon>) : (<ion-icon name="heart-outline" onClick={likePost}></ion-icon>)}
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
                        Curtido por <strong>{props.likedBy}</strong> e <strong>outras {props.quantityLikes} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}


const posts = [
    { user: "meowed", profileImg: "assets/img/meowed.svg", postImg: "assets/img/gato-telefone.svg", likesImg: "assets/img/respondeai.svg", likedByUser: "respondeai", quantity: "101.523", liked: true },
    { user: "barked", profileImg: "assets/img/barked.svg", postImg: "assets/img/dog.svg", likesImg: "assets/img/adorable_animals.svg", likedByUser: "adorable_animals", quantity: "99.159", liked: false }
]


export default function Posts() {
    return (
        <div class="posts">
            {posts.map(post => (
                <Post userName={post.user} profileImage={post.profileImg} postImage={post.postImg} likes={post.likesImg} likedBy={post.likedByUser} quantityLikes={post.quantity} />
            ))}
        </div>
    );
}