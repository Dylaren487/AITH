/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TouchableHighlight,
    AsyncStorage
} from 'react-native';

export default class game extends Component {

    constructor() {
        super();
        this.state = {
            highScore: 0,
            timeCount: 0,
            score: 0,
            playing: false,
            holes: [false, false, false, false, false, false, false, false, false]
        }
        AsyncStorage.getItem('highScore').then((value) => {
            this.setState({highScore: JSON.parse(value)})
    })
    }

    startGame() {
        this.setState({
            timeCount: timeLimit,
            playing: true,
            score: 0,
        });
        block = setInterval(() => {
                var currentHole = this.state.holes;
        currentHole[Math.floor(Math.random() * 9)] = true;
        if (!Math.floor(Math.random() * 2)) {
            currentHole = [false, false, false, false, false, false, false, false, false]
        }
        this.setState({
            holes: currentHole
        })
        if (!this.state.playing) {
            clearInterval(block)
            this.setState({
                holes: [false, false, false, false, false, false, false, false, false]
            })
        }
    }, 600);
        timer = setInterval(() => {
                this.setState({
                timeCount: this.state.timeCount - 1
            })
        if (this.state.timeCount == 0) {
            this.stopGame();
        }
    }, 1000);
    }

    stopGame() {
        clearInterval(timer)
        if (this.state.score > this.state.highScore) {
            alert("Congratulations!!\nYou set the new highscore")
        }
        this.setState({
            playing: false,
            highScore: (this.state.score > this.state.highScore) ? this.state.score : this.state.highScore
        })
        AsyncStorage.setItem('highScore', JSON.stringify(this.state.highScore))
    }

    handleTouch(holeNum) {
        if (this.state.holes[holeNum]) {
            this.setState({
                score: this.state.score + 1,
            })
            let markers = this.state.holes;
            markers[holeNum] = false;
            this.setState({holes: markers});
        }
    }

    render() {
        const {containerStyle, headerStyle, bodyStyle, footerStyle, boxStyle, scoreLabelStyle, scoreTextStyle, buttonTextStyle, columnStyle, rowStyle, blockStyle, blockTextStyle} = styles

        return (
            <View style={containerStyle}>
            <View style={headerStyle}>
            <View style={[boxStyle,{flex:2}]}>
    <Text style={scoreLabelStyle}>High score</Text>
        <Text style={scoreTextStyle}>{this.state.highScore}</Text>
        </View>
        <View style={[boxStyle,{flex:1}]}>
    <Text style={scoreLabelStyle}>Timer</Text>
            <Text style={scoreTextStyle}>{this.state.timeCount}</Text>
        </View>
        <View style={[boxStyle,{flex:2}]}>
    <Text style={scoreLabelStyle}>Score</Text>
            <Text style={scoreTextStyle}>{this.state.score}</Text>
        </View>
        </View>
        <View style={bodyStyle}>
            <View style={{flex:1}}>
    <View style={rowStyle}>
            <View style={columnStyle}>
            <TouchableHighlight underlayColor={'#cccccc'} style={blockStyle}
        onPress={() => this.handleTouch(0)}>
    <Text style={blockTextStyle}>{this.state.holes[0] ? '🐱' : ''}</Text>
        </TouchableHighlight>
        <TouchableHighlight underlayColor={'#cccccc'} style={blockStyle}
        onPress={() => this.handleTouch(3)}>
    <Text style={blockTextStyle}>{this.state.holes[3] ? '🐱' : ''}</Text>
        </TouchableHighlight>
        <TouchableHighlight underlayColor={'#cccccc'} style={blockStyle}
        onPress={() => this.handleTouch(6)}>
    <Text style={blockTextStyle}>{this.state.holes[6] ? '🐱' : ''}</Text>
        </TouchableHighlight>
        </View>
        <View style={columnStyle}>
            <TouchableHighlight underlayColor={'#cccccc'} style={blockStyle}
        onPress={() => this.handleTouch(1)}>
    <Text style={blockTextStyle}>{this.state.holes[1] ? '🐱' : ''}</Text>
        </TouchableHighlight>
        <TouchableHighlight underlayColor={'#cccccc'} style={blockStyle}
        onPress={() => this.handleTouch(4)}>
    <Text style={blockTextStyle}>{this.state.holes[4] ? '🐱' : ''}</Text>
        </TouchableHighlight>
        <TouchableHighlight underlayColor={'#cccccc'} style={blockStyle}
        onPress={() => this.handleTouch(7)}>
    <Text style={blockTextStyle}>{this.state.holes[7] ? '🐱' : ''}</Text>
        </TouchableHighlight>
        </View>
        <View style={columnStyle}>
            <TouchableHighlight underlayColor={'#cccccc'} style={blockStyle}
        onPress={() => this.handleTouch(2)}>
    <Text style={blockTextStyle}>{this.state.holes[2] ? '🐱' : ''}</Text>
        </TouchableHighlight>
        <TouchableHighlight underlayColor={'#cccccc'} style={blockStyle}
        onPress={() => this.handleTouch(5)}>
    <Text style={blockTextStyle}>{this.state.holes[5] ? '🐱' : ''}</Text>
        </TouchableHighlight>
        <TouchableHighlight underlayColor={'#cccccc'} style={blockStyle}
        onPress={() => this.handleTouch(8)}>
    <Text style={blockTextStyle}>{this.state.holes[8] ? '🐱' : ''}</Text>
        </TouchableHighlight>
        </View>
        </View>
        </View>
        </View>
        <View style={footerStyle}>
            <TouchableOpacity onPress={this.startGame.bind(this)} disabled={this.state.playing}
        style={[boxStyle,{flex:1}]}>
    <Text style={buttonTextStyle}>Start Game</Text>
        </TouchableOpacity>
        </View>
        </View>
    );
    }
}

var timeLimit = 30;

var timer = null;

styles = require('./Style');

AppRegistry.registerComponent('game', () => game);
