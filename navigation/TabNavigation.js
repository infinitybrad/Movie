import React from "react";
import {Platform} from "react-native";
import {createBottomTabNavigator,createAppContainer,createStackNavigator} from "react-navigation";
import MovieScreen from "../screens/Movies/index";
import TVScreen from "../screens/TV/index";
import SearchScreen from "../screens/Search";
import {BG_COLOR} from "../constants/Colors";
import TabBarIcon from "../components/TabBarIcon";
import {createStack} from "./config";

const TabNavigation = createBottomTabNavigator(

    {
        Movie: {
            screen: createStack(MovieScreen,"Movies"),
            navigationOptions:{
                tabBarIcon:({focused}) =>(
                    <TabBarIcon 
                        focused ={focused}
                        name = {Platform.OS === "ios" ? "ios-film" : "md-film"}
                    />
                )
            }

        },
        TV: {
            screen : createStack(TVScreen,"TV"),
            navigationOptions:{
                tabBarIcon:({focused}) =>(
                    <TabBarIcon 
                        focused={focused}
                        name = {Platform.OS === "ios" ? "ios-tv" : "md-tv"}
                    />
                )
            }

        },
        Search:{
            screen :createStack(SearchScreen,"Search"),
            navigationOptions:{
                tabBarIcon:({focused})  =>(
                    <TabBarIcon 
                        focused={focused}
                        name={Platform.OS === "ios" ? "ios-search":"md-search"}
                    />
                )
            }
        }
    },
    {
        tabBarOptions:{
            showLabel:true,
            style:{
                backgroundColor:BG_COLOR
            }
        }
    }


);

export default createAppContainer(TabNavigation);