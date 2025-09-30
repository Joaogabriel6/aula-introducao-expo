import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import Atividade05 from './src/atividades/atv05';

export default function App() {
  return (
    <View style={styles.container}>
      <Atividade05 />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f00',
    // alignItems: 'center',
    // justifyContent: 'center',
    padding: 10,
  },
});