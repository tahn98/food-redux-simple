import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  Button
} from 'react-native';
import { connect } from 'react-redux';
import { addFood } from '../action/food';

const mapStateToProps = (state) => {
  return {
    foods: state.foodReducer.foodList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFood: (key) => dispatch(addFood(key))
  }
}

class FoodForm extends React.Component {
  state = {
    food: null
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Redux</Text>
        <TextInput
          value={this.state.food}
          placeholder='Name'
          style={styles.foodInput}
          onChangeText={(food) => this.setState({ food })}
        />
        <Button
          title='Submit'
          color='black'
          onPress={() => this.props.addFood(this.state.food)}
        />
        <Button
          title='Go to Food List'
          onPress={() => this.props.navigation.navigate('List')}
        />
      </View>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FoodForm);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 64,
    marginBottom: 48
  },
  foodInput: {
    fontSize: 32,
    marginBottom: 32,
    borderWidth: 1,
    padding: 8,
    width: '80%',
    borderRadius: 10,
  }
});
