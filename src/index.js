import { format } from 'date-fns';

const currentDate = new Date();
const formattedDate = format(currentDate, 'MMMM do, yyyy');

console.log(`The current date is ${formattedDate}`);