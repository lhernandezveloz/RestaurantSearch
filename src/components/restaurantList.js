import React from 'react';
import {View, Text, StyleSheet, FlatList, Image, TouchableOpacity} from 'react-native';
import {withNavigation} from 'react-navigation'

const RestaurantList = ({navigation, title, restaurants}) => {

    if(!restaurants.length){
        return null;
    };

    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                style={styles.list}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(restaurants) => restaurants.id}
                data={restaurants}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity onPress={() => {navigation.navigate('Details', {id : item.id})}}>
                            <View style={styles.container}>
                                <Image style={styles.image} source={{uri:item.image_url}} />
                                <Text style={styles.name}>{item.name}</Text>
                                <Text style={styles.info}>{item.rating} Stars, {item.review_count} Reviews</Text>
                            </View>
                        </TouchableOpacity>
                    );
                }}

            />

        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        marginLeft : 15
    },
    image : {
        width : 250,
        height : 250,
        borderRadius : 4
        
    },
    title : {
        fontSize: 18,
        fontWeight : 'bold',
        marginLeft : 15,
        marginTop : 15,
        marginBottom : 10
    },
    name : {
        marginTop : 5,
        fontSize : 17,
        fontWeight : 'bold'

    },
    info : {
        color: '#999696',
        marginTop : 5,
        fontSize : 15
    },
    list : {
        marginBottom :20
    }
});

export default withNavigation(RestaurantList);