import * as React from 'react';
import Svg, {Defs, RadialGradient, Stop, Path} from 'react-native-svg';

interface InstaLogoProps {
  width?: string;
  height?: string;
  stroke?: string;
  strokeWidth?: string;
  // fill?: string;
}

const SvgComponent = (props: InstaLogoProps) => (
  <Svg
    viewBox="0 0 110 110"
    width={props.width ?? 24}
    height={props.height ?? 24}>
    <Defs>
      <RadialGradient
        id="a"
        cx={13.551}
        cy={102.482}
        r={133.147}
        gradientUnits="userSpaceOnUse">
        <Stop offset={0.09} stopColor="#fa8f21" />
        <Stop offset={0.78} stopColor="#d82d7e" />
      </RadialGradient>
      <RadialGradient
        id="b"
        cx={61.859}
        cy={107.051}
        r={104.938}
        gradientUnits="userSpaceOnUse">
        <Stop offset={0.64} stopColor="#8c3aaa" stopOpacity={0} />
        <Stop offset={1} stopColor="#8c3aaa" />
      </RadialGradient>
    </Defs>
    <Path
      fill="url(#a)"
      d="M34 51a17 17 0 1 1 17 17 17 17 0 0 1-17-17m-9.191 0A26.188 26.188 0 1 0 51 24.812 26.187 26.187 0 0 0 24.812 51M72.1 23.774a6.12 6.12 0 1 0 6.122-6.118 6.123 6.123 0 0 0-6.12 6.118M30.4 92.513a28.187 28.187 0 0 1-9.471-1.754 15.85 15.85 0 0 1-5.866-3.815 15.735 15.735 0 0 1-3.815-5.862 28.161 28.161 0 0 1-1.758-9.471c-.247-5.376-.3-6.991-.3-20.61s.053-15.23.3-20.61a28.374 28.374 0 0 1 1.754-9.471 15.85 15.85 0 0 1 3.815-5.866 15.718 15.718 0 0 1 5.866-3.815A28.161 28.161 0 0 1 30.4 9.484c5.376-.247 6.991-.3 20.6-.3s15.23.053 20.61.3a28.373 28.373 0 0 1 9.471 1.754 15.8 15.8 0 0 1 5.866 3.815 15.8 15.8 0 0 1 3.815 5.866 28.162 28.162 0 0 1 1.754 9.471c.247 5.38.3 6.991.3 20.61s-.049 15.23-.3 20.61a28.294 28.294 0 0 1-1.754 9.471 16.886 16.886 0 0 1-9.681 9.677 28.161 28.161 0 0 1-9.471 1.754c-5.376.247-6.991.3-20.61.3s-15.23-.049-20.6-.3M29.974.309a37.4 37.4 0 0 0-12.379 2.369A25.015 25.015 0 0 0 8.56 8.56a24.918 24.918 0 0 0-5.883 9.034 37.407 37.407 0 0 0-2.368 12.38C.058 35.412 0 37.15 0 51s.058 15.588.309 21.026a37.405 37.405 0 0 0 2.369 12.379A24.931 24.931 0 0 0 8.56 93.44a25.076 25.076 0 0 0 9.034 5.883 37.43 37.43 0 0 0 12.379 2.369c5.441.247 7.176.309 21.026.309s15.588-.058 21.026-.309a37.405 37.405 0 0 0 12.379-2.369 26.075 26.075 0 0 0 14.918-14.918 37.3 37.3 0 0 0 2.369-12.379c.247-5.442.3-7.176.3-21.026s-.058-15.588-.3-21.026a37.394 37.394 0 0 0-2.369-12.379A25.08 25.08 0 0 0 93.44 8.56a24.955 24.955 0 0 0-9.03-5.883A37.347 37.347 0 0 0 72.03.309C66.593.062 64.854 0 51 0S35.41.058 29.97.309"
      data-name="Path 14"
    />
    <Path
      fill="url(#b)"
      d="M34 51a17 17 0 1 1 17 17 17 17 0 0 1-17-17m-9.191 0A26.188 26.188 0 1 0 51 24.812 26.187 26.187 0 0 0 24.812 51M72.1 23.774a6.12 6.12 0 1 0 6.122-6.118 6.123 6.123 0 0 0-6.12 6.118M30.4 92.513a28.187 28.187 0 0 1-9.471-1.754 15.85 15.85 0 0 1-5.866-3.815 15.735 15.735 0 0 1-3.815-5.862 28.161 28.161 0 0 1-1.758-9.471c-.247-5.376-.3-6.991-.3-20.61s.053-15.23.3-20.61a28.374 28.374 0 0 1 1.754-9.471 15.85 15.85 0 0 1 3.815-5.866 15.718 15.718 0 0 1 5.866-3.815A28.161 28.161 0 0 1 30.4 9.484c5.376-.247 6.991-.3 20.6-.3s15.23.053 20.61.3a28.373 28.373 0 0 1 9.471 1.754 15.8 15.8 0 0 1 5.866 3.815 15.8 15.8 0 0 1 3.815 5.866 28.162 28.162 0 0 1 1.754 9.471c.247 5.38.3 6.991.3 20.61s-.049 15.23-.3 20.61a28.294 28.294 0 0 1-1.754 9.471 16.886 16.886 0 0 1-9.681 9.677 28.161 28.161 0 0 1-9.471 1.754c-5.376.247-6.991.3-20.61.3s-15.23-.049-20.6-.3M29.974.309a37.4 37.4 0 0 0-12.379 2.369A25.015 25.015 0 0 0 8.56 8.56a24.918 24.918 0 0 0-5.883 9.034 37.407 37.407 0 0 0-2.368 12.38C.058 35.412 0 37.15 0 51s.058 15.588.309 21.026a37.405 37.405 0 0 0 2.369 12.379A24.931 24.931 0 0 0 8.56 93.44a25.076 25.076 0 0 0 9.034 5.883 37.43 37.43 0 0 0 12.379 2.369c5.441.247 7.176.309 21.026.309s15.588-.058 21.026-.309a37.405 37.405 0 0 0 12.379-2.369 26.075 26.075 0 0 0 14.918-14.918 37.3 37.3 0 0 0 2.369-12.379c.247-5.442.3-7.176.3-21.026s-.058-15.588-.3-21.026a37.394 37.394 0 0 0-2.369-12.379A25.08 25.08 0 0 0 93.44 8.56a24.955 24.955 0 0 0-9.03-5.883A37.347 37.347 0 0 0 72.03.309C66.593.062 64.854 0 51 0S35.41.058 29.97.309"
      data-name="Path 15"
    />
  </Svg>
);
export default SvgComponent;
