import React, { PropTypes } from "react";
import { fnSetFavMov } from "./moviesActionCreator";
import "./movies.css";

class MoviesList extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(events, MovID) {
        console.log(2);
        fnSetFavMov(MovID.target.id);
    }
    render() {
        return (
            <div className="list-group">
                {this.props.movies.map(mov => (
                    <div key={mov.id} className="movCars">
                        <div>
                            <div className="card-img">
                                <img
                                    className="ImgClass"
                                    src={`http://image.tmdb.org/t/p/w185/${mov.poster_path}`}
                                    alt=""
                                />
                            </div>
                            <div className="movDat">
                                <div className="mdate">
                                    <span>{mov.release_date}</span>
                                </div>
                                <div className="mfav">
                                    <div
                                        id={mov.id}
                                        data-mov={mov.id}
                                        onClick={this.handleClick.bind(
                                            this,
                                            mov.id
                                        )}
                                        className="heart"
                                    />
                                    <span>{mov.vote_average}</span>
                                </div>
                            </div>
                            <div className="movTit">
                                <span>{mov.original_language}</span>
                                <h4>{mov.title}</h4>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

MoviesList.propTypes = {
    movies: PropTypes.array.isRequired
};

export default MoviesList;
