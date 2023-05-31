import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

interface GridProps {
  width?: string;
  height?: string;
  stroke?: string;
  strokeWidth?: string;
  fill?: string;
}

const SvgComponent = (props: GridProps) => (
  <Svg
    viewBox="0 0 500 500"
    width={props.width ?? 24}
    height={props.height ?? 24}>
    <Path
      d="M100 100h300v300H100z"
      stroke={props.stroke ?? '#000'}
      fill={props.fill ?? 'none'}
      strokeWidth={props.strokeWidth ?? 20}
      strokeLinejoin="round"
    />
    <Path
      d="M200 100v300M300 100l-.873 299.768"
      stroke={props.stroke ?? '#000'}
      fill={props.fill ?? 'none'}
      strokeWidth={props.strokeWidth ?? 20}
    />
    <Path
      d="M250.001 150v300"
      stroke={props.stroke ?? '#000'}
      fill={props.fill ?? 'none'}
      strokeWidth={props.strokeWidth ?? 20}
      transform="rotate(-90 250.001 300)"
    />
    <Path
      d="m250.32 50.554-.873 299.767"
      stroke={props.stroke ?? '#000'}
      fill={props.fill ?? 'none'}
      strokeWidth={props.strokeWidth ?? 20}
      transform="rotate(-90 249.883 200.437)"
    />
  </Svg>
);
export default SvgComponent;
