

function TopicCard(props) {

    const { slug: topic, description} = props.topic

    return (<div className="topic-card">
        <h4>{topic}</h4>
        <p key={topic}>{description}</p>
    </div>
    )
}

export default TopicCard