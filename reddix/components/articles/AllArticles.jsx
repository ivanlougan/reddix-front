import { useEffect, useState } from "react"
import { getAllArticles } from "../../api.js"
import { Link } from "react-router-dom"
import ArticleCard from "./ArticleCard.jsx"

function AllArticles() {
    const [articles, setArticles] = useState([])
    const [votes, setVotes] = useState(0)
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        setIsLoading(true);
        getAllArticles().then((response) => {
            setIsLoading(false)
            setArticles(response)
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    function handleAddComment(event) {
        event.preventDefault();
        <Link to="/articles/:article_id/comments"></Link>

    }

    function handleUpvote(event) {
        event.preventDefault();
    }

    if(isLoading === true){
        return <>
            <p>Now loading...</p>
        </>
    }

    return (
        <div className="articles-list">
            {articles.map((article) => {
                return (
                    <>
                        <ArticleCard key={article.article_id}
                            image={article.article_img_url}
                            title={article.title}
                            author={article.author}
                            topic={article.topic}
                            commentsCount={article.comment_count}
                            votes={article.votes}
                            createdAt={article.created_at}
                        />
                        <button onClick={handleAddComment}>Add comment</button>
                        <button onClick={handleUpvote}>Upvote</button>
                    </>
                )
            })}

        </div>
    )

}

export default AllArticles