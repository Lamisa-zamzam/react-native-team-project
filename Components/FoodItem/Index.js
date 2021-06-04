import React from "react";
import { View, Text, ImageBackground } from "react-native";
import StyledButton from "../StyledButton";
import styles from "./styles";

const FoodItem = (props) => {
    const { name, tagline, taglineCTA, image } = props.food;
    return (
        <View style={styles.foodContainer}>
            <ImageBackground source={image} style={styles.image} />

            <View style={styles.titles}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subtitle}>
                    {tagline}{" "}
                    <Text style={styles.subtitleCTA}>{taglineCTA}</Text>
                </Text>
            </View>

            <View style={styles.buttonsContainer}>
                <StyledButton
                    type="primary"
                    content={"Order This"}
                    onPress={() => {
                        console.warn("Woo! Your order placed successfully.");
                    }}
                />

                <StyledButton
                    type="secondary"
                    content={"Get Discount"}
                    onPress={() => {console.warn("You will get the discount soon.")}}
                />
            </View>
        </View>
    );
};

export default FoodItem;
