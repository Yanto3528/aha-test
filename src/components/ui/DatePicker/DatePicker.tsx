'use client';

import { forwardRef, useCallback, useState } from 'react';

import * as Popover from '@radix-ui/react-popover';
import dayjs from 'dayjs';

import { cn } from '@/lib/utils';

import { Calendar } from '../Calendar';
import { Input } from '../Input';
import type { InputProps } from '../Input';

export type DatePickerProps = Omit<InputProps, 'type' | 'value' | 'onChange'> & {
  value?: Date;
  onChange: (date: Date) => void;
};

export const DatePicker = forwardRef<HTMLInputElement, DatePickerProps>(
  ({ value, onChange, label, className, ...props }, ref) => {
    const [isCalendarOpen, setCalendarOpen] = useState(false);
    const displayDate = value ? dayjs(value).format('MM/DD/YYYY') : '';

    const onClose = useCallback(() => setCalendarOpen(false), []);

    const handleChange = useCallback((date: Date) => {
      onChange?.(date);
      setCalendarOpen(false);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
      <div>
        <Popover.Root open={isCalendarOpen} onOpenChange={setCalendarOpen}>
          <Popover.Trigger asChild>
            <div className="w-[335px] group">
              <Input
                label={label}
                ref={ref}
                readOnly
                value={displayDate}
                className={cn('focus:border-white group-radix-state-open:border-white', className)}
                {...props}
              />
            </div>
          </Popover.Trigger>
          <Popover.Portal>
            <Popover.Content align="start" sideOffset={18}>
              <Calendar value={value} onChange={handleChange} onCancel={onClose} />
            </Popover.Content>
          </Popover.Portal>
        </Popover.Root>
      </div>
    );
  }
);
