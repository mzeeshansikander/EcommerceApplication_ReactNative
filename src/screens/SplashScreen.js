import React,{Component} from 'react';
import {Box,Text} from 'react-native-design-utility';
import {Image} from 'react-native';

import {images} from '../constants/images'
import OnboardingLogo from '../components/OnboardingLogo';
class SplashScreen extends Component{
    state={

    }
    componentDidMount(){
        this.checkAuth()
    }
    checkAuth = ()=>{
       setTimeout(()=>{
             this.props.navigation.navigate('Auth');
        },2000)
    };
    render(){
        return(
            <Box f={1} center>
               <OnboardingLogo />
            </Box>

        );
    }
}
export default SplashScreen;