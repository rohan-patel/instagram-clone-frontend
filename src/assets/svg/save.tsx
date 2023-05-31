import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

interface SaveProps {
  width: string;
  height: string;
  stroke?: string;
  strokeWidth?: string;
  fill?: string;
}

const SvgComponent = (props: SaveProps) => (
  <Svg
    viewBox="0 0 32 32"
    width={props.width ?? 24}
    height={props.height ?? 24}>
    <Path
      fill={props.fill ?? 'none'}
      stroke={props.stroke ?? '#000'}
      strokeLinejoin="round"
      strokeWidth={props.strokeWidth ?? 2}
      d="M23 5H9C6 5 6 5 6 8v20.005V28l10-6.733 10 6.809V8c0-3 0-3-3-3Z"
    />
  </Svg>
);
export default SvgComponent;
