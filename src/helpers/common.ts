import {format, toZonedTime} from 'date-fns-tz';

export const formatToUTC = (date: Date | string) =>
  format(toZonedTime(date, 'UTC'), "yyyy-MM-dd'T'HH:mm:ss'Z'", {
    timeZone: 'UTC',
  });
  
export const addBaseURL = (mediaPath: string) =>
  `${import.meta.env.BASE_URL}${mediaPath}`;
