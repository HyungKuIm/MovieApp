import React, {useContext} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { UserContext } from "~/Context/User";
import Loading from "~/Screens/Loading";

import Login from "~/Screens/Login";
import MovieHome from "~/Screens/MovieHome";
import MovieDetail from "~/Screens/MovieDetail";

const Stack = createStackNavigator();