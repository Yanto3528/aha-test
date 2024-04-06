import { ComponentPropsWithoutRef, ReactNode } from 'react';

import Image from 'next/image';

import ChevronLeftIcon from '@/public/icons/chevron-left.svg';

type CalendarHeaderProps = {
  children: ReactNode;
  prevButtonProps: ComponentPropsWithoutRef<'button'>;
  nextButtonProps: ComponentPropsWithoutRef<'button'>;
};

export function CalendarHeader({
  children,
  prevButtonProps,
  nextButtonProps,
}: CalendarHeaderProps) {
  return (
    <div className="grid grid-cols-calendar-header gap-4 items-center">
      <button type="button" className="p-3" {...prevButtonProps}>
        <Image src={ChevronLeftIcon} alt="previous" width={24} height={24} />
      </button>
      {children}
      <button type="button" className="p-3" {...nextButtonProps}>
        <Image src={ChevronLeftIcon} alt="previous" width={24} height={24} className="rotate-180" />
      </button>
    </div>
  );
}
