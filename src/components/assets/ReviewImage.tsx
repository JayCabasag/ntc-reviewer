import * as React from 'react';
import reviewImageIcon from '../../assets/review-icon.svg'
import { ImageProps } from './types';

export const ReviewImageAsset = React.forwardRef<HTMLImageElement, ImageProps>(
  ({ ...props }, forwardedRef) => {
    return (
        <img {...props} ref={forwardedRef} src={reviewImageIcon} alt="Review image" />
    );
  }
);

export default ReviewImageAsset;