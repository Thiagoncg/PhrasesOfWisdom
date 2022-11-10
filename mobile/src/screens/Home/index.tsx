import { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Background } from './../../components/Background/index';
import { StatusBar } from 'react-native';

import { styles } from './styles';
import { Logo } from '../../components/Logo';
import { phrases } from '../../utils/phrases';

import api from '../../services/api';

export function Home() {

  const [index, setIndex] = useState<number>(Math.floor(Math.random() * phrases.length + 1));
  const [getPhrases, setGetPhrases ] = useState<number>();


  function changePhrases() {
    setIndex(Math.floor(Math.random() * phrases.length + 1))
  }

  const apiGetPhrases = async () => {
    try {
      const result = await api.get('http://localhost:3000/phrases/random');
      console.log(result);  

    } catch(err) {
        console.error(err);
    }
};
  

  return (
    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <View style={styles.container}>

        <Logo />
        <Text style={styles.textPhrase}> {phrases[index].frase} </Text>
        <Text style={styles.textAuthor}> {phrases[index].autor} </Text>

        <TouchableOpacity style={styles.btnPrimay} onPress={changePhrases}>
          <Text>💖</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
}