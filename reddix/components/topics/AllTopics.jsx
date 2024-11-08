import { useEffect, useState } from "react"
import { getAllTopics } from "../../api.js"
import TopicCard from "./TopicCard.jsx"

function AllTopics() {

    const [topics, setTopics] = useState([])
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        setIsLoading(true)
        getAllTopics().then((response) => {
            setIsLoading(false)
            setTopics(response)
        }).catch((err) => {
            console.log(err)
        })

    }, [])

    if(isLoading){
        return <>
            <p>Now loading...</p>
        </>
    }

    return (<div className="topics-list">
                {topics.map((topic) => {
                    return (
                    <TopicCard key={topic.slug}
                        topic={topic}
                        />
                    )
                })}
            </div>
    )

}

export default AllTopics