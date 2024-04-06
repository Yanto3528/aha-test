import {
  useContextMonths,
  useContextYears,
  useContextYearsPropGetters,
} from '@rehookify/datepicker';

import { cn } from '@/lib/utils';

import { yearStyles } from '../Calendar.styles';
import { CalendarSectionState } from '../Calendar.types';

import { CalendarHeader } from './CalendarHeader';

type CalendarYearSectionProps = {
  setCurrentSection: (section: CalendarSectionState) => void;
  selectedDate: Date;
};

export function CalendaryYearSection({ setCurrentSection }: CalendarYearSectionProps) {
  const { years } = useContextYears();
  const { months } = useContextMonths();
  const { yearButton, nextYearsButton, previousYearsButton } = useContextYearsPropGetters();

  const currentYear = months[0].$date.getFullYear();

  return (
    <div>
      <CalendarHeader prevButtonProps={previousYearsButton()} nextButtonProps={nextYearsButton()}>
        <p className="text-center">{currentYear}</p>
      </CalendarHeader>
      <ul className="grid grid-cols-4 gap-x-[9px] gap-y-6 px-6 mt-[18px]">
        {years.map((dpYear) => {
          const { onClick, ...yearButtonProps } = yearButton(dpYear);

          return (
            <li key={dpYear.year}>
              <button
                type="button"
                onClick={(event) => {
                  onClick?.(event);
                  setCurrentSection('date');
                }}
                className={cn(
                  yearStyles({
                    selected: dpYear.year === currentYear,
                  })
                )}
                {...yearButtonProps}
              >
                {dpYear.year}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
