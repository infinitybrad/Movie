import React,{Component} from "react";
import TVPresenter from "./TVPresenter";
import {tvApi} from "../../api";


// export const tvApi ={
//     topRated:()=>api.get("tv/top_rated"),
//     popular:()=>api.get("tv/popular"),
//     airingToday:()=>api.get("tv/airing_today"),
//     showDetail:id=>
//         api.get(`tv/${id}`,{
//             params:{
//                 append_to_response:"videos"
//             }
//         }),
//     search:term=>
//         api.get("search/tv",{
//             params:{
//                 query:encodeURIComponent(term)
//             }
//         })

// };


export default class extends Component{

    state = {
        loading:true,
        topRated:null,
        popular:null,
        airingToday:null,
        error:null
    };

    async componentDidMount(){
        try{
    
           
            
        }catch{
            this.setState({error:"Can't get Movies."});

        }finally{
            this.setState({loading:false});
        }
    }
    render(){
        const{loading} =this.state;
        return <TVPresenter loading={loading} />;
    }

}
