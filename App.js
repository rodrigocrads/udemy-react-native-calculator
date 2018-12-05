/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Button from './src/components/Button';
import Display from './src/components/Display';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default class App extends Component {
  state = {
    displayValue: '0'
  }

  addDigit = n => {
    this.setState({ displayValue: n })
  }

  clearMemory = () => {
    this.setState({ displayValue: '0' })
  }

  setOperation = operation => {

  }

  render() {
    return (
      <View style={styles.container}>
        <Display>{this.state.displayValue}</Display>
        <View style={styles.buttons}>
          <Button label='AC' triple onClick={this.clearMemory} />
          <Button label='/' operation onClick={() => this.setOperation('/')} />
          <Button label='7' onClick={() => this.addDigit} />
          <Button label='8' onClick={() => this.addDigit} />
          <Button label='9' onClick={() => this.addDigit} />
          <Button label='*' operation onClick={() => this.setOperation('*')} />
          <Button label='4' onClick={() => this.addDigit}/>
          <Button label='5' onClick={() => this.addDigit} />
          <Button label='6' onClick={() => this.addDigit} />
          <Button label='-' operation onClick={() => this.setOperation('-')} />
          <Button label='1' onClick={() => this.addDigit} />
          <Button label='2' onClick={() => this.addDigit} />
          <Button label='3' onClick={() => this.addDigit} />
          <Button label='+' operation onClick={() => this.setOperation('+')} />
          <Button label='0' onClick={() => this.addDigit}/>
          <Button label='.' operation onClick={() => this.setOperation('.')} />
          <Button label='=' operation onClick={() => this.setOperation('=')} />
        </View>
      </View>
    );
  }
}
