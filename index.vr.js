import React from 'react';
import Reading from './reading';
import {
  AppRegistry,
  VrHeadModel,
  asset,
  Pano,
  Text,
  View,
  Plane,
  VrButton,
} from 'react-vr';

export default class Bread extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      summary1: null,
      summary2: null,
      summary3: null,
      text1: null,
      scene: 0,
      viewAngle: []
    };

    this.changeScene = this.changeScene.bind(this);
    this.showSummary1 = this.showSummary1.bind(this);
    this.hideSummary1 = this.hideSummary1.bind(this);
    this.showSummary2 = this.showSummary2.bind(this);
    this.hideSummary2 = this.hideSummary2.bind(this);
    this.showSummary3 = this.showSummary3.bind(this);
    this.hideSummary3 = this.hideSummary3.bind(this);
  }

  showSummary1() {
    this.setState({
      summary1: (<Plane
          dimWidth={1}
          dimDepth={2}
          style={{
            position: 'absolute',
            color: 'white',
            opacity: 0.2,
            transform: [{translate: [1.3, 0, -0.88]}, {rotateY: -60}, {scale: 0.6}],
          }}
      />),
      viewAngle: VrHeadModel.rotation(),
      text1: (<Text
            style={{
              position: 'absolute',
              backgroundColor: 'transparent',
              color: 'red',
              width: 1,
              opacity: 1,
              fontSize: 0.2,
              fontWeight: '300',
              layoutOrigin: [0.5, 0.5],
              paddingLeft: 0.2,
              paddingRight: 0.2,
              textAlign: 'center',
              textAlignVertical: 'top',
              transform: [{translate: [1.3, 0, -0.88]}, {rotateY: -60}, {scale: 0.6}],
            }}>
            Cinderella Author: Chen
          </Text>)
    })
  };

  hideSummary1() {
    this.setState({
      summary1: null,
      text1: null
    })
  };

  showSummary2() {
    this.setState({
      summary2: (<Plane
          dimWidth={1}
          dimDepth={2}
          style={{
            color: 'white',
            opacity: 0.5,
            transform: [{translate: [-1.3, 0, -0.88]}, {rotateY: 60}, {scale: 0.6}],
          }}
      />),
      viewAngle: VrHeadModel.rotation()
    })
  };

  hideSummary2() {
    this.setState({
      summary2: null
    })
  };

  showSummary3() {
    this.setState({
      summary3: (<Plane
          dimWidth={1}
          dimDepth={2}
          style={{
            color: 'white',
            opacity: 0.5,
            transform: [{translate: [1.3, 0, 0.88]}, {rotateY: -120}, {scale: 0.6}],
          }}
      />),
      viewAngle: VrHeadModel.rotation()
    })
  };

  hideSummary3() {
    this.setState({
      summary3: null
    })
  };

  changeScene() {
    const currentScene = this.state.scene;
    this.setState({
      scene: (currentScene + 1) % 2,
      viewAngle: VrHeadModel.rotation(),
      summary1: null,
      summary2: null,
      summary3: null,
      text1: null
    })
  };

  render() {
    const summary1 = this.state.summary1;
    const summary2 = this.state.summary2;
    const summary3 = this.state.summary3;
    const text1 = this.state.text1;

    if (this.state.scene === 0) {

    return (
      <View>
        <Pano source={asset('library.jpg')}/>
        <VrButton
          style={{width: 0.7}}
          onClick={()=>this.changeScene(0)}>
          <Plane
            dimWidth={0.5}
            dimDepth={1}
            style={{
              color: 'white',
              transform: [{translate: [1.2, -0.7, -1]}, {rotateY: -90}, {rotateX: -90}, {scale: 0.6}],
            }}
            onEnter={() => this.showSummary1()}
            onExit={() => this.hideSummary1()}
          />
          <Text
            style={{
              backgroundColor: 'transparent',
              color: 'black',
              width: 0.05,
              fontSize: 0.03,
              fontWeight: '100',
              layoutOrigin: [0.5, 0.5],
              paddingLeft: 0.2,
              paddingRight: 0.2,
              textAlign: 'center',
              textAlignVertical: 'center',
              transform: [{translate: [1.55, -0.7, -1]}, {rotateY: -90}, {rotateX: -90}, {scale: 0.6}],
            }}>
            Cinderella’s mother died while she was a very little child, leaving her to the care of her father and her step-sisters, who were very much older than herself; for Cinderella’s father had been twice married, and her mother was his second wife. Now, Cinderella’s sisters did not love her, and were very unkind to her. As she grew older they made her work as a servant, and even sift the cinders; on which account they used to call her in mockery “Cinderella.” It was not her real name, but she became afterwards so well known by it that her proper one has been forgotten.
            She was a very sweet-tempered, good girl, however, and everybody (except her cruel sisters) loved her.
            When they were gone, Cinderella, whose heart was very sad, sat down and cried bitterly; but as she sat sorrowful, thinking of th
          </Text>
        </VrButton>

        <VrButton
          style={{width: 0.7}}
          onClick={()=>this.changeScene(0)}>
          <Plane
            dimWidth={0.5}
            dimDepth={1}
            style={{
              color: 'white',
              transform: [{translate: [-1.8, -0.7, -1.2]}, {rotateY: -90}, {rotateX: -90}, {scale: 0.6}],
            }}
            onEnter={() => this.showSummary2()}
            onExit={() => this.hideSummary2()}
          />
          <Text
            style={{
              backgroundColor: 'transparent',
              color: 'black',
              width: 0.05,
              fontSize: 0.03,
              fontWeight: '100',
              layoutOrigin: [0.5, 0.5],
              paddingLeft: 0.2,
              paddingRight: 0.2,
              textAlign: 'center',
              textAlignVertical: 'center',
              transform: [{translate: [-1.45, -0.7, -1.2]}, {rotateY: -90}, {rotateX: -90}, {scale: 0.6}],
            }}>
            Cinderella’s mother died while she was a very little child, leaving her to the care of her father and her step-sisters, who were very much older than herself; for Cinderella’s father had been twice married, and her mother was his second wife. Now, Cinderella’s sisters did not love her, and were very unkind to her. As she grew older they made her work as a servant, and even sift the cinders; on which account they used to call her in mockery “Cinderella.” It was not her real name, but she became afterwards so well known by it that her proper one has been forgotten.
            She was a very sweet-tempered, good girl, however, and everybody (except her cruel sisters) loved her.
            When they were gone, Cinderella, whose heart was very sad, sat down and cried bitterly; but as she sat sorrowful, thinking of th
          </Text>
        </VrButton>

        <VrButton
          style={{width: 0.7}}
          onClick={()=>this.changeScene(0)}>
          <Plane
            dimWidth={0.5}
            dimDepth={1}
            style={{
              color: 'white',
              transform: [{translate: [2.1, -0.7, 1.2]}, {rotateY: -90}, {rotateX: -90}, {scale: 0.6}],
            }}
            onEnter={() => this.showSummary3()}
            onExit={() => this.hideSummary3()}
          />
          <Text
            style={{
              backgroundColor: 'transparent',
              color: 'black',
              width: 0.05,
              fontSize: 0.03,
              fontWeight: '100',
              layoutOrigin: [0.5, 0.5],
              paddingLeft: 0.2,
              paddingRight: 0.2,
              textAlign: 'center',
              textAlignVertical: 'center',
              transform: [{translate: [2.4, -0.7, 1.2]}, {rotateY: -90}, {rotateX: -90}, {scale: 0.6}],
            }}>
            Cinderella’s mother died while she was a very little child, leaving her to the care of her father and her step-sisters, who were very much older than herself; for Cinderella’s father had been twice married, and her mother was his second wife. Now, Cinderella’s sisters did not love her, and were very unkind to her. As she grew older they made her work as a servant, and even sift the cinders; on which account they used to call her in mockery “Cinderella.” It was not her real name, but she became afterwards so well known by it that her proper one has been forgotten.
            She was a very sweet-tempered, good girl, however, and everybody (except her cruel sisters) loved her.
          </Text>
        </VrButton>

        { text1 }
        { summary1 }
        { summary2 }
        { summary3 }
        

      </View>
    );

  } else {
      const angleOfRotation = this.state.viewAngle;
      return (
        <Reading
          angleX = { angleOfRotation[0] }
          angleY = { angleOfRotation[1] }
          angleZ = { angleOfRotation[2] }
          changeScene = { (i) => this.changeScene() }
        />
      );   
    }
  }
};

AppRegistry.registerComponent('Bread', () => Bread);
