import React, { Component } from 'react';
import {
  StyleSheet,
  FlatList
} from 'react-native';
import { ListItem, Icon } from 'react-native-elements';
import { deleteFood } from '../action/food';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    foods: state.foodReducer.foodList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    delete: (key) => dispatch(deleteFood(key))
  }
}

class FoodList extends Component {
  render() {
    return (
      <FlatList
        data={this.props.foods}
        style={styles.listContainer}
        keyExtractor={(item, index) => item.key.toString()}
        renderItem={
          (data) => <ListItem
            title={data.item.name}
            bottomDivider
            rightIcon={
              <Icon
                name='delete'
                size={35}
                onPress={() => this.props.delete(data.item.key)}
              />
            }
          />
        }
      >
      </FlatList>
    );
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FoodList);

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: '#dce2ff',
    padding: 16
  },
  listText: {
    fontSize: 30
  },
});