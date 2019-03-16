import React, { Component } from 'react';
import { Box, Text } from 'react-native-design-utility';
import OnboardingLogo from '../components/OnboardingLogo';
import { TouchableOpacity, Alert, Animated } from 'react-native';
import LoginButton from '../components/LoginButton';
import { FacebookApi } from '../api/Facebook';
import { GoogleApi } from '../api/Google';
import { inject,observer} from 'mobx-react/native';

const BoxAnimated = Animated.createAnimatedComponent(Box);
@inject('currentUser')
class LoginScreen extends Component {
    state = {
        opacity: new Animated.Value(0),
        position: new Animated.Value(0)
    }
    componentDidMount() {
        Animated.parallel([this.positionAnim(), this.opacityAnim()])

    }
    opacityAnim = () => {
        Animated.timing(this.state.opacity, {
            toValue: 1,
            duration: 200,
            delay: 100,
        }).start()
    }
    positionAnim = () => {
        Animated.timing(this.state.position, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
        }).start()
    }
    onGooglePress = async () => {
        try {

            const token = await GoogleApi.loginAsync();
            await this.props.currentUser.login(token,'GOOGLE');
            console.log('token', token);
        } catch (error) {
            console.log('error', error)
        }
    }
    onFacebookPress = async () => {
        try {

            const token = await FacebookApi.loginAsync();
            await this.props.currentUser.login(token,'FACEBOOK');
            console.log('token', token);
        } catch (error) {
            console.log('error', error)
        }
    }
    render() {
        const { opacity } = this.state;
        const logoTranslate = this.state.position.interpolate({
            inputRange: [0, 1],
            outputRange: [150, 0]
        })
        return (
            <Box f={1} center bg="white">
                <BoxAnimated f={1} style={{
                    transform: [{
                        translateY: logoTranslate,
                    }]
                }}>
                    <Box f={1} center>
                        <OnboardingLogo />
                    </Box>
                </BoxAnimated>

                <BoxAnimated f={0.9} w={1} style={{ opacity }}>
                    <LoginButton onPress={this.onGooglePress} type="google"> Continue with Google </LoginButton>
                    <LoginButton onPress={this.onFacebookPress} type="facebook"> Continue with Facebook </LoginButton>

                </BoxAnimated>


            </Box>

        );
    }
}
export default LoginScreen;