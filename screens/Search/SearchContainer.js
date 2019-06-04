import React, {Component} from "react";
import SearchPresenter from "./SearchPresenter";

export default class extends Component{

    state ={
        loading : false,
        movieResults : null,
        tvResults:null,
        searchTerm:""
    };

    handleSearchUpdate = text =>{
        this.setState({
            searchTerm:text
        });
        //console.log(text);

    };
    
    onSubmitEditing = () =>{
        const {searchTerm} =this.state;
        if(searchTerm !==""){
            alert("Searching");
            return;
        }

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
