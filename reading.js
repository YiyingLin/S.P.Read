const EssayParser = require('./essay-parser.js');

import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
} from 'react-vr';

const PASSAGE = 'Then our mother came in, And she said to us two, “Did you have any fun? Tell me. What did you do? ”And Sally and I did not know what to say. Should we tell her, The things that went on, there that day? Well... what would YOU do, If your mother asked you? Then our mother came in, And she said to us two, “Did you have any fun? Tell me. What did you do? ”And Sally and I did not know what to say. Should we tell her, The things that went on, there that day? Well... what would YOU do, If your mother asked you? Then our mother came in, And she said to us two, “Did you have any fun? Tell me. What did you do? ”And Sally and I did not know what to say. Should we tell her, The things that went on, there that day? Well... what would YOU do, If your mother asked you?';

export default class Reading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parser: new EssayParser(PASSAGE, 2, 0),
      displayWord: "",
      xPosition: '',
      yPosiitons: -1,
      interval: 1000
    };

    this.timer = setInterval(() => {
      this.setState(previousState => {
        return {
          displayWord: this.state.parser.nextState()
         };
      });
    }, 1000);
  }

  deconstructEvent = (nativeEvent) => {
    console.log('haha')
    switch (nativeEvent.inputEvent.eventType) {
      case "mousemove":
        if (this.state.xPosition ==='') {
          this.setState({xPosition: nativeEvent.inputEvent.viewportX}, () => console.log(this.state.xPosition))
        } else if (this.state.xPosition < nativeEvent.inputEvent.viewportX) {
          this.setState({xPosition: nativeEvent.inputEvent.viewportX}, () => {
            if (this.state.interval > 100) {
              this.setState({interval: this.state.interval - 5}, () => {
                clearInterval(this.timer)
                this.timer = setInterval(() => {
                  this.setState(previousState => {
                    return { displayWord: this.state.parser.nextState() };
                  });
                }, this.state.interval);
              })
            }
          })
        } else if (this.state.xPosition > nativeEvent.inputEvent.viewportX) {
          this.setState({xPosition: nativeEvent.inputEvent.viewportX}, () => {
            if (this.state.interval < 1000) {
              this.setState({interval: this.state.interval + 5}, () => {
                clearInterval(this.timer)
                this.timer = setInterval(() => {
                  this.setState(previousState => {
                    return { displayWord: this.state.parser.nextState() };
                  });
                }, this.state.interval);
              })
            }
          })
        }
        if (this.state.yPosition < 0) {
          this.setState({yPosition: nativeEvent.viewPortY})
        }
      default:

    }
  }

  render() {
    const angleX = this.props.angleX;
    const angleY = this.props.angleY;
    const angleZ = this.props.angleZ;

    return (
      <View
        onInput={(event) => this.deconstructEvent(event.nativeEvent)}
        >
        <Pano source={asset('chess-world.jpg')}/>
        <Text
          style={{
            backgroundColor: 'transparent',
            fontSize: 0.8,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{rotateX: angleX}, {rotateY: angleY}, {rotateZ: angleZ}, {translate: [0, 0, -3]}],
          }}>
          {this.state.displayWord}
        </Text>
      </View>
    );
  }
};
