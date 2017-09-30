import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
} from 'react-vr';

export default class Bread extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      passage: 'Then our mother came in,And she said to us two,“Did you have any fun?Tell me. What did you do?”And Sally and I did not know what to say.Should we tell her, The things that went on, there that day? Well... what would YOU do, If your mother asked you?'.split(' '),
      indexToRender: 0
    };

    setInterval(() => {
      this.setState(previousState => {
        return { indexToRender: this.state.indexToRender + 1 };
      });
    }, 250);
  }

  render() {
    return (
      <View>
        <Pano source={asset('chess-world.jpg')}/>
        <Text
          style={{
            backgroundColor: '#777879',
            fontSize: 0.8,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [0, 0, -3]}],
          }}>
          {this.state.passage[this.state.indexToRender]}
        </Text>
      </View>
    );
  }
};

AppRegistry.registerComponent('Bread', () => Bread);
