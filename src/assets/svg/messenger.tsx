import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

interface MessengerProps {
  width: string;
  height: string;
  stroke?: string;
  strokeWidth?: string;
}

const SvgComponent = (props: MessengerProps) => (
  <Svg
    viewBox="0 0 32 32"
    width={props.width ?? 24}
    height={props.height ?? 24}>
    <Path
      fill="none"
      stroke={props.stroke ?? '#212121'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={props.strokeWidth ?? 2}
      d="M14.268 2.112A13 13 0 0 0 6 23.3v3.661a1.258 1.258 0 0 0 1.82 1.129l2.663-1.332a12.9 12.9 0 0 0 7.25 1.126 13 13 0 1 0-3.465-25.772Z"
    />
    <Path d="m9.049 18.163 4.591-6.533a.64.64 0 0 1 .94-.2l3.075 2.307a.641.641 0 0 0 .714.036l3.745-2.646a.64.64 0 0 1 .9.835l-3.707 6.414a.64.64 0 0 1-.9.263L14.3 16.181a.638.638 0 0 0-.615-.024l-3.794 2.9a.641.641 0 0 1-.842-.894Z" />
  </Svg>
);
export default SvgComponent;
