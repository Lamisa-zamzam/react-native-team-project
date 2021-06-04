import React from "react";
import { View, FlatList, Dimensions } from "react-native";
import styles from "./styles";
import foods from "./Foods";
import FoodItem from "../FoodItem/Index";
import StyledButton from "../StyledButton";

const FoodsList = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={foods}
                renderItem={({ item }) => (
                    <FoodItem food={item} key={item.id} />
                )}
                showsVerticalScrollIndicator={false}
                snapToAlignment={"start"}
                decelerationRate={"fast"}
                snapToInterval={Dimensions.get("window").height}
            />
        </View>
    );
};

export default FoodsList;
