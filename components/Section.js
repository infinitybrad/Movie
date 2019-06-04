import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import MovieItem from "./MovieItem";


const Container =styled.View`
    margin-vertical:20px;
`;

const Title =styled.Text`
    color:white;
    font-weight: 600;
    padding-left:20px;
    margin-bottom:15px;
`;

const ScrollView = styled.ScrollView`
    padding-left: 20px;
`;



const Section =({title,children})=>(
    <Container>
        <Title>{title}</Title>
        {/* <ScrollView horizontal>
            {movies
                .filter(movie=>movie.poster_path !== null)
                .map(movie=>
                    <MovieItem 
                        key ={movie.id}
                        id ={movie.id}
                        posterPhoto={movie.poster_path}
                        title ={movie.title}
                        voteAvg ={movie.vote_average}
                    />
                )
            }

        </ScrollView> */}
        <ScrollView horizontal>{children}</ScrollView>
    </Container>
);

Section.propTypes ={
    title:PropTypes.string.isRequired

};

export default Section;