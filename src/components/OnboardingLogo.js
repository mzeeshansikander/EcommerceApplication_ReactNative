import React,{Component} from 'react';
import {Box,Text} from 'react-native-design-utility';
import {Image} from 'react-native';
import {images} from '../constants/images';


const OnboardingLogo =()=>{
    return(

        <Box center>
            <Box mb="sm">
                <Image source={images.logo} />
            </Box>
            <Text size="xl"> Me<Text size="xl" color="green">Dico</Text></Text>
            <Text size="sm"> easy medicine shopping</Text>
        </Box>
        )

}
export default OnboardingLogo;