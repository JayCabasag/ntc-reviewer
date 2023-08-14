import * as React from 'react';
import ExamLicenseOnlineLogo from '@/assets/exam-license-online.jpg'
import { ImageProps } from './types';

export const EloLogo = React.forwardRef<HTMLImageElement, ImageProps>(
  ({ ...props }, forwardedRef) => {
    return (
        <img {...props} ref={forwardedRef} src={ExamLicenseOnlineLogo} alt="Review image" />
    );
  }
);

export default EloLogo