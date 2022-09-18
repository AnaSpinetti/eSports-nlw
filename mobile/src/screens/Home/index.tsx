import { Image, FlatList } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import logoImg from '../../assets/logo-nlw-esports.png';
import { Heading } from '../../components/Heading';
import { GameCard, GameCardProps } from '../../components/GameCard';
import { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Background } from '../../components/Background';

export function Home() {
  const [games, setGames] = useState<GameCardProps[]>([]);

  const navigation = useNavigation();

  function handleOpenGame({id, title, bannerUrl} : GameCardProps){
    navigation.navigate('game', {id, title, bannerUrl})
  }

  useEffect(() => {
    fetch('http://172.27.0.1:3333/games')
      .then(response => response.json())
      .then(data => {
        setGames(data)
      })
  }, [])

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Image source={logoImg} style={styles.logo} />

        <Heading title='Encontre seu duo!' subtitle='Selecione o game que deseja jogar' />

        <FlatList data={games} keyExtractor={data => data.id} renderItem={({ item }) => (
          <GameCard data={item} onPress={() => handleOpenGame(item)} />
        )} horizontal showsHorizontalScrollIndicator={false} />

      </SafeAreaView>
    </Background>
  );
}