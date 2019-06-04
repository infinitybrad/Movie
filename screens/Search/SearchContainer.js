import React, {Component} from "react";
import SearchPresenter from "./SearchPresenter";
import { movieApi,tvApi} from "../../api";
import MoviesContainer from "../Movies";

export default class extends Component{

    state ={
        loading : false,
        movieResults : null,
        tvResults:null,
        searchTerm:"",
        error:null
    };

    handleSearchUpdate = text =>{
        this.setState({
            searchTerm:text
        });
        //console.log(text);

    };
    
    onSubmitEditing = async () =>{
        const {searchTerm} =this.state;
        if(searchTerm !==""){
            let movieResults, tvResults, error;
            this.setState({
                loading:true
            });
            try{
                ({
                    data:{results :movieResults}
                } = await movieApi.search(searchTerm) );
                ({
                    data:{results :tvResults}
                } = await tvApi.search(searchTerm) );


            }catch{
                error = "Can't search";

            }finally{
                this.setState({
                    loading:false,
                    movieResults,
                    tvResults,
                    error
                })

            }
        }
        return;

    };

    render(){
        const{loading,movieResults,tvResults,searchTerm}=this.state;

        return(
            <SearchPresenter 
                loading={loading}
                movieResults={movieResults}
                tvResults={tvResults}
                searchTerm={searchTerm}
                handleSearchUpdate={this.handleSearchUpdate}
                onSubmitEditing={this.onSubmitEditing}
            />

        );

    }
}
