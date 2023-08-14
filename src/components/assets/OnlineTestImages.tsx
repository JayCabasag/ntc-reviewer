import * as React from 'react';
import OnlineTestPanaSvg from '@/assets/online-test-pana.svg'
import OnlineTestPanaSvgBg from '@/assets/online-test-pana-bg.svg'
import { ImageProps } from './types';

const OnlineTestPanaImage = React.forwardRef<HTMLImageElement, ImageProps>(
  ({ ...props }, forwardedRef) => {
    return (
        <img {...props} ref={forwardedRef} src={OnlineTestPanaSvg} alt="online-test-pana-image" />
    );
  }
);
OnlineTestPanaImage.displayName = 'OnlineTestPanaImage'

const OnlineTestPanaBgImage = React.forwardRef<HTMLImageElement, ImageProps>(
    ({ ...props }, forwardedRef) => {
      return (
          <img {...props} ref={forwardedRef} src={OnlineTestPanaSvgBg} alt="online-test-pana-image" />
      );
    }
  );

  OnlineTestPanaBgImage.displayName = 'OnlineTestPanaBgImage'
  

export { OnlineTestPanaImage, OnlineTestPanaBgImage }