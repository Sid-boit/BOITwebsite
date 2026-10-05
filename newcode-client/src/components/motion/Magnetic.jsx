import React, { useEffect, useRef } from 'react';
import { magnetize } from '../../hooks/motion';

/* Wraps any element (default: <a>) so it drifts toward the cursor on hover. */
export default function Magnetic({ as: Tag = 'a', strength = 12, children, ...rest }) {
  const ref = useRef(null);
  useEffect(() => magnetize(ref.current, strength), [strength]);
  return (
    <Tag ref={ref} {...rest}>
      {children}
    </Tag>
  );
}
