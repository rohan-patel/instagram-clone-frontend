import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

interface SearchProps {
  width: string;
  height: string;
  stroke?: string;
  strokeWidth?: string;
  // fill?: string;
}

const SvgComponent = (props: SearchProps) => (
  <Svg
    viewBox="0 0 24 24"
    width={props.width ?? 24}
    height={props.height ?? 24}>
    <Path
      stroke={props.stroke ?? '#000'}
      strokeWidth={props.strokeWidth ?? 0.5}
      d="M3.624 15a8.03 8.03 0 0 0 10.619.659l5.318 5.318a1 1 0 0 0 1.414-1.414l-5.318-5.318A8.04 8.04 0 0 0 3.624 3.624a8.042 8.042 0 0 0 0 11.376Zm1.414-9.96a6.043 6.043 0 1 1-1.77 4.274 6 6 0 0 1 1.77-4.276Z"
    />
  </Svg>
);
export default SvgComponent;
