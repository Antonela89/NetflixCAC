import React from "react";
import Banner from "../../../common/components/banner/Banner";
import UseFetch from "../../../common/hooks/UseFetch";
import { getPopularMovies } from "../service/getPopular.js";
import Slider from "../../../common/components/slider/Slider";
import Title from "../../../common/components/title/Title";
import { CONSTANTS } from "../../../utils/constants";

const Movies = () => {
    const {
        data: movies1,
        // error: error1,
        isLoading: isLoading1,
    } = UseFetch(getPopularMovies);

    const {
        data: movies2,
        // error: error2,
        isLoading: isLoading2,
    } = UseFetch(() => getPopularMovies(2));

    return (
        <>
        {isLoading1 || isLoading2 ? (
            <div>Cargando</div>
        ) : (
        <>
            <Banner data={movies1[0]} />
            <Title text={CONSTANTS.MOVIES_VIEW.title1} />
            <Slider entities={movies1} />
            <Title text={CONSTANTS.MOVIES_VIEW.title2} />
            <Slider entities={movies2} />
        </>
        )}
        </>
    );
};

export default Movies;
