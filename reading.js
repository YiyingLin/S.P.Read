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

const LittlePrince1 = 'All men have stars, but they are not the same things for different people. For some, who are travelers, the stars are guides. For others they are no more than little lights in the sky. For others, who are scholars, they are problems... But all these stars are silent. You-You alone will have stars as no one else has them... In one of the stars I shall be living. In one of them I shall be laughing. And so it will be as if all the stars will be laughing when you look at the sky at night..You, only you, will have stars that can laugh! And when your sorrow is comforted (time soothes all sorrows) you will be content that you have known me... You will always be my friend. You will want to laugh with me. And you will sometimes open your window, so, for that pleasure... It will be as if, in place of the stars, I had given you a great number of little bells that knew how to laugh';

const SteveJobsQuote2 = "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it. Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma - which is living with the results of other people's thinking. Don't let the noise of others' opinions drown out your own inner voice. And most important, have the courage to follow your heart and intuition.";

const TheRaven3 = 'Once upon a midnight dreary, while I pondered, weak and weary,Over many a quaint and curious volume of forgotten lore,  While I nodded, nearly napping, suddenly there came a tapping, As of some one gently rapping, rapping at my chamber door. "Tis some visitor," I muttered, "tapping at my chamber door, Only this and nothing more". Ah, distinctly I remember it was in the bleak December, And each separate dying ember wrought its ghost upon the floor. Eagerly I wished the tomorrow vainly I had sought to borrow. From my books surcease of sorrow, sorrow for the lost Lenore. For the rare and radiant maiden whom the angels name Lenore- Nameless here for evermore.';


export default class Reading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parser: new EssayParser(LittlePrince1, 2, 0),
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
