import React from "react";
import {Text}from "react-native";
import PropTypes from "prop-types";
import Loader from "../../components/Loader";

import styled from "styled-components";
import MovieSlider from "../../components/MovieSlider";
import {BG_COLOR} from "../../constants/Colors";
import Section from "../../components/Section";
import MovieItem from "../../components/MovieItem";



const Container = styled.ScrollView `
    background-color:${BG_COLOR};
`;


const MoviesPresenter =({loading,upcoming,popular,nowPlaying}) =>
    loading ? <Loader /> :(
        <Container>
            {nowPlaying ? <MovieSlider movies={nowPlaying}/>:null}
            {upcoming ? (
                <Section title ="Upcoming Movies">
                    {upcoming
                        .filter(movie=>movie.poster_path !==null)
                        .map(movie =>(
                            <MovieItem 
                                key = {movie.id}
                                posterPhoto ={movie.poster_path}
                                voteAvg ={movie.vote_average}
                                id ={movie.id}
                                title={movie.title}
                            />
                        ))    
                    }
                </Section>
            ) :null}
            {popular ? (
                <Section title ="Popular Movies" horizontal={false} >
                    {upcoming
                        .filter(movie => movie.poster_path !==null)
                        .map(movie =>(
                            <MovieItem 
                                key = {movie.id}
                                posterPhoto ={movie.poster_path}
                                voteAvg ={movie.vote_average}
                                id ={movie.id}
                                title={movie.title}
                                overview={movie.overview}
                                horizontal={true}
                            />
                        ))    
                    }
                </Section>
            ) :null}
        </Container>

    );

MoviesPresenter.protoTypes ={
    loading:PropTypes.bool.isRequired,
    upcoming:PropTypes.array,
    popular:PropTypes.array,
    nowPlaying:PropTypes.array
};

export default MoviesPresenter;
