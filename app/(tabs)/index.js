import React, {Component, useState} from 'react';
import {Text, TextInput, View, StyleSheet} from 'react-native';
import Botoes from './Botoes';

const style = StyleSheet.create ({
  container:{
    flex: 1,
    backgroundColor: '#0',
    padding: 20,
    justifyContent: 'center'
  },
  input:{
    fontSize: 28,
    color: '#000000',
  },
  botao:{
    backgroundColor: '#bbbbbb',
    borderRadius: 20,
    width: 70,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center'
  },
  resultado:{
    fontSize: 24,
    color: '#4',
    marginTop: 10
  },
  linha:{
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 5
  },
  teclado:{
    justifyContent:'center'
  },

  fundo:{
    backgroundColor: '#80',
    borderWidth: 3,
    padding: 20,
    marginBottom: 20,
    height: 120,
    justifyContent: 'center'
  },

});

export default function index(){
  const [input, setInput] = useState('');
  const [resultado, setResultado] = useState('');

  const botoes =[
    ['C', 'x^y','/', '<-'],
    ['7', '8','9', 'X'],
    ['4', '5','6', '-'],
    ['1', '2','3', '+'],
    ['=', '0',',', '=']
  ];

  const handlePress = (valor) => {

    if (valor === 'C') {
      setInput('');
      setResultado('');
    } 
    
    else if (valor === "<") {
      setInput(input.slice(0,-1));
    } 
    
    else if (valor === '=') {

      try{
        const traduzir = input
        .replace(/X/g, '*')
        .replace(/,/g, '.')
        .replace(/\^/g, '**')

        const result = eval(traduzir);
        setResultado(result);

      } catch (error){
        setResultado('erro');
      }
    }
    else if (valor == 'x^y') {
      setInput(input + '^')
    } else{
      setInput(input+valor);
    }
  };

  return(
    <View style={style.container}>
      <View style={style.fundo}>
        <Text style={style.input}>{input}</Text>
        <Text style={style.resultado}>{resultado}</Text>
      </View>

      <View style={style.teclado}>
        {botoes.map((linha, i) => (
        <View key={i} style={style.linha}>
          {linha.map((btn, j) => (
            <Botoes 
              key={j} 
              valor={btn} 
              clicar={handlePress}>     
            </Botoes>
          ))}
        </View>
      ))}
      </View>
    </View>
  )
}
