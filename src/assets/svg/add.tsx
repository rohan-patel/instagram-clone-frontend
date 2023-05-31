import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

interface AddProps {
  width: string;
  height: string;
  // stroke?: string;
  // strokeWidth?: string;
  // fill?: string;
}

const SvgComponent = (props: AddProps) => (
  <Svg
    width={props.width ?? 24}
    height={props.height ?? 24}
    viewBox="0 0 67.733 67.733">
    <Path
      d="M18.094 231.519c-8.73 0-15.841 7.112-15.841 15.842v31.545c0 8.73 7.11 15.842 15.841 15.842h31.545c8.73 0 15.842-7.112 15.842-15.842V247.36c0-8.73-7.112-15.842-15.842-15.842zm0 5.293h31.545c5.89 0 10.55 4.659 10.55 10.549v31.545c0 5.89-4.66 10.548-10.55 10.548H18.094c-5.89 0-10.549-4.658-10.549-10.548V247.36c0-5.89 4.659-10.549 10.549-10.549zm16.395 8.068a2.646 2.646 0 0 0-2.608 2.682v12.752h-12.75a2.646 2.646 0 1 0 0 5.29h12.75v12.75a2.647 2.647 0 1 0 5.293 0v-12.75h12.75a2.646 2.646 0 1 0 0-5.29h-12.75v-12.752a2.646 2.646 0 0 0-2.685-2.682z"
      // color="#000"
      // fontFamily="sans-serif"
      // fontWeight={400}
      // overflow="visible"
      // style={{
      //   lineHeight: 'normal',
      //   fontVariantLigatures: 'normal',
      //   fontVariantPosition: 'normal',
      //   fontVariantCaps: 'normal',
      //   fontVariantNumeric: 'normal',
      //   fontVariantAlternates: 'normal',
      //   fontFeatureSettings: 'normal',
      //   textIndent: 0,
      //   textAlign: 'start',
      //   textDecorationLine: 'none',
      //   textDecorationStyle: 'solid',
      //   textDecorationColor: '#000',
      //   textTransform: 'none',
      //   textOrientation: 'mixed',
      //   shapePadding: 0,
      //   isolation: 'auto',
      //   mixBlendMode: 'normal',
      // }}
      transform="translate(0 -229.267)"
    />
  </Svg>
);
export default SvgComponent;
