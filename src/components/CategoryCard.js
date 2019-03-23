import React,{PureComponent} from 'react';
import {Box,Text} from 'react-native-design-utility';
import {Image,TouchableOpacity,StyleSheet} from 'react-native'
import { NavigationService } from '../api/NavigationService';



class CategoryCard extends PureComponent{
    state={}

    handlePress=()=>{

        NavigationService.navigate('Category',{name: this.props.title})
    };

    render(){
        const {title,image} = this.props;

        return(
            <TouchableOpacity onPress={this.handlePress} style={{flex:1}}>
            <Box  center f={1}>
            {image && (
            <Box center mb="sm">
                <Image source={image} /> 
            </Box>
            )}
            <Box center>
                <Text size="sm" center capitalizeEach color="greyDarker">
                    {title}
                </Text>
                </Box>

            </Box>
            </TouchableOpacity>


        );
    }
}
export default CategoryCard;