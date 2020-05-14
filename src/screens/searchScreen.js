import React, {useState} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import SearchBar from '../components/searchBar';
import RestaurantList from '../components/restaurantList';
import useRestaurants from '../hooks/useRestaurants';


const SearchScreen = () => {
    
    const [searchText, setSearchText] = useState('');
    const [getRestaurants, restaurants, errorMessage] = useRestaurants();

    const filterData = (price) =>{

        // price can be $ || $$ || $$$
        return restaurants.filter((item) => {
            return item.price === price;
        });
    };

    return (
        <>
            <SearchBar 
                searchText={searchText} 
                onSearchChange={setSearchText}
                onSummited = {() => getRestaurants(searchText)}
                />
            {
                errorMessage ? <Text>{errorMessage}</Text> : null
            }
            <ScrollView>
                <RestaurantList
                    title="Cost Effective" 
                    restaurants={filterData('$')}
                />
                <RestaurantList
                    title="Bit Pricer"
                    restaurants={filterData('$$')}
                />
                <RestaurantList 
                    title="Big Spender"
                    restaurants={filterData('$$$')}
                />
            </ScrollView>
        
        </>
    );
};

const style = StyleSheet.create({

});

export default SearchScreen;