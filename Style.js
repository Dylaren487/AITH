/**
 * Created by Admin on 7/21/2017.
 */
'use strict';

var React = require('react-native');

var {StyleSheet} = React;

module.exports = StyleSheet.create({
    containerStyle: {
        flexDirection: 'column',
        flex: 1,
    },
    boxStyle:{
        alignSelf: 'center',
        borderRadius: 20,
        borderColor: '#999999',
        backgroundColor: '#fff',
        borderWidth: 0.5,
        marginLeft: 10,
        marginRight: 10,
    },
    headerStyle:{
        flexDirection: 'row',
        flex: 4,
        backgroundColor: '#cccccc',
    },
    scoreLabelStyle:{
        alignSelf: 'center',
        fontSize: 10
    },
    scoreTextStyle:{
        alignSelf: 'center',
        fontSize: 20,
        marginBottom: 10
    },
    bodyStyle:{
        flexDirection: 'row',
        flex: 25,
        backgroundColor: '#eeeeee'
    },
    columnStyle:{
        flexDirection: 'column',
        flex:1
    },
    rowStyle:{
        flexDirection: 'row',
        flex:1
    },
    blockStyle:{
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#ddd',
        margin: 10,
        flex: 1,
        height: null,
        width: null,
        backgroundColor: '#ffffff'
    },
    blockTextStyle:{
        fontSize: 80,
        alignSelf: 'center',
        justifyContent: 'center'
    },
    footerStyle:{
        flexDirection: 'row',
        flex: 3,
        backgroundColor: '#cccccc',
    },
    buttonTextStyle:{
        alignSelf: 'center',
        fontSize: 20,
        marginTop: 8,
        marginBottom: 8
    }
});