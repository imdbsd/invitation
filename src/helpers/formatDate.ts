import { format } from "date-fns";
import { id } from "date-fns/locale";

export default function (date: string | Date, formatStr: string) {
  return format(date, formatStr, {
    locale: id
  });
}
