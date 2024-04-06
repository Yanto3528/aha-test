export type CalendarProps = {
  value?: Date;
  onChange?: (date: Date) => void;
  onCancel?: () => void;
};

export type CalendarSectionState = 'date' | 'year';
