import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

interface PlusProps {
  width?: string;
  height?: string;
  stroke?: string;
  strokeWidth?: string;
}

const SvgComponent = (props: PlusProps) => (
  <Svg
    viewBox="0 0 67.733 67.733"
    width={props.width ?? 24}
    height={props.height ?? 24}>
    <Path
      fill="none"
      stroke={props.stroke ?? '#000'}
      strokeLinecap="round"
      strokeWidth={props.strokeWidth ?? 5.2}
      d="M34.489 18.295v30.793M19.152 33.675l30.772-.018"
    />
  </Svg>
);
export default SvgComponent;
