import React, { Component } from 'react';
import {
    View,
    Text,
    ScrollView
} from 'react-native';

import api from '../../utilities/api';

export default class PostDetail extends Component {
    static navigationOptions = ({navigation}) => ({
        title: navigation.state.params.title
    });

    constructor(props){
        super(props)
        this.state = {
            post: {}
        };
    }

    render() {
        const { params } = this.props.navigation.state;
        api.getPost(params.id).then(res =>{
            this.setState({
                post: res
            });
        });
        return (
            <View>
                <Text>{this.state.post.title}</Text>
                <ScrollView>
                    <Text>
                        {this.state.post.body}
                    </Text>
                </ScrollView>
            </View>
        );
    }
}