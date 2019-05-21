import React from "react";
import {Text,TouchableOpacity} from "react-native";
//export default ()=> <Text>Movies</Text>;

export default ({navigation}) =>(
    <>
        <Text>
            Movies
        </Text>
        <TouchableOpacity onPress={()=>navigation.navigate("Detail")}>
            <Text>Go to Detail</Text>
        </TouchableOpacity>
    </>

);
