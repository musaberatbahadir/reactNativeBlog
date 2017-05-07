/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import Posts from './app/containers/Posts';
import PostDetail from './app/containers/PostDetail';
import { StackNavigator } from 'react-navigation';

const App = StackNavigator({
    Post: { screen: Posts },
    PostDetail: { screen: PostDetail },
},{
    initialRouteName: 'Post'
});


AppRegistry.registerComponent('reactTries1', () => App);
