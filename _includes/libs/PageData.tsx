import { calcDuration } from "./duration.ts";

export default ({ tags, date }: { tags: string[]; date: Date }) => (
  <div class="py-xs flex gap-xs text-sm">
    <p class="opacity-60">{`${calcDuration(date)}日前`}</p>
    {tags.map((tag) => <a class="text-blue" href={`/tags/${tag}`}>#{tag}</a>)}
  </div>
);