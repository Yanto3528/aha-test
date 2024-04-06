import { forwardRef } from 'react';

import { Input } from '../Input';
import type { InputProps } from '../Input';

import { PasswordValidation } from './PasswordValidation';

type PasswordInputProps = Omit<InputProps, 'type'>;

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ value, ...props }, ref) => (
    <div>
      <Input type="password" value={value} {...props} ref={ref} />
      {value && <PasswordValidation password={value as string} />}
    </div>
  )
);
