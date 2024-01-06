import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Profile from "../pages/Profile";
import TabRoutes from "./tabs.routes";

const Stack = createNativeStackNavigator();

export default function StackRoutes(){
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen 
                name="home"
                component={TabRoutes}
            />
            <Stack.Screen 
                name="profile"
                component={Profile}
            />
        </Stack.Navigator>
    )
}