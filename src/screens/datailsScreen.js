import React, {useEffect, useState}from 'react';
import {Text, View, StyleSheet, FlatList, Image} from 'react-native';
import yelp from '../api/yelp';

const DetailsScreen = ({navigation}) => {

    const [restaurant, setRestaurant] = useState(null);

    const id = navigation.getParam('id');
    const getRestaurant = async (id) => {
        const response = await yelp.get(`/${id}`);
        setRestaurant(response.data);
    };
    useEffect(() => { getRestaurant(id)}, []);

    if(!restaurant){
        return null;
    }

    return(
        <View style={styles.container}>
            <FlatList
                data={restaurant.photos}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(photo) => photo}
                horizontal
                renderItem={({item}) => {
                    return <Image style={styles.image} source={{uri : item}}/>
                }}
            />
            <Text style={styles.title}>{restaurant.name}</Text>
            <Text style={styles.details}>{restaurant.is_closed ? 'Closed' : 'Open'}</Text>
            <Text style={styles.details}>{restaurant.display_phone}</Text>
            <Text style={styles.details}>{restaurant.location.address1}, {restaurant.location.city}, {restaurant.location.state} {restaurant.location.zip_code}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    image : {
        height : 200,
        width : 350,
        marginLeft :15

    },
    container : {
        marginTop: 15,
        marginBottom : 15
        
    },
    title : {
        fontSize :20,
        fontWeight : 'bold',
        marginLeft : 15,
        marginTop : 15
    },
    details : {
        fontSize : 15,
        fontWeight : '600',
        marginLeft : 15,
        marginTop : 5
    }
});

export default DetailsScreen;

