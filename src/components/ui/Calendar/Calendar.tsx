'use client';

import { useCallback, useState } from 'react';

import { DatePickerStateProvider } from '@rehookify/datepicker';
import dayjs from 'dayjs';

import { cn } from '@/lib/utils';

import { CalendarProps, CalendarSectionState } from './Calendar.types';
import { CalendarDateSection, CalendaryYearSection } from './components';
import { CalendarFooterButtons } from './components/CalendarFooterButtons';

export function Calendar({ value, onChange, onCancel }: CalendarProps) {
  const [selectedDates, setSelectedDates] = useState<Date[]>([value || new Date()]);
  const [currentSection, setCurrentSection] = useState<CalendarSectionState>('date');

  const handleConfirmDate = useCallback(() => {
    onChange?.(selectedDates[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedDates]);

  return (
    <div className="bg-greyscale-light rounded-lg min-w-[320px] shadow-calendar">
      <DatePickerStateProvider
        config={{
          selectedDates,
          onDatesChange: setSelectedDates,
          calendar: {
            startDay: 0,
          },
          locale: {
            weekday: 'short',
            day: 'numeric',
          },
          years: {
            numberOfYears: 20,
          },
        }}
      >
        <div className="px-6 pt-4 pb-3">
          <span className="mb-1 inline-block">{dayjs(selectedDates[0]).format('DD')}</span>
          <h4 className="text-[32px] font-bold leading-[44px]">
            {dayjs(selectedDates[0]).format('MMM, YYYY')}
          </h4>
        </div>
        {currentSection === 'date' && <CalendarDateSection setCurrentSection={setCurrentSection} />}
        {currentSection === 'year' && (
          <CalendaryYearSection
            setCurrentSection={setCurrentSection}
            selectedDate={selectedDates[0]}
          />
        )}
        <CalendarFooterButtons
          className={cn(currentSection === 'year' && 'mt-[27px]')}
          onCancel={onCancel}
          onConfirm={handleConfirmDate}
        />
      </DatePickerStateProvider>
    </div>
  );
}
