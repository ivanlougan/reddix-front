import axios from 'axios'

const api = axios.create({
    baseURL: "https://reddix-api.onrender.com"
})

function getAllArticles() {
    return api.get("/api/articles").then((data) => {
        return data.data.articles
    })
}

function getAllTopics() {
    return api.get("/api/topics").then((data) => {
        return data.data
    })
}



export { getAllArticles, getAllTopics }