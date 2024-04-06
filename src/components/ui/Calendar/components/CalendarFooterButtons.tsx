import { cn } from '@/lib/utils';

import { footerButtonStyles } from '../Calendar.styles';

type Props = {
  className?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
};

export function CalendarFooterButtons({ className, onCancel, onConfirm }: Props) {
  return (
    <div className={cn('flex items-center justify-end gap-[38px] pb-4 px-[27px] mt-3', className)}>
      <button type="button" onClick={onCancel} className={footerButtonStyles({})}>
        Cancel
      </button>
      <button type="button" onClick={onConfirm} className={footerButtonStyles({})}>
        OK
      </button>
    </div>
  );
}
