import { StatusBar } from "expo-status-bar";
import React from "react";
import "react-native-gesture-handler";
import { StyleSheet, View } from "react-native";
import FoodsList from "./Components/FoodsList";
import Header from "./Components/Header";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import FoodDetail from "./Components/FoodDetail";

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <View style={styles.container}>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Home"
                        component={FoodsList}
                        options={{ title: "Welcome" }}
                    />
                    <Stack.Screen name="Detail" component={FoodDetail} />
                </Stack.Navigator>
                <Header />
                <FoodsList />
                <StatusBar style="auto" />
            </View>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
