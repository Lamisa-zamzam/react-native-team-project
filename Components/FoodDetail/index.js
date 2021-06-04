import React from "react";
import { View, FlatList, Dimensions } from "react-native";
import styles from "./styles";
import foods from "./Foods";
import FoodItem from "../FoodItem/Index";

const FoodDetail = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={foods}
                renderItem={({ item }) => <FoodItem food={item} />}
                showsVerticalScrollIndicator={false}
                snapToAlignment={"start"}
                decelerationRate={"fast"}
                snapToInterval={Dimensions.get("window").height}
            />
        </View>
    );
};

export default FoodDetail;
