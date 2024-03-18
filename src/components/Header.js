import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Flag from "./Flag";

export default props => {
    return (
        <View style={styles.container}>
            <View style={styles.flagContainer}>
                <TouchableOpacity onPress={props.onFlagPress}
                    style={styles.flagButton}>
                    <Flag bigger />
                </TouchableOpacity>
                <Text style = {styles.flagsLeft}>= {props.flagsLeft}</Text>
            </View>
            <TouchableOpacity style = {styles.flagButton} onPress={props.onNewGame}>
                <Text style={styles.buttonLabel}>Novo jogo</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'row',
        backgroundColor: '#EEE',
        justifyContent: 'space-around',
        paddingTop: 20,
        paddingHorizontal: 20,
    },
    flagContainer: {
        flexDirection: 'row',
    },
    flagButton: {
        marginTop: 20,
        minWidth: 30,
    
    },
    flagsLeft: {
        fontSize: 30,
        fontWeight: 'bold',
        paddingTop: 20,
        marginLeft: 20,
    },
    button: {
        backgroundColor: '#999',
        padding: 5,
    },
    buttonLabel: {
        fontSize: 20,
        color: '#222',
        fontWeight: 'bold'
    }
})