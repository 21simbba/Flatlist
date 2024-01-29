import { React, useState } from 'react';
import { StyleSheet, View, TextInput, Button, } from 'react-native';


export default function Search({executeSearch}){
const [search, setSearch] = useState('');



return(
    <View style={StyleSheet.searchBox}>
    <TextInput
    value={search}
    onChangeText={text => setSearch(text)}
    placeholder='Search...'
    returnKeyType='search'
    onSubmitEditing={() => executeSearch(search)}
    />    
    </View>
)
}

const styles = StyleSheet.create({
    searchBox: {
        marginbottom: 20,
        borderColor: '#333',
        borderwidth: 1,
        padding: 5,
    }
})