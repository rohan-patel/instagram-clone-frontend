import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

interface IconProps {
  width?: string;
  height?: string;
  stroke?: string;
  strokeWidth?: string;
  fill?: string;
}

const SvgComponent = (props: IconProps) => (
  <Svg
    viewBox="0 0 80 80"
    width={props.width ?? 24}
    height={props.height ?? 24}>
    <Circle
      cx={40.419}
      cy={36.78}
      r={10.173}
      stroke={props.stroke ?? '#000'}
      fill={props.fill ?? 'none'}
      strokeWidth={props.strokeWidth ?? 5}
    />
    <Path
      d="m32.661 17.371 7.589-5.988 8.019 5.989h17.014a3.38 3.38 0 0 1 3.379 3.379v43.654a3.38 3.38 0 0 1-3.379 3.379H15.648a3.38 3.38 0 0 1-3.379-3.379V20.751a3.38 3.38 0 0 1 3.379-3.379l17.013-.001Z"
      stroke={props.stroke ?? '#000'}
      fill={props.fill ?? 'none'}
      strokeWidth={props.strokeWidth ?? 5}
      strokeLinejoin="round"
      strokeLinecap="round"
    />
    <Path
      d="M22.058 67.784c0-8.408 2.833-13.347 18.202-13.347 15.919 0 18.507 5.001 18.507 13.347"
      stroke={props.stroke ?? '#000'}
      fill={props.fill ?? 'none'}
      strokeWidth={props.strokeWidth ?? 5}
    />
  </Svg>
);
export default SvgComponent;
