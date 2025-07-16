import lib from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

lib.extend(relativeTime);

export const dayjs = lib;
