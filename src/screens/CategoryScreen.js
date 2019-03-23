import React, { Component } from 'react';
import { Box, Text } from 'react-native-design-utility';
import ProductCard from './ProductCard';


class CategoryScreen extends Component {

    state = {}
    static navigationOptions = ({navigation}) =>(
        {
            title: navigation.getParam('name','Medico'),
        }
    );

    
    render(){

        return(
           <Box>
               <ProductCard />
           </Box>

        )
    }

}
export default CategoryScreen;