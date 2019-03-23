import React, { Component } from 'react';
import { Box, Text } from 'react-native-design-utility';
import { productImgs } from '../constants/images';
import { theme } from '../constants/theme';
import { Image, StyleSheet,TouchableOpacity } from 'react-native';
import {Feather} from "@expo/vector-icons";


class ProductCard extends Component {

    state = {
        isHover: false

    }

    handlePlusPress=()=>{
        this.setState({isHover: true})
    }
    render() {
        const {isHover} = this.state;

        return (
            <Box bg="white" w={150} p="sm" position="relative" >
                <Box>
                    <Box mb="sm">
                        <Image
                            source={productImgs.apple}
                            resizeMode="contain"
                            style={styles.img}


                        />


                    </Box>
                    <Box>
                        <Text left size="sm" bold>$1.19 each</Text>
                        <Text left size="xs">Red Apple</Text>
                        <Text left size="xs" color="greyLight">$11.90 kg</Text>

                    </Box>

                </Box>
                {
                    !isHover && (

                        <TouchableOpacity style={styles.plusBtn} onPress={this.handlePlusPress}>
                        <Box position="absolute" circle={25} center style={{
                            borderColor: theme.color.green,
                            borderWidth: 1, 
                           
                            }}>
        
                            <Feather name="plus" size={15} color={theme.color.green} />
        
        
        
                        </Box>
                        </TouchableOpacity>
                    )

                }
               
                {isHover && (
                    <Box shadow={0} bg="red" w={1} position="absolute" style={{top:10,right:10,left:10,zIndex:99}}>
                        <Box>
                            <Text> Hello</Text>
                            </Box>

                    </Box>

                )}

            </Box>

        )
    }





}

const styles = StyleSheet.create({
    img: {
        width: 120,
        height: 100,
    },
    plusBtn:{
        top:10,right:5
    }
})
export default ProductCard;