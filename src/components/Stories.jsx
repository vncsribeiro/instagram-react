function Story(props) {
    return (
        <div class="story">
            <div class="imagem">
                <img src={props.img} />
            </div>
            <div class="usuario">
                {props.user}
            </div>
        </div>
    )
}

const stories = [
    { source: 'assets/img/9gag.svg', user: '9gag' },
    { source: 'assets/img/meowed.svg', user: 'meowed' },
    { source: 'assets/img/barked.svg', user: 'barked' },
    { source: 'assets/img/nathanwpylestrangeplanet.svg', user: 'nathanwpylestrangeplanet' },
    { source: 'assets/img/wawawicomics.svg', user: 'wawawicomics' },
    { source: 'assets/img/respondeai.svg', user: 'respondeai' },
    { source: 'assets/img/filomoderna.svg', user: 'filomoderna' },
    { source: 'assets/img/memeriagourmet.svg', user: 'memeriagourmet' },
]

export default function Stories() {
    return (
        <div class="stories">
            {stories.map(story => (
                <Story img={story.source} user={story.user} />
            ))}

            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    );
}