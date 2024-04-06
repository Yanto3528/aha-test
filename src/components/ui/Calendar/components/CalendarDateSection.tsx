import {
  useContextCalendars,
  useContextDatePickerOffsetPropGetters,
  useContextDaysPropGetters,
} from '@rehookify/datepicker';

import { cn } from '@/lib/utils';

import { dayStyles } from '../Calendar.styles';
import { CalendarSectionState } from '../Calendar.types';

import { CalendarHeader } from './CalendarHeader';

type CalendarDateSectionProps = {
  setCurrentSection: (section: CalendarSectionState) => void;
};

export function CalendarDateSection({ setCurrentSection }: CalendarDateSectionProps) {
  const { calendars, weekDays } = useContextCalendars();
  const { dayButton } = useContextDaysPropGetters();
  const { addOffset, subtractOffset } = useContextDatePickerOffsetPropGetters();

  const { days, month, year } = calendars[0];

  const handleYearClick = () => {
    setCurrentSection('year');
  };

  return (
    <div>
      <CalendarHeader
        prevButtonProps={{ ...subtractOffset({ months: 1 }) }}
        nextButtonProps={{ ...addOffset({ months: 1 }) }}
      >
        <button type="button" onClick={handleYearClick}>
          <p className="text-center">
            {month} {year}
          </p>
        </button>
      </CalendarHeader>
      <div className="px-4 mt-2">
        <ul className="grid grid-cols-7 gap-y-2 gap-x-1 mb-3">
          {weekDays.map((day) => (
            <li key={day}>
              <p className="text-center text-greyscale-500 text-[11px] leading-[13px]">
                {day.substring(0, 2)}
              </p>
            </li>
          ))}
        </ul>
        <ul className="grid grid-cols-7 gap-x-1">
          {days.map((date) => (
            <li key={date.$date.toString()}>
              <button
                type="button"
                className={cn(
                  dayStyles({
                    disabled: date.disabled,
                    inOtherMonth: !date.inCurrentMonth,
                    now: date.now,
                    selected: date.selected,
                  })
                )}
                {...dayButton(date)}
              >
                {date.day}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
