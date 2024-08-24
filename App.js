import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-web';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.containerA}><Text>A</Text></View>
      <View style={styles.containerB}>
        <View style={styles.containerBi}><Text>B</Text></View>
        <View style={styles.containerBi}><Text>C</Text></View>
        <View style={styles.containerBi}><Text>D</Text></View>
      </View>
      <View style={styles.containerE}>
        <View style={styles.containerEi}><Text>E</Text></View>
        <View style={styles.containerEi}><Text>F</Text></View>
        <View style={styles.containerEi}><Text>G</Text></View>
      </View>
      <View style={styles.containerD}><Text>H</Text></View>
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  containerA: {
    backgroundColor: 'coral',
    alignItems: 'center',
    justifyContent: 'center',
    with: '100%',
    height: 200,
    margin: 20,
  },

  containerB: {
    flexDirection: 'row',
    marginBottom: 10
  },

  containerBi: {
    flex: 1,
    backgroundColor: 'coral',
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    margin: 20
  },

  containerE: {
    flexDirection: 'row',
    marginBottom: 10
  },

  containerEi: {
    flex: 1,
    backgroundColor: 'coral',
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    margin: 20
  },

  containerD: {
    backgroundColor: 'coral',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    height: 350
  }

});
