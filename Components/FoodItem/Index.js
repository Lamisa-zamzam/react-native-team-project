import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import StyledButton from "../StyledButton";
import styles from './styles';

const FoodItem = (props) => {
    console.log(props);
    const { name, tagline, taglineCTA, image } = props.food;

    return (
        <View style={styles.foodContainer}>
            <ImageBackground
                source={image}
                style={styles.image}
            />

            <View style={styles.titles}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subtitle}>
                    {tagline}
                    {' '}
                    <Text style={styles.subtitleCTA}>
                        {taglineCTA}
                    </Text>
                </Text>
            </View>

            <View style={styles.buttonsContainer}>
                <StyledButton
                    type="primary"
                    content={"Custom Order"}
                    onPress={() => {
                        console.warn("Custom Order was pressed");
                    }}
                />

                <StyledButton
                    type="secondary"
                    content={"Existing Inventory"}
                    onPress={() => {
                        navigation.navigate('Profile', { name: 'Jane' })
                    }}
                />
            </View>

        </View>
    );
};

export default FoodItem;