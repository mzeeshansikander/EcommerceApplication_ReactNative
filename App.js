import React from 'react';
import {ActivityIndicator} from 'react-native'
import {UtilityThemeProvider,Box} from 'react-native-design-utility';
import {Provider} from 'mobx-react/native';
import Navigation from './src/screens';
import {images,tabBarIcons} from './src/constants/images';
import {cacheImages} from './src/utils/cacheimage';
import {theme} from './src/constants/theme';
import {store} from './src/models';

export default class App extends React.Component {
  state={
    isReady: false
  }
  componentDidMount(){
    console.disableYellowBox = true;
    this.cacheAssets();
  }
  cacheAssets = async()=>{
    const imageAssets = cacheImages([
      ...Object.values(images), 
      ...Object.values(tabBarIcons.active),
      ...Object.values(tabBarIcons.inactive)
    ]
      );

    await Promise.all([...imageAssets])

    this.setState({isReady: true})
  
  }
  render() {
    if(!this.state.isReady){
      return(
        <Box f={1} center bg="white">
          <ActivityIndicator size="large" />
        </Box>
      );
    }
    return (
      <Provider {...store}>
      <UtilityThemeProvider theme={theme}>
      <Navigation />
      </UtilityThemeProvider>
      </Provider>
    );
  }
}
