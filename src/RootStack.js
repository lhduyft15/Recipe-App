import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";

import Home from "./screens/HomeScreen";
import Detail from "./screens/DetailScreen";
import RecipeList from './screens/RecipeListScreen';
import AddRecipe from './screens/AddRecipeScreen';
import EditRecipe from './screens/EditRecipeScreen';

const StackNavigator = createStackNavigator({
    HomeScreen: {
        screen: Home,
        navigationOptions: {
            headerShown: false
        }
    },
    RecipeListScreen: {
        screen: RecipeList,
        navigationOptions: {
            headerShown: false
        }
    },
    DetailScreen: {
        screen: Detail,
        navigationOptions: {
            headerShown: false
        }
    },
    AddRecipeScreen: {
        screen: AddRecipe,
        navigationOptions: {
            headerShown: false
        }
    },
    EditRecipeScreen: {
        screen: EditRecipe,
        navigationOptions: {
            headerShown: false
        }
    }
});

export default createAppContainer(StackNavigator);