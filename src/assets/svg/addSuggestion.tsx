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
    viewBox="565 -35 350 350"
    width={props.width ?? 24}
    height={props.height ?? 24}>
    <Path
      d="M727.98 308.613c-25.828 0-46.834 21.006-46.834 46.834 0 25.828 21.006 46.834 46.834 46.834 25.828 0 46.834-21.006 46.834-46.834 0-25.828-21.006-46.834-46.834-46.834Z"
      stroke={props.stroke ?? '#000'}
      fill={props.fill ?? 'none'}
      strokeWidth={props.strokeWidth ?? 20}
      transform="matrix(.9985 0 0 1 69.415 -254.665)"
    />
    <Path
      d="M746.91 187.306h100.22a31.636 31.636 0 0 1 31.636 31.636v31.636H715.274v-31.636a31.636 31.636 0 0 1 31.636-31.636Z"
      stroke={props.stroke ?? '#000'}
      fill={props.fill ?? 'none'}
      strokeWidth={props.strokeWidth ?? 20}
      strokeLinejoin="round"
      fillRule="nonzero"
    />
    <Path
      d="M661.287 96.854v81.819M621.072 137.069h81.226"
      stroke={props.stroke ?? '#000'}
      fill={props.fill ?? 'none'}
      strokeWidth={props.strokeWidth ?? 20}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgComponent;
