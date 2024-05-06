import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

export function formatPublicationDate(date: Date) {
  const dataPostagem = date;

  return dayjs().to(dayjs(dataPostagem));
}
