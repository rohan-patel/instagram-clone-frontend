import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

interface ArrowProps {
  width?: string;
  height?: string;
  stroke?: string;
  strokeWidth?: string;
  // fill?: string;
}

const SvgComponent = (props: ArrowProps) => (
  <Svg
    viewBox="0 0 24 24"
    width={props.width ?? 24}
    height={props.height ?? 24}>
    <Path
      fill="none"
      stroke={props.stroke ?? '#3f5787'}
      strokeLinecap="round"
      strokeWidth={props.strokeWidth ?? 2}
      d="m2.01 11.994 4.96-4.98M2.052 12.049l4.957 4.965M3.151 11.989h13.425"
    />
  </Svg>
);
export default SvgComponent;
