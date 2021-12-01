import { parseISO, format } from 'date-fns'

export default function Date({ dateString, className }) {
	const date = parseISO(dateString)
	return <time className={className} dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
}

// view different format string options here: https://date-fns.org/v2.16.1/docs/format