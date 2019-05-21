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
        let upcoming,popular,nowPlaying,error;

        try{
            // const upcoming = await movieApi.upcoming();
            // const popular = await movieApi.popular();
            // const nowPlaying = await movieApi.nowPlaying();
            // console.log(upcoming,popular,nowPlaying);
            ({
                data:{result:upcoming}
            }= await movieApi.upcoming());
            ({
                data:{result:popular}
            }= await movieApi.popular());
            ({
                data:{result:nowPlaying}
            }= await movieApi.nowPlaying());
        }catch{
            //this.setState({error:"Can't get Movies."});
            error = "Can't get Movies.";

        }finally{
            this.setState({
                loading:false,
                error,
                upcoming,
                popular,
                nowPlaying

            });
        }
    }
    render(){
        const{loading,upcoming,popular,nowPlaying} =this.state;
        return (
            <MoviesPresenter 
                loading={loading} 
                popular={popular}
                nowPlaying={nowPlaying}
                upcoming={upcoming}
            />
        );
    }

}
