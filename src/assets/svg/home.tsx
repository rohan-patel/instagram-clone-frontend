import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

interface HomeProps {
  width: string;
  height: string;
  stroke?: string;
  strokeWidth?: string;
  fill?: string;
}

const SvgComponent = (props: HomeProps) => (
  <Svg
    viewBox="0 0 256 256"
    width={props.width ?? 24}
    height={props.height ?? 24}>
    <Path fill="none" d="M0 0h256v256H0z" />
    <Path
      fill={props.fill ?? 'none'}
      stroke={props.stroke ?? '#000'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={props.strokeWidth ?? 16}
      d="M151.994 207.993v-48.001a8 8 0 0 0-8-8h-32a8 8 0 0 0-8 8v48a8 8 0 0 1-7.999 8L48.001 216a8 8 0 0 1-8.001-8v-92.46a8 8 0 0 1 2.618-5.92l79.995-72.734a8 8 0 0 1 10.763 0l80.005 72.734a8 8 0 0 1 2.619 5.92v92.46a8 8 0 0 1-8.001 8l-48.006-.006a8 8 0 0 1-7.999-8Z"
    />
  </Svg>
);
export default SvgComponent;
