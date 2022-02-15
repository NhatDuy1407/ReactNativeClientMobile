import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Provider, useSelector } from 'react-redux';
import LoadingOverlay from './components/loading/LoadingOverlay';
import Navigation from './navigation/Navigation';
import { AppSelectors } from './store/state/app.selectors';
import appStore from './store/store';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const isLoading = useSelector(AppSelectors.selectIsLoading);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaProvider style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Navigation />
      {isLoading && <LoadingOverlay />}
    </SafeAreaProvider>
  );
};

const AppWrapper = () => {
  return (
    <Provider store={appStore}>
      <App />
    </Provider>
  );
};

export default AppWrapper;
