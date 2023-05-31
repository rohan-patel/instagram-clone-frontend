import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

interface CommentProps {
  width: string;
  height: string;
  stroke?: string;
  strokeWidth?: string;
  fill?: string;
}

const SvgComponent = (props: CommentProps) => (
  <Svg
    viewBox="0 0 32 32"
    width={props.width ?? 24}
    height={props.height ?? 24}>
    <Path
      fill={props.fill ?? 'none'}
      stroke={props.stroke ?? '#000'}
      strokeWidth={props.strokeWidth ?? 1.5}
      d="M25.784 21.017A10.992 10.992 0 0 0 27 16c0-6.065-4.935-11-11-11S5 9.935 5 16s4.935 11 11 11c1.742 0 3.468-.419 5.018-1.215l4.74 1.185a.996.996 0 0 0 .949-.263 1 1 0 0 0 .263-.95l-1.186-4.74Z"
    />
  </Svg>
);
export default SvgComponent;
