import * as React from 'react';
import Svg, {Defs, LinearGradient, Stop, Circle} from 'react-native-svg';

interface StoryProps {
  width?: string;
  height?: string;
  stroke?: string;
  strokeWidth?: string;
  size?: string;
  fill?: string;
}

const SvgComponent = (props: StoryProps) => (
  <Svg
    viewBox="0 3.5 70 60"
    width={props.width ?? 24}
    height={props.height ?? 24}>
    <Defs>
      <LinearGradient
        id="a"
        x1={0.132}
        x2={0.915}
        y1={1}
        y2={0.081}
        gradientUnits="objectBoundingBox">
        <Stop offset="0%" stopColor="#ffb500" />
        <Stop offset="68.342%" stopColor="#ff3100" />
        <Stop offset="100%" stopColor="#d100ff" />
      </LinearGradient>
    </Defs>
    <Circle
      r={30}
      fill="none"
      stroke={props.stroke ?? 'url(#a)'}
      strokeWidth={props.strokeWidth ?? 1}
      strokeLinecap="round"
      transform="translate(35 35)"
    />
  </Svg>
);
export default SvgComponent;
