import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

class LoginScreen extends React.Component {
    state = {
        username: "",
        password: "",
        loading: false
    }

    onChangeHandle(state, value){
        this.setState({
            [state]: value
        });
    }

    doLogin(){
        // "email": "eve.holt@reqres.in",
        // "password": "cityslicka"
        const { username, password } = this.state;
        
        if(username && password){
            const req = {
                "email": username,
                "password": password
            }
    
            this.setState({
                loading: true
            });
            
            axios.post("https://reqres.in/api/login", req)
                .then(res => {

                    this.setState({
                        loading: false
                    });

                    AsyncStorage.setItem("token", res.data.token)
                        .then(res => {
                            this.props.navigation.navigate('App');
                        });
                },
                err => {

                    this.setState({
                        loading: false
                    });
    
                    alert("Username and password is wrong");
                });
        } else {
            alert("Enter username & password")
        }
    }

    render(){
        const { username, password, loading } = this.state;

        return (
            <View style={styles.container}>
                <View style={styles.formWrapper}>
                    <Text style={styles.welcomeText}>Welcome back user</Text>
                    <View style={styles.formRow}>
                        <TextInput 
                            style={styles.textInput}
                            placeholder="Enter username"
                            placeholderTextColor="#333"
                            value={username}
                            onChangeText={(value) => this.onChangeHandle('username', value)}
                        />
                    </View>
                    <View style={styles.formRow}>
                        <TextInput 
                            style={styles.textInput}
                            placeholder="Enter password"
                            placeholderTextColor="#333"
                            secureTextEntry={true}
                            value={password}
                            onChangeText={(value) => this.onChangeHandle('password', value)}
                        />
                    </View>
                    <TouchableOpacity 
                        activeOpacity={0.8}
                        style={{
                            ...styles.signinBtn,
                            backgroundColor: loading ? "#ddd" : "blue"
                        }}
                        onPress={() => this.doLogin()}
                        disabled={loading}>
                            <Text style={styles.signinText}>
                                {loading ? "Loading..." : "Signin"}
                            </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        height: "100%",
        alignItems: "center",
        justifyContent: "center"
    },
    formWrapper: {
        width: "80%"
    },
    formRow: {
        marginBottom: 10
    },
    textInput: {
        backgroundColor: "#ddd",
        height: 40,
        paddingHorizontal: 10,
        color: "#333"
    },
    welcomeText: {
        textAlign: "center",
        marginBottom: 30, 
        fontSize: 24,
        fontWeight: "bold"
    },
    signinBtn: {
        backgroundColor: "blue",
        paddingVertical: 10
    },
    signinText: {
        textAlign: "center",
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold"
    }
})