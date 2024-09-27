import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import React from 'react';
import { NavigationProp } from '@react-navigation/native';

interface RouterProps {
  navigation: NavigationProp<any, any>;
}

const HomePage = ({ navigation }: RouterProps) => {

  const openPretest = () => {
    const url = 'https://ci-redcap.hs.uci.edu/surveys/?s=9MTR98DWKDCYA78W';
    Linking.openURL(url).catch((err) => console.error("Couldn't load page", err));
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity onPress={openPretest} style={styles.btn}>
            <Text style={styles.btnText}>Start here: Pretest</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Instructions')} style = {styles.btn}> 
            <Text style={styles.btnText}>Preenclampsia Education</Text> 
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { navigation.navigate('support'); }} style={styles.btn}>
        <Text style={styles.btnText}>Support</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    width: "80%",
    backgroundColor: "#ff6347",
    borderRadius: 25,
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
  btnText: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
  },
});
