import React, {useEffect, useState} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MuroBlog from "../components/MuroBlog";
import Article from "../components/Article";
import axios from "axios";
import { useParams } from 'react-router-dom';


const ArticleDetail = () => {
    const [detailarticles, setdetailarticles] = useState([]);    
    const { id_article } = useParams();


    const getDetailArticle  = async () => {
      let baseURL = `https://y82rz54sna.execute-api.us-east-1.amazonaws.com/dev/api/v1/detail/${id_article}`;
      axios.get(baseURL).then((response) => {
        setdetailarticles(response.data.data);
        });
    }

    
    useEffect( () => {
      getDetailArticle();
    }, [])

  return (
    <>
      <Header />
      <MuroBlog data={detailarticles} />

      <div class="bg-white">
        <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 class="text-2xl font-bold tracking-tight text-gray-900">
            Detalle del Articlo
          </h2>
          <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">


           

          </div>
        </div>
      </div>

      <Footer />

    </>
  );
};

export default ArticleDetail;
