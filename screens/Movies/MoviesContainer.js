import React,{Component} from "react";
import MoviesPresenter from "./MoviesPresenter";
import {movieApi} from "../../api";

export default class extends Component{

    state = {
        loading:true,
        upcoming:null,
        popular:null,
        nowPlaying:null,
        error:null
    };

    async componentDidMount(){
        try{
            const upcoming = await movieApi.upcoming();
            const popular = await movieApi.popular();
            const nowPlaying = await movieApi.nowPlaying();
            console.log(upcoming,popular,nowPlaying);
            
        }catch{
            this.setState({error:"Can't get Movies."});

        }finally{
            this.setState({loading:false});
        }
    }
    render(){
        const{loading} =this.state;
        return <MoviesPresenter loading={loading} />;
    }

}
