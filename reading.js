const EssayParser = require('./essay-parser.js');

import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
} from 'react-vr';

const PASSAGE = 'Then our mother came in, And she said to us two, “Did you have any fun? Tell me. What did you do? ”And Sally and I did not know what to say. Should we tell her, The things that went on, there that day? Well... what would YOU do, If your mother asked you?';

export default class Reading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parser: new EssayParser(PASSAGE, 2, 0),
      displayWord: ""
    };

    setInterval(() => {
      this.setState(previousState => {
        return { 
          displayWord: this.state.parser.nextState()
         };
      });
    }, 250);
  }

  render() {
    return (
      <View>
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
          {this.state.displayWord}
        </Text>
      </View>
    );
  }
};
