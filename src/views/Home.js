import React, {useEffect, useState} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MuroBlog from "../components/MuroBlog";
import Article from "../components/Article";
import axios from "axios";

const Home = () => {
    const [articles, setarticles] = useState([]);
    const [infoBlog, setinfoBlog] = useState({});
    

    const ArticlesRender = () => {
      return (
        articles.map( (data, index) => (
          <Article data={data} />
        ))
      )

    }



    const getInfoBlog  = async () => {
      let baseURL = 'https://y82rz54sna.execute-api.us-east-1.amazonaws.com/dev/api/v1/info-blog';
      await axios.get(baseURL).then((response) => {
          setinfoBlog(response.data.data);
        });
    }

    const getAllArticles  = async () => {
      let baseURL = 'https://y82rz54sna.execute-api.us-east-1.amazonaws.com/dev/api/v1/all';
      await axios.get(baseURL).then((response) => {
        setarticles(response.data.data);
        });
    }

    
    useEffect( () => {
      getInfoBlog();
      getAllArticles();
    }, [])

  return (
    <>
      <Header />
      <MuroBlog data={infoBlog} />

      <div class="bg-white">
        <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 class="text-2xl font-bold tracking-tight text-gray-900">
            últimos del articulos del Blog
          </h2>
          <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">


          <ArticlesRender/>
           

          </div>
        </div>
      </div>

      <Footer />

    </>
  );
};

export default Home;
