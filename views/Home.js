import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Image,
  StatusBar,
} from 'react-native';

const Home = () => {
  const [img, setImg] = useState(null);
  const url = 'https://picsum.photos/v2/list';
  useEffect(() => {
    const getimg = () => {
      fetch(url)
        .then(res => res.json())
        .then(data => setImg(data))
        .catch(e => console.log(e));
    };
    getimg();
  }, [img]);

  const renderItem = ({item}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.author}</Text>
      <Image
        style={{width: '100%', height: 150}}
        source={{uri: item.download_url}}
      />
    </View>
  );
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
      }}>
      <Text>Home. Hello world!!</Text>

      <SafeAreaView style={styles.container}>
        <FlatList
          data={img}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 2,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 24,
  },
});

export default Home;
