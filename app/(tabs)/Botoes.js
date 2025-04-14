import React, { Component } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const style = StyleSheet.create({
    botao:{
        backgroundColor: '#b',
        borderRadius: 20,
        width: 70,
        height: 70,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textoBotao:{
        fontSize:22,
        color: '#0',
        fontWeight:"bold"
    }
});


export default class Botoes extends Component {
    render(){
        const {valor, clicar} = this.props;

        return(
            <TouchableOpacity 
                style={style.botao}
                onPress={() => clicar(valor)}
            >
            <Text style={style.textoBotao}>{valor}</Text>
            </TouchableOpacity>
        );
    }

}


