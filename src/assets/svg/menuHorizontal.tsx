import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

interface MenuProps {
  width: string;
  height: string;
  // stroke?: string;
  // strokeWidth?: string;
  fill?: string;
}

const SvgComponent = (props: MenuProps) => (
  <Svg
    viewBox="-7 -3 24 24"
    width={props.width ?? 24}
    height={props.height ?? 24}>
    <Path
      fill={props.fill ?? '#000'}
      d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
    />
  </Svg>
);
export default SvgComponent;
