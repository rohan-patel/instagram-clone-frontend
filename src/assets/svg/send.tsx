import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

interface SendProps {
  width: string;
  height: string;
  stroke?: string;
  strokeWidth?: string;
  fill?: string;
}

const SvgComponent = (props: SendProps) => (
  <Svg
    viewBox="0 3 32 32"
    width={props.width ?? 24}
    height={props.height ?? 24}>
    <G
      fill={props.fill ?? 'none'}
      stroke={props.stroke ?? '#000'}
      clipRule="evenodd">
      <Path
        strokeWidth={props.strokeWidth ?? 0.8}
        d="M27.957 9.233h-.003L10.14 17.788l-6.923-7.661a.76.76 0 0 1 .562-1.268l23.436-.038c.949-.02.9.344.742.412Z"
      />
      <Path
        strokeWidth={props.strokeWidth ?? 0.8}
        d="M27.957 9.233c.351-.013.227.576-.003.849L12.861 28.011a.759.759 0 0 1-1.333-.385l-1.388-9.838 17.817-8.555s-.092-.183 0 0Z"
      />
    </G>
  </Svg>
);
export default SvgComponent;
