import { forwardRef, ComponentPropsWithoutRef } from 'react';

import { cn } from '@/lib/utils';

export type InputProps = Omit<ComponentPropsWithoutRef<'input'>, 'size'> & {
  error?: string;
  label: string;
  wrapperClassName?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, disabled, label, id, wrapperClassName, ...props }, ref) => (
    <div ref={ref} className={cn('w-full', wrapperClassName)}>
      <div className="relative">
        <label
          htmlFor={id}
          className="absolute top-[2px] left-3 px-1 text-xs leading-normal tracking-[0.4px] font-ubuntu -translate-y-1/2 bg-greyscale-dark text-white"
        >
          {label}
        </label>
        <input
          ref={ref}
          className={cn(
            'px-[9px] pt-4 pb-3 rounded-lg w-full outline-none transition-all bg-transparent disabled:cursor-not-allowed border-white/50 border-[3px] tracking-[0.15px] text-white border-white focus:border-primary text-base leading-[1.575] font-ubuntu placeholder-greyscale-400',
            className
          )}
          disabled={disabled}
          id={id}
          {...props}
        />
      </div>
      {error && <span className="inline-block mt-1 text-fail-main text-xs">{error}</span>}
    </div>
  )
);
