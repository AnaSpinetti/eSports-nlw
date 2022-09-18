import { View, Image, FlatList } from 'react-native';
import { styles } from './styles';

import logoImg from '../../assets/logo-nlw-esports.png';
import { Heading } from '../../components/Heading';
import { GameCard } from '../../components/GameCard';

export function Home() {
  return (
    <View style={styles.container}>
      <Image source={logoImg} style={styles.logo} />

      <Heading title='Encontre seu duo!' subtitle='Selecione o game que deseja jogar' />
      
      <FlatList data={data} keyExtractor={data => data.id} renderItem={({item}) => (
      <GameCard data={item} />
      )} horizontal showsHorizontalScrollIndicator={false} />

    </View>
  );
}