import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

class AuthLoadingScreen extends React.Component {

    constructor(){
        super();

        this.checkToken();
    }

    checkToken = async () => {
        const token = await AsyncStorage.getItem("token");

        if(token){
            this.props.navigation.navigate("App");
        } else {
            this.props.navigation.navigate("Auth");
        }
    }

    render(){
        return (
            <View style={styles.container}>
                <ActivityIndicator />
            </View>
        );
    }
}

export default AuthLoadingScreen;

const styles = StyleSheet.create({
    container: {
        height: "100%",
        alignItems: "center",
        justifyContent: "center"
    }
})