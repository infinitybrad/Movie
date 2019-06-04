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
        airingThisWeek:null,
        popular:null,
        airingToday:null
    };

    async componentDidMount(){
        let popular,airingThisWeek,airingToday,error;

        try{
            ({
                data:{result:popular}
            }= await tvApi.popular());
            ({
                data:{result:airingThisWeek}
            }= await tvApi.getAiringThisWeek());
            ({
                data:{result:airingToday}
            }= await tvApi.airingToday());
    
           
            
        }catch{
            //this.setState({error:"Can't get Movies."});
            error = "Can't get TV";

        }finally{
            this.setState({
                loading:false,
                error,
                popular,
                airingThisWeek,
                airingToday

            });
        }
    }
    render(){
        const{loading,popular,airingThisWeek,airingToday} =this.state;
        return( 
            <TVPresenter 
                loading={loading} 
                airingToday={airingToday}
                airingThisWeek={airingThisWeek}
                popular={popular}
            />
        );
    }

}
