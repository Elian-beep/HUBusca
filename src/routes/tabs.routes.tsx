import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { faHome, faHistory } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

import Home from "../pages/Home";
import History from "../pages/History";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen 
                name="Home" 
                component={Home} 
                options={{ tabBarIcon: ({ color, size }) => 
                    <FontAwesomeIcon color={color} size={size} icon={ faHome } />,
                    tabBarLabel: 'Inicial' 
                }} 
            />
            <Tab.Screen 
                name="History" 
                component={History}
                options={{ tabBarIcon: ({ color, size }) => 
                    <FontAwesomeIcon color={color} size={size} icon={ faHistory } />,
                    tabBarLabel: 'Histórico' 
                }}
            />
        </Tab.Navigator>
    )
}