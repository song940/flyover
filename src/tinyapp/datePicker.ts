import { pcall } from './core';

type DatePickerOption = {
  format?: string,
  currentDate?: string,
  startDate?: string,
  endDate?: string,
};

export const datePicker = (options: DatePickerOption) =>
  pcall('datePicker', options).then(res => res.date);
