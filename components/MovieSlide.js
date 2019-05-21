import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const MoviesSlide =({

    posterPhoto,
    backgroundPhoto,
    title,
    voteAvg,
    overview
})=>null;

MoviesSlide.propTypes ={

    id: PropTypes.number.isRequired,
    posterPhoto:PropTypes.string.isRequired,
    backgroundPhoto:PropTypes.string.isRequired,
    title:PropTypes.shape.isRequired,
    voteAvg:PropTypes.number.isRequired,
    overview:PropTypes.string.isRequired

};

export default MoviesSlide;