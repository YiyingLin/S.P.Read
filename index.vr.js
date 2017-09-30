import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  Plane,
} from 'react-vr';

export default class Bread extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      summary1: null,
      summary2: null,
      summary3: null
    };
  }

  showSummary1 = () => {
    this.setState({
      summary1: (<Plane
          dimWidth={1}
          dimDepth={2}
          style={{
            color: 'red',
            transform: [{translate: [1.3, 0, -0.88]}, {rotateY: -60}, {scale: 0.6}],
          }}
      />)
    })
  };

  hideSummary1 = () => {
    this.setState({
      summary1: null
    })
  };

  showSummary2 = () => {
    this.setState({
      summary2: (<Plane
          dimWidth={1}
          dimDepth={2}
          style={{
            color: 'red',
            transform: [{translate: [-1.3, 0, -0.88]}, {rotateY: 60}, {scale: 0.6}],
          }}
      />)
    })
  };

  hideSummary2 = () => {
    this.setState({
      summary2: null
    })
  };

  showSummary3 = () => {
    this.setState({
      summary3: (<Plane
          dimWidth={1}
          dimDepth={2}
          style={{
            color: 'red',
            transform: [{translate: [1.3, 0, 0.88]}, {rotateY: -120}, {scale: 0.6}],
          }}
      />)
    })
  };

  hideSummary3 = () => {
    this.setState({
      summary3: null
    })
  };

  render() {
    const summary1 = this.state.summary1;
    const summary2 = this.state.summary2;
    const summary3 = this.state.summary3;

    return (
      <View>

        <Pano source={asset('library.jpg')}/>
        <Plane
          dimWidth={0.5}
          dimDepth={1}
          style={{
            color: 'red',
            transform: [{translate: [1.2, -0.7, -1]}, {rotateY: -90}, {rotateX: -90}, {scale: 0.6}],
          }}
          onEnter={() => this.showSummary1()}
          onExit={() => this.hideSummary1()}
        />
        <Plane
          dimWidth={0.5}
          dimDepth={1}
          style={{
            color: 'red',
            transform: [{translate: [-1.8, -0.7, -1.2]}, {rotateY: -90}, {rotateX: -90}, {scale: 0.6}],
          }}
          onEnter={() => this.showSummary2()}
          onExit={() => this.hideSummary2()}
        />
        <Plane
          dimWidth={0.5}
          dimDepth={1}
          style={{
            color: 'red',
            transform: [{translate: [2.1, -0.7, 1.2]}, {rotateY: -90}, {rotateX: -90}, {scale: 0.6}],
          }}
          onEnter={() => this.showSummary3()}
          onExit={() => this.hideSummary3()}
        />
        { summary1 }
        { summary2 }
        { summary3 }
      </View>
    );
  }
};

AppRegistry.registerComponent('Bread', () => Bread);
