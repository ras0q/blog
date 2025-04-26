import Tag from "./Tag.tsx";

export default ({ tags, date }: { tags: string[]; date: Date }) => (
  <div class="py-xs space-y-lg">
    <div class="flex gap-xs items-center text-sm font-medium">
      <p class="m-0 opacity-70">{date.toLocaleDateString("sv-SE")}</p>
      {tags.map((tag) => <Tag key={tag} tag={tag} />)}
    </div>
  </div>
);
