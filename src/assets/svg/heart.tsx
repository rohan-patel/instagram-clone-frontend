import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

interface HeartProps {
  width: string;
  height: string;
  stroke?: string;
  strokeWidth?: string;
  fill?: string;
}

const SvgComponent = (props: HeartProps) => (
  <Svg
    viewBox="0 0 64 64"
    width={props.width ?? 24}
    height={props.height ?? 24}>
    <Path
      fill={props.fill ?? 'none'}
      stroke={props.stroke ?? '#000'}
      strokeWidth={props.strokeWidth ?? 2}
      d="m32 52.9-.8-.7C13 37.4 8.1 32.2 8.1 23.7c0-7 5.7-12.6 12.6-12.6 5.8 0 9.1 3.3 11.3 5.8 2.2-2.5 5.5-5.8 11.3-5.8 7 0 12.6 5.7 12.6 12.6 0 8.5-4.9 13.7-23.1 28.5l-.8.7Z"
    />
  </Svg>
);
export default SvgComponent;
