import { Fragment } from 'react';
import Navbar from '../navbar';
import "./index.scss"


const Card = (props) => {

  const { movieList } = props;
  return (
    <Fragment>
      <Navbar />
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {movieList.map(i => {
          console.log(i)
          return (
            <div className="card front">
              <img src={"https://image.tmdb.org/t/p/w185/" + i.poster_path} className="card-img-top img-fluid" alt="movie-poster" />
              <div className="card-block">
                <h5 className="card-title">{i.original_title}</h5>
                <p className="card-text">{i.overview}</p>
                <p className="card-text"><small className="text-muted">{i.release_date}</small></p>
              </div>
            </div>
          )
        })}
      </div>
    </Fragment>
  );
}
export default Card;