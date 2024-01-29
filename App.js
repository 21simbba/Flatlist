import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, style, View, styles, SafeAreaView, FlatList,  } from 'react-native';
import {DATA} from './Datas';
import Row from './components/Row';
import Search from './components/Search';
import { useEffect, useState } from 'react';

export default function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(DATA);
  }, []);
  
  const renderItem = ({item}) => (
    <Text key={item.id}>{item.lastname}</Text>
  )

  const executeSearch = (search) => {
    const searchArray = DATA.filter((item) => item.lastname.startsWith(search));
    setItems(searchArray);
}
  return (
    <SafeAreaView >
      <Search executeSearch={executeSearch} />
      <FlatList 
      data={items}
      renderItem={({item}) => (
        <Row person={item}/>
      )}
      />
    </SafeAreaView>
  );
}

const renderItem = ({item}) => {
  return( <Text>{item.lastname}</Text>);
}


