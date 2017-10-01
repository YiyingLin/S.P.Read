const EssayParser = require('./essay-parser.js');

import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton,
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
      paused: false,
      interval: 500
    };

    this.refreshInterval();
  }

  refreshInterval() {
    // clear the previous before we lose reference
    clearInterval(this.state.timer);

    // set a new one
    this.state.timer = setInterval(() => {
      this.setState(previousState => {
        return {
          displayWord: this.state.parser.nextState()
         };
      });
    }, this.state.interval);
  }

  togglePause() {
    console.log(this.state.paused);
    if (this.state.paused) {
      this.refreshInterval();
      this.state.paused = false;
    }
    else {
      clearInterval(this.state.timer);
      this.state.paused = true;
    }
  }

  deconstructEvent = (nativeEvent) => {
    switch (nativeEvent.inputEvent.eventType) {
      case "mousemove":
        if (this.state.paused) {
          return;
        }
        
        if (this.state.xPosition ==='') {
          this.setState({xPosition: nativeEvent.inputEvent.viewportX}, () => console.log(this.state.xPosition))
        } else if (this.state.xPosition < nativeEvent.inputEvent.viewportX) {
          this.setState({xPosition: nativeEvent.inputEvent.viewportX}, () => {
            if (this.state.interval > 100) {
              this.setState({interval: this.state.interval - 10}, this.refreshInterval);
            }
          })
        } else if (this.state.xPosition > nativeEvent.inputEvent.viewportX) {
          this.setState({xPosition: nativeEvent.inputEvent.viewportX}, () => {
            if (this.state.interval < 1000) {
              this.setState({interval: this.state.interval + 10}, this.refreshInterval);
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
        onClick={() => this.togglePause()}
        >
        <Pano source={asset('bgimg.jpg')}/>
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
