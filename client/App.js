import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import HomeScreen from './screens/HomeScreen';
import RestaurantScreen from './screens/RestaurantScreen';
import CartScreen from './screens/CartScreen';
import PreparingOrderScreen from './screens/PreparingOrderScreen'
import DeliveryScreen from './screens/DeliveryScreen';

import { store } from './store'
import { Provider } from 'react-redux'

export default function App() {
  return (
  <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
      }}
      >
          <Stack.Screen name='Home' component={HomeScreen}/>
          <Stack.Screen name='Restaurant' component={RestaurantScreen}/>
          <Stack.Screen name='Cart' options={{ presentation: 'modal' }} mode='modal' component={CartScreen}/>
          <Stack.Screen name='PreparingOrder' options={{ presentation: 'fullScreenModal' }} component={PreparingOrderScreen}/>
          <Stack.Screen name="Delivery" options={{ presentation: 'fullScreenModal', headerShown: false }} component={DeliveryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>
  );
}

