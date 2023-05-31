import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = () => (
  <Svg width={24} height={24} fill="none">
    <Path
      fill="#000"
      d="M12 4a8 8 0 1 0 .89 15.951 1 1 0 1 1 .22 1.988c-.365.04-.735.061-1.11.061-5.523 0-10-4.477-10-10S6.477 2 12 2c4.37 0 8.083 2.802 9.444 6.705a1 1 0 0 1-1.888.659A8.004 8.004 0 0 0 12 4Z"
    />
    <Path
      fill="#000"
      d="M18 10a1 1 0 0 1 1 1v1h1a1 1 0 1 1 0 2h-2.5a.5.5 0 0 0 0 1h1a2.5 2.5 0 0 1 .499 4.95L19 20v1a1 1 0 1 1-2 0v-1h-1a1 1 0 1 1 0-2h2.5a.5.5 0 0 0 0-1h-1a2.5 2.5 0 0 1-.499-4.95L17 12v-1a1 1 0 0 1 1-1zm-5-3a1 1 0 1 0-2 0v4.586l-2.707 2.707a1 1 0 1 0 1.414 1.414l3-3A1 1 0 0 0 13 12V7z"
    />
  </Svg>
);
export default SvgComponent;
