import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

interface ProfileProps {
  width: string;
  height: string;
  // stroke?: string;
  // strokeWidth?: string;
  fill?: string;
}

const SvgComponent = (props: ProfileProps) => (
  <Svg
    viewBox="0 0 256 256"
    width={props.width ?? 24}
    height={props.height ?? 24}>
    <G fill={props.fill ?? '#d3d3d3'}>
      <Path d="M128 134.097c-23.434 0-42.5-19.065-42.5-42.5 0-23.437 19.066-42.502 42.5-42.502s42.5 19.065 42.5 42.502c0 23.435-19.064 42.5-42.5 42.5ZM180.663 207.737H75.339a2.715 2.715 0 0 1-2.716-2.716v-27.545c0-22.94 18.664-41.605 41.604-41.605h27.545c22.939 0 41.605 18.664 41.605 41.605v27.545c0 1.5-1.215 2.716-2.714 2.716Z" />
    </G>
  </Svg>
);
export default SvgComponent;
