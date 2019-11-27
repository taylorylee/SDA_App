//imports
import * as React from 'react';
import { Text, View } from 'react-native';

//Screen Indicator
let onScreen = "Main";

//Tree Planting
var tree = new Map();
tree.set("Main",
<Screen
parent = "Main"
children = {[]}
view =
<Text>Hi</Text>
/>);

//back stack
var backStack = ["Main"];

//Tree Children Update
tree.forEach(setChild);
function setChild(value, key, map) {
  tree.get(tree.get(key).props.parent).props.children.push(key);
}

//App class
export default class App extends React.Component {

  //render
  render() {
    return (

      //Display the indicated Screen
      <Screen parent = {tree.get(onScreen).props.parent}
      view =
      {tree.get(onScreen).props.view}
      />
    );
  }
}

//Screen class
class Screen extends React.Component {

  //constructor
  constructor(props)
  {
    super(props);
  }

  //render
  render() {
    return (

      //Display the view that is passed in
      <View>
        {this.props.view}
      </View>
    );
  }

  //Switch to another Screen
  static toScreen(to)
  {
    onScreen = to;
    backStack.push(to);
  }

  //Returns to the previous Screen
  static back()
  {
    onScreen = backStack.pop();
  }

  //Returns to the superCategory of the current Screen
  up()
  {
    Screen.toScreen(this.parent);
  }

  //Returns a list of the current Screen's subCategories
  down()
  {
    return this.children;
  }
}