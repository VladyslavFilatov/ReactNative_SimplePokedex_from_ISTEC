import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import styles from './CSS/styles';
import * as pokemonList from './JSONdata/pokemonList.json';

export default function App() {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.boxTitle}>
        <Text style={styles.textTitle}>Pokedex</Text>
      </View>
      {pokemonList.pokemon.map(item => (
        <View key={item.id} style={styles.scrollView}>
          <TouchableOpacity
            onPress={() => {
              ToastAndroid.show(
                'This pokemon type is: ' + item.type,
                ToastAndroid.SHORT,
              );
            }}
            style={styles.scrollItem}>
            <Image style={styles.itemImages} source={{uri: item.image}} />
            <Text style={styles.itemText}>{item.name}</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
}
