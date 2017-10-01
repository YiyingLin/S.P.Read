const EssayParser = require('./essay-parser.js');

import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton,
  Plane,
} from 'react-vr';

const PASSAGE = 'Then our mother came in, And she said to us two, “Did you have any fun? Tell me. What did you do?“ And Sally and I did not know what to say. Should we tell her, The things that went on, there that day? Well... what would YOU do, If your mother asked you?';

export default class Reading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parser: new EssayParser(PASSAGE, 2, 0),
      displayWord: "",
      xPosition: '',
      yPosiitons: -1,
      bgColor: 0,
      startTime: Date.now(),
      totalTime: 0,
      curPos: 1,
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
      this.setState({
        totalTime: (this.state.parser.getCurrentPosition() == this.state.parser.getTotalLength()) ? 
          this.state.totalTime : (Date.now() - this.state.startTime) / 1000,
        curPos: this.state.parser.getCurrentPosition()
      });
      this.setState(previousState => {
        const word = this.state.parser.nextState();
        return {
          displayWord: word
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
            if (this.state.interval > 150) {
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

  changeBgColor = () => {
    const currentColor = this.state.bgColor;
    this.setState({ bgColor: (currentColor + 1) % 4 });
  }

  render() {
    const angleX = this.props.angleX;
    const angleY = this.props.angleY;
    const angleZ = this.props.angleZ;
    const bgColors = ['bgimg.jpeg', 'bgimg2.jpeg', 'bgimg3.jpeg', 'bgimg4.jpeg'];
    const totalTime = this.state.totalTime;
    const totalWordCount = this.state.parser.getTotalLength();
    const averageSpeed = this.state.curPos / this.state.totalTime * 60;
    const currentSpeed = (this.state.parser.getCurrentPosition() == this.state.parser.getTotalLength()) ? 
      0 : 60 * 1000 / this.state.interval;

    return (
      <View
        onInput={(event) => this.deconstructEvent(event.nativeEvent)}
        >
        <Pano source={asset(bgColors[this.state.bgColor])}/>
        <Text
          style={{
            position: 'absolute',
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

        <VrButton
          onClick={() => this.togglePause()}
          >
          <Plane
            dimWidth={1}
            dimDepth={1}
            style={{
              position: 'absolute',
              color: 'red',
              opacity: 0.6,
              transform: [{rotateX: angleX}, {rotateY: angleY}, {rotateZ: angleZ}, {translate: [2.5, 0, -3]}, {scale: 0.4}],
            }}
          />
        </VrButton>

        <VrButton
          onClick={() => this.togglePause()}
          >
          <Text
            style={{
              position: 'absolute',
              backgroundColor: 'white',
              opacity: 0.6,
              color: 'black',
              width: 1,
              fontSize: 1,
              fontWeight: '300',
              layoutOrigin: [0.5, 0.5],
              paddingLeft: 0.2,
              paddingRight: 0.2,
              paddingTop: 1,
              paddingBottom: 1,
              textAlign: 'center',
              textAlignVertical: 'center',
              transform: [{rotateX: angleX}, {rotateY: angleY}, {rotateZ: angleZ}, {translate: [2.5, 0.9, -3]}, {scale: 0.4}],
            }}>
            +
          </Text>
        </VrButton>

        <VrButton
          onClick={() => this.togglePause()}
          >
          <Text
            style={{
              position: 'absolute',
              backgroundColor: 'white',
              opacity: 0.6,
              color: 'black',
              width: 1,
              fontSize: 1,
              fontWeight: '300',
              layoutOrigin: [0.5, 0.5],
              paddingLeft: 0.2,
              paddingRight: 0.2,
              paddingTop: 1,
              paddingBottom: 1,
              textAlign: 'center',
              textAlignVertical: 'center',
              transform: [{rotateX: angleX}, {rotateY: angleY}, {rotateZ: angleZ}, {translate: [2.5, -0.9, -3]}, {scale: 0.4}],
            }}>
            -
          </Text>
        </VrButton>

        <Plane
            dimWidth={2}
            dimDepth={1}
            style={{
              position: 'absolute',
              color: 'white',
              opacity: 0.3,
              transform: [{rotateX: angleX}, {rotateY: angleY}, {rotateZ: angleZ}, {translate: [0, 2.5, -1.5]}, {scale: 2}, {rotateX: 45}],
            }}
          />

        <VrButton
          onClick={() => this.changeBgColor()}
          >
          <Text
            style={{
              position: 'absolute',
              backgroundColor: 'white',
              opacity: 0.8,
              color: 'black',
              width: 0.8,
              fontSize: 0.1,
              fontWeight: '300',
              layoutOrigin: [0.5, 0.5],
              paddingLeft: 0.2,
              paddingRight: 0.2,
              textAlign: 'center',
              textAlignVertical: 'center',
              transform: [{rotateX: angleX}, {rotateY: angleY}, {rotateZ: angleZ}, {translate: [-1, 1.5, -1.5]}, {rotateX: 45}],
            }}>
            Background Color
          </Text>
        </VrButton>

        <VrButton
          onClick={() => this.props.changeScene(1)}
          >
          <Text
            style={{
              position: 'absolute',
              backgroundColor: 'white',
              opacity: 0.8,
              color: 'black',
              width: 0.8,
              fontSize: 0.1,
              fontWeight: '300',
              layoutOrigin: [0.5, 0.5],
              paddingLeft: 0.2,
              paddingRight: 0.2,
              paddingTop: 0.05,
              paddingBottom: 0.05,
              textAlign: 'center',
              textAlignVertical: 'center',
              transform: [{rotateX: angleX}, {rotateY: angleY}, {rotateZ: angleZ}, {translate: [0, 1.5, -1.5]}, {rotateX: 45}],
            }}>
            Restart
          </Text>
        </VrButton>

        <VrButton
          onClick={() => this.props.changeScene(0)}
          >
          <Text
            style={{
              position: 'absolute',
              backgroundColor: 'white',
              opacity: 0.8,
              color: 'black',
              width: 0.8,
              fontSize: 0.1,
              fontWeight: '300',
              layoutOrigin: [0.5, 0.5],
              paddingLeft: 0.2,
              paddingRight: 0.2,
              paddingTop: 0.05,
              paddingBottom: 0.05,
              textAlign: 'center',
              textAlignVertical: 'center',
              transform: [{rotateX: angleX}, {rotateY: angleY}, {rotateZ: angleZ}, {translate: [1, 1.5, -1.5]}, {rotateX: 45}],
            }}>
            End
          </Text>
        </VrButton>

        <Text
            style={{
              position: 'absolute',
              backgroundColor: 'transparent',
              color: 'white',
              width: 2,
              fontSize: 0.15,
              fontWeight: '300',
              layoutOrigin: [0.5, 0.5],
              paddingLeft: 0.2,
              paddingRight: 0.2,
              paddingTop: 0.05,
              paddingBottom: 0.05,
              textAlign: 'center',
              textAlignVertical: 'center',
              transform: [{rotateX: angleX}, {rotateY: angleY}, {rotateZ: angleZ}, {translate: [0, 4, -1.5]}, {rotateX: 45}],
            }}>
            Total time: { this.state.totalTime } seconds.
          </Text>

        <Text
            style={{
              position: 'absolute',
              backgroundColor: 'transparent',
              color: 'white',
              width: 2,
              fontSize: 0.15,
              fontWeight: '300',
              layoutOrigin: [0.5, 0.5],
              paddingLeft: 0.2,
              paddingRight: 0.2,
              paddingTop: 0.05,
              paddingBottom: 0.05,
              textAlign: 'center',
              textAlignVertical: 'center',
              transform: [{rotateX: angleX}, {rotateY: angleY}, {rotateZ: angleZ}, {translate: [0, 3.5, -1.5]}, {rotateX: 45}],
            }}>
            Total number of word left: { totalWordCount - this.state.curPos }.
          </Text>

          <Text
            style={{
              position: 'absolute',
              backgroundColor: 'transparent',
              color: 'white',
              width: 5,
              fontSize: 0.15,
              fontWeight: '300',
              layoutOrigin: [0.5, 0.5],
              paddingLeft: 0.2,
              paddingRight: 0.2,
              paddingTop: 0.05,
              paddingBottom: 0.05,
              textAlign: 'center',
              textAlignVertical: 'center',
              transform: [{rotateX: angleX}, {rotateY: angleY}, {rotateZ: angleZ}, {translate: [0, 3, -1.5]}, {rotateX: 45}],
            }}>
            Current speed: { currentSpeed.toPrecision(3) } words per minute.
          </Text>

          <Text
            style={{
              position: 'absolute',
              backgroundColor: 'transparent',
              color: 'white',
              width: 5,
              fontSize: 0.15,
              fontWeight: '300',
              layoutOrigin: [0.5, 0.5],
              paddingLeft: 0.2,
              paddingRight: 0.2,
              paddingTop: 0.05,
              paddingBottom: 0.05,
              textAlign: 'center',
              textAlignVertical: 'center',
              transform: [{rotateX: angleX}, {rotateY: angleY}, {rotateZ: angleZ}, {translate: [0, 2.5, -1.5]}, {rotateX: 45}],
            }}>
            Average speed: { averageSpeed.toPrecision(5) } words per minute.
          </Text>
      </View>
    );
  }
};
