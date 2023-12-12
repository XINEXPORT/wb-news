import { useSelector, useDispatch} from 'react-redux'
import { useEffect } from "react";
import { requestArticles }  from '../../reducers/redditReducer.js';
import Card from '../shared/Card/Card.jsx';
import Loading from '../shared/Loading/Loading.jsx';

export default function Reddit() {
  const articles = useSelector((state) => state.reddit.article);
  const loading = useSelector((state) => state.reddit.loading);
  const dispatch = useDispatch()


useEffect(()=>{dispatch(requestArticles)}, [])

  const articleCards = articles.map((article) => <Card key={article.id} article={article} />);

return (
  <div className="news-container">
      <img className='logo' src="../../assets/redditLogo.png" alt="" />
      {loading ? <Loading /> : <div>{articleCards}</div>}
      </div>
  );
}

