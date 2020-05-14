import React from 'react';
import {Text, TextInput, View, StyleSheet} from 'react-native';
import {Feather} from '@expo/vector-icons';


const SearchBar = ({searchText, onSearchChange, onSummited}) => {
    return (
        <View style={style.barStyles}>
            <Feather name="search" style={style.iconStyle} />
            <TextInput 
                autoCapitalize = "none"
                autoCorrect = {false}
                style = {style.inputStyles} 
                placeholder = "Search"
                value = {searchText}
                onChangeText = {onSearchChange}
                onEndEditing = {onSummited}
            />
        </View>
    )
};

const style = StyleSheet.create({
    barStyles: {
        backgroundColor : '#e6e3e3',
        height : 50,
        borderRadius : 10,
        marginTop : 15,
        marginHorizontal: 15,
        flexDirection : 'row',
        marginBottom: 10
    },
    inputStyles : {
        flex : 1,
        fontSize : 18
    },
    iconStyle : {
        fontSize: 35,
        alignSelf : 'center',
        marginHorizontal : 10
    }
});

export default SearchBar;