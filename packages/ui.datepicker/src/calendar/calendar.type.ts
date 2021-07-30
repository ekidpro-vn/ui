import dayjs from '../context/parser';

export type CalendarProps = {
  day: dayjs.Dayjs;
  mode: 'single' | 'multi' | 'range';
  transparent?: boolean;
};
