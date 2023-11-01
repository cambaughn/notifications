import { formatDistanceToNow, parseISO, isToday } from 'date-fns';

const getDateHeading = (timestamp) => {
   if (isToday(parseISO(timestamp))) {
    return "Today";
  } else {
    return formatDistanceToNow(parseISO(timestamp), { addSuffix: true });
  }
}

const getTimeAgo = (timestamp) => {
  return formatDistanceToNow(parseISO(timestamp), { addSuffix: true });
}

export { getDateHeading, getTimeAgo }