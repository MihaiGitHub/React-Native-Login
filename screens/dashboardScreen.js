import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

class DashboardScreen extends React.Component {

    doLogout(){
        AsyncStorage.removeItem("token")
            .then(res => {
                this.props.navigation.navigate('Auth');
            });
    }

    render(){
        return (
            <View style={styles.container}>
                <View style={styles.dashboardWrapper}>
                    <Text style={styles.userText}>Hey user</Text>
                    <TouchableOpacity style={styles.logoutBtn}
                        onPress={() => this.doLogout()}>
                        <Text style={styles.logoutBtnText}>Logout</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default DashboardScreen;

const styles = StyleSheet.create({
    container: {
        height: "100%",
        alignItems: "center",
        justifyContent: "center"
    },
    dashboardWrapper: {
        textAlign: "center"
    },
    userText: {
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 10
    },
    logoutBtn: {
        backgroundColor: "red",
        paddingVertical: 10,
        width: 100,
        alignSelf: "center"
    },
    logoutBtnText: {
        color: "#fff",
        textAlign: "center",
        fontWeight: "bold"
    }
})