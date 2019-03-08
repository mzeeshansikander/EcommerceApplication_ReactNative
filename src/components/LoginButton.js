import React, { Component } from 'react';
import { Text, Box } from 'react-native-design-utility';
import { TouchableOpacity, Image } from 'react-native';
import {images} from '../constants/images';
import { FontAwesome} from '@expo/vector-icons'
import {theme} from '../constants/theme'

const bgColor = type => {
    switch(type){
        case 'google':
            return 'googleBlue';
        case 'facebook':
            return 'facebookBlue';
        default: 
            return 'white';
        
    }
}
const LoginButton = ({children,type,onPress}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Box
                dir="row"
                align="center"
                shadow={1}
                bg={bgColor(type)}
                w="80%"
                self="center"
                p="xs"
                radius="xs"
                mb="sm"
                >
                <Box mr="sm">
                    <Box bg="white" h={32} w={32} radius="xs" center style={{position:'relative'}}>
                        {type == 'google' && <Image source={images.googleColorIcon}/>}
                        {type == 'facebook' && <FontAwesome name="facebook" color={theme.color.facebookBlue} size={30} style={{position:'absolute',right:4,bottom:-3}} />}
                       

                    </Box>

                </Box>
                <Box>
                    <Text size="md" color="white">{children} </Text>
                </Box>
            </Box>
        </TouchableOpacity>)
}
export default LoginButton;