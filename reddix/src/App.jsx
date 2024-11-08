import { Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import AllArticles from "../components/articles/AllArticles";
import AllTopics from "../components/topics/AllTopics";
import Homepage from "../components/home/Homepage";

function App() {

  return (
    <>
     
      <Header />
      <Navigation />
      <Routes>

        <Route path="/" element={<Homepage/>} />
        <Route path="/articles" element={<AllArticles />} />
        <Route path="/topics" element={<AllTopics />}/>


      </Routes>
      
    </>
  )
}

export default App
