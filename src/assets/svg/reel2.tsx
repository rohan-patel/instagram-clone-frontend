import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

interface ReelProps {
  width: string;
  height: string;
  // stroke?: string;
  // strokeWidth?: string;
  // fill?: string;
}

const SvgComponent = (props: ReelProps) => (
  <Svg
    width={props.width ?? 24}
    height={props.height ?? 24}
    fill="none"
    viewBox="0 0 24 24">
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M1 6.5A5.5 5.5 0 0 1 6.5 1h11A5.5 5.5 0 0 1 23 6.5v11a5.5 5.5 0 0 1-5.5 5.5h-11A5.5 5.5 0 0 1 1 17.5v-11ZM6.5 3A3.5 3.5 0 0 0 3 6.5v11A3.5 3.5 0 0 0 6.5 21h11a3.5 3.5 0 0 0 3.5-3.5v-11A3.5 3.5 0 0 0 17.5 3h-11Z"
      clipRule="evenodd"
    />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M9.038 10.113a1 1 0 0 1 1.035.068l5 3.5a1 1 0 0 1 0 1.638l-5 3.5A1 1 0 0 1 8.5 18v-7a1 1 0 0 1 .538-.887zm1.462 2.808v3.158l2.256-1.579-2.256-1.58zM1 8a1 1 0 0 1 1-1h20a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1z"
      clipRule="evenodd"
    />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M7.684 1.051a1 1 0 0 1 1.265.633l2 6a1 1 0 0 1-1.897.632l-2-6a1 1 0 0 1 .632-1.265zm6 0a1 1 0 0 1 1.265.633l2 6a1 1 0 0 1-1.897.632l-2-6a1 1 0 0 1 .632-1.265z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgComponent;
