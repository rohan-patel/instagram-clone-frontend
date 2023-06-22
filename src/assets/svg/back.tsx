import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

interface Props {
  width?: string;
  height?: string;
  stroke?: string;
  strokeWidth?: string;
  fill?: string;
}

const SvgComponent = (props: Props) => (
  <Svg
    viewBox="0 0 48 48"
    width={props.width ?? 24}
    height={props.height ?? 24}>
    <Path
      d="M18.031 39.25 2.844 24.156 18.156 9.063M44.415 24.218H2.916"
      opacity={1}
      fill={props.fill ?? 'none'}
      stroke={props.stroke ?? '#000'}
      strokeWidth={props.strokeWidth ?? 4}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={2.2}
      strokeDasharray={'none'}
      strokeOpacity={1}
    />
  </Svg>
);
export default SvgComponent;
