import React from "react";
import { View, FlatList, Dimensions, Text } from "react-native";
import styles from "./styles";

const FoodDetail = () => {
    return (
        <View style={styles.container}>
            <Text>Hello</Text>
            {/* <FlatList
                data={foods}
                renderItem={({ item }) => <FoodItem food={item} />}
                showsVerticalScrollIndicator={false}
                snapToAlignment={"start"}
                decelerationRate={"fast"}
                snapToInterval={Dimensions.get("window").height}
            /> */}
        </View>
    );
};

export default FoodDetail;
