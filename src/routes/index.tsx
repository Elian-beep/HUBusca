import { NavigationContainer } from "@react-navigation/native";
import TabRoutes from "./tabs.routes";
import StackRoutes from "./stack.routes";

export default function Routes(){
    return (
        <NavigationContainer>
            {/* <TabRoutes /> */}
            <StackRoutes />
        </NavigationContainer>
    )
}