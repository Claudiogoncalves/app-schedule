import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";
import { useAuth } from "../hooks/auth";
import { Register } from "../screens/Register";
import { Login } from "../screens/Login";

export function Routes() {
  const { user } = useAuth();
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Authenticate"
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Authenticate" component={user.id ? AppRoutes : AuthRoutes} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />

      </Stack.Navigator>
      {/* {user.id ? <AppRoutes /> : <AuthRoutes />} */}
    </NavigationContainer>
  )
}