import {useState, useEffect} from 'react';
import yelp from '../api/yelp';

export default () => {

    const [restaurants, setRestaurants] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    
    const getRestaurants = async searchText => {
        try{    
            const response = await yelp.get('/search', {
                params : {
                    limit : 50,
                    term : searchText,
                    location : 'Houston'
                }
            });
    
            setRestaurants(response.data.businesses)
            setErrorMessage('')
        }
        catch(e){
            setErrorMessage('Something went wrong :(')
        };
    };


    
    
    useEffect(() => {
        getRestaurants('pasta');
    }, []);

    return [getRestaurants, restaurants, errorMessage];
};
