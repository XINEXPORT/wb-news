import { useSelector, useDispatch} from 'react-redux'
import { useEffect } from "react";
import { requestArticles }  from '../../reducers/mediumReducer.js';
import Card from '../shared/Card/Card.jsx';
import axios from 'axios';
import Loading from '../shared/Loading/Loading.jsx';

export default function Medium() {
  const articles = useSelector((state) => state.medium.article);
  const loading = useSelector((state) => state.medium.loading);
  const dispatch = useDispatch()

  useEffect(()=>{
    const requestArticles = async ()=>{
      dispatch ({type: "PENDING"})
      const articles = await axios.get ('/api/medium').then (res => res.data);
      dispatch ({type: "REQUEST_ARTICLES", payload : articles})
    }

    requestArticles()}, [])

  const articleCards = articles.map((article) => <Card key={article.id} article={article} />);

  return (
    <div className="news-container">
        <img className='logo' src="../../assets/mediumLogo.png" alt="" />
        {loading ? <Loading /> : <div>{articleCards}</div>}
        </div>
    );
    }
