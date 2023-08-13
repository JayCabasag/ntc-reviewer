import * as React from 'react';
import ReviewImageIcon from '../../assets/review-icon.svg'
import { ImageProps } from './types';

export const ReviewImageAsset = React.forwardRef<HTMLImageElement, ImageProps>(
  ({ ...props }, forwardedRef) => {
    return (
        <img {...props} ref={forwardedRef} src={ReviewImageIcon} alt="Review image" />
    );
  }
);

export default ReviewImageAsset;  