import React from 'react';
import { render } from 'react-dom';
import { Map, TileLayer } from 'react-leaflet';
import HeatmapLayer from '../src/HeatmapLayer';
import { addressPoints } from './realworld.10000.js';
import geoRandom from 'geojson-random';
import {
  yilanSimulator,
  yilanSimulator2,
  taoyuanSimulator,
  taoyuanSimulator2,
  taoyuanSimulator3,
  taoyuanSimulator4,
} from './taiwanSimulator';

class MapExample extends React.Component {
  state = {
    count: 1,
    mapHidden: false,
    layerHidden: false,
    addressPointsTest: [
      [120.106188593, 23.9705713974],
      [121.253375, 24.923313],
    ],
    radius: 15,
    blur: 8,
    max: 0.3,
    startSeconds: 0,
    // limitAddressPoints: true,
  };

  /**
   * Toggle limiting the address points to test behavior with refocusing/zooming when data points change
   */
  toggleLimitedAddressPoints() {
    if (this.state.limitAddressPoints) {
      this.setState({
        addressPoints: addressPoints.slice(500, 1000),
        limitAddressPoints: false,
      });
    } else {
      this.setState({ addressPoints, limitAddressPoints: true });
    }
  }

  startSimulate = () => {
    taoyuanSimulator.start();
    taoyuanSimulator2.start();
    taoyuanSimulator3.start();
    yilanSimulator.start();
    yilanSimulator2.start();
    setInterval(() => {
      this.setState(prevState => ({
        count: prevState.count + 1,
      }));
    }, 1000);

    taoyuanSimulator.watchPosition(({ coords: { latitude, longitude } }) => {
      this.setState({
        addressPointsTest: [
          ...this.state.addressPointsTest,
          [longitude, latitude],
        ],
      });
    });
    taoyuanSimulator2.watchPosition(({ coords: { latitude, longitude } }) => {
      this.setState({
        addressPointsTest: [
          ...this.state.addressPointsTest,
          [longitude, latitude],
        ],
      });
    });
    taoyuanSimulator3.watchPosition(({ coords: { latitude, longitude } }) => {
      this.setState({
        addressPointsTest: [
          ...this.state.addressPointsTest,
          [longitude, latitude],
        ],
      });
    });
    taoyuanSimulator4.watchPosition(({ coords: { latitude, longitude } }) => {
      this.setState({
        addressPointsTest: [
          ...this.state.addressPointsTest,
          [longitude, latitude],
        ],
      });
    });
    yilanSimulator.watchPosition(({ coords: { latitude, longitude } }) => {
      this.setState({
        addressPointsTest: [
          ...this.state.addressPointsTest,
          [longitude, latitude],
        ],
      });
    });
    yilanSimulator2.watchPosition(({ coords: { latitude, longitude } }) => {
      this.setState({
        addressPointsTest: [
          ...this.state.addressPointsTest,
          [longitude, latitude],
        ],
      });
    });
  };

  render() {
    console.log('this.state.addRess', this.state.addressPointsTest);
    if (this.state.mapHidden) {
      return (
        <div>
          <input
            type="button"
            value="Toggle Map"
            onClick={() => this.setState({ mapHidden: !this.state.mapHidden })}
          />
        </div>
      );
    }

    const gradient = {
      0.1: '#89BDE0',
      0.2: '#96E3E6',
      0.4: '#82CEB6',
      0.6: '#FAF3A5',
      0.8: '#F5D98B',
      '1.0': '#DE9A96',
    };
    // console.log(`this.state.addressPointsTest`, this.state.addressPointsTest);
    // console.log(`this.state.addressPoints`, this.state.addressPoints);
    return (
      <div>
        <Map center={[121.853375, 24.753313]} zoom={5}>
          {!this.state.layerHidden && (
            <HeatmapLayer
              fitBoundsOnLoad
              // fitBoundsOnUpdate
              points={this.state.addressPointsTest}
              longitudeExtractor={m => m[0]}
              latitudeExtractor={m => m[1]}
              // gradient={gradient}
              intensityExtractor={m => 1}
              radius={Number(this.state.radius)}
              blur={Number(this.state.blur)}
              max={Number.parseFloat(this.state.max)}
            />
          )}
          <TileLayer
            url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
        </Map>
        <input
          type="button"
          value="Start Simulate"
          onClick={() => {
            this.startSimulate();
          }}
        />
        {this.state.count > 0 && <span>{this.state.count} seconds</span>}

        <br />
        <input
          type="button"
          value="Toggle Map"
          onClick={() => this.setState({ mapHidden: !this.state.mapHidden })}
        />
        <input
          type="button"
          value="Toggle Layer"
          onClick={() =>
            this.setState({ layerHidden: !this.state.layerHidden })
          }
        />
        <input
          type="button"
          value="Toggle Limited Data"
          onClick={this.toggleLimitedAddressPoints.bind(this)}
        />

        <div>
          Radius
          <input
            type="range"
            min={1}
            max={40}
            value={this.state.radius}
            onChange={e => this.setState({ radius: e.currentTarget.value })}
          />{' '}
          {this.state.radius}
        </div>

        <div>
          Blur
          <input
            type="range"
            min={1}
            max={20}
            value={this.state.blur}
            onChange={e => this.setState({ blur: e.currentTarget.value })}
          />{' '}
          {this.state.blur}
        </div>

        <div>
          Max
          <input
            type="range"
            min={0.1}
            max={3}
            step={0.1}
            value={this.state.max}
            onChange={e => this.setState({ max: e.currentTarget.value })}
          />{' '}
          {this.state.max}
        </div>
      </div>
    );
  }
}

render(<MapExample />, document.getElementById('app'));
