import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Provider, useSelector } from 'react-redux';
import LoadingOverlay from './core/components/LoadingOverlay';
import { UISelectors } from './core/state/ui/ui.selectors';
import appStore from './core/store/app.store';
import Navigation from './navigation/Navigation';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const isLoading = useSelector(UISelectors.selectIsLoading);

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
