import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    TouchableHighlight
} from 'react-native';

import api from '../../utilities/api';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    postTitle:{
        fontSize: 20
    }
});

export default class reactTries1 extends Component {
    static navigationOptions = {
        title: 'Posts'
    };

    constructor(props) {
        super(props);
        this.renderRow = this.renderRow.bind(this);
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            posts: [],
            ds: ds,
            dataSource: ds.cloneWithRows([])
        };
    }

    componentWillMount() {
        api.getPosts().then((res) => {
            this.setState({
                dataSource: this.state.ds.cloneWithRows(res)
            });
        });
    }

    renderRow(rowData: object) {
        const { navigate } = this.props.navigation;
        return (
            <TouchableHighlight onPress={() => navigate('PostDetail',{ id: rowData.id, title: rowData.title})}>
                <Text style={styles.postTitle}>{rowData.title}</Text>
            </TouchableHighlight>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <ListView renderRow={this.renderRow}
                    enableEmptySections={true}
                    dataSource={this.state.dataSource} />
            </View>
        );
    }
}