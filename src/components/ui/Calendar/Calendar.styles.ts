import { cva } from 'class-variance-authority';

export const headerButtonStyles = cva('hover:text-primary text-neutral-950 transition-all');
export const headerTextStyles = cva('text-center text-[inherit]');

export const dateButtonStyles = cva(
  'p-1 transition-all enabled:hover:bg-primary enabled:hover:text-white disabled:cursor-not-allowed rounded-md w-full'
);

export const dayStyles = cva(
  'text-sm transition-all aspect-square rounded-full border border-transparent enabled:hover:bg-white enabled:hover:text-greyscale-darker enabled:hover:border-transparent w-9',
  {
    variants: {
      inOtherMonth: {
        true: 'text-greyscale-500',
      },
      now: {
        true: 'border-primary',
      },
      disabled: {
        true: 'text-greyscale-500 hover:border-transparent cursor-not-allowed',
      },
      selected: {
        true: 'bg-primary text-white border-transparent enabled:hover:bg-primary enabled:hover:text-white',
      },
    },
  }
);

export const yearStyles = cva(
  'transition-all enabled:hover:bg-white enabled:hover:text-greyscale-darker px-2 w-[61px] rounded-sm',
  {
    variants: {
      selected: {
        true: 'bg-primary text-white enabled:hover:bg-primary enabled:hover:text-white',
      },
    },
  }
);

export const footerButtonStyles = cva(
  'px-4 py-2 text-sm leading-[24px] font-semibold hover:text-greyscale-500 transition-all'
);
