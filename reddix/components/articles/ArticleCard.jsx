function ArticleCard(props) {

    return (
        <div className="article-card">
            <img src={props.image} alt="article card img"/>
            <h3>{props.title}</h3>
            <p>Comments: {props.commentsCount}</p>
            <p>Votes: {props.votes}</p>

        </div>
    )
}

export default ArticleCard