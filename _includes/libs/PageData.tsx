import Tag from "./Tag.tsx";

export default ({ tags, date }: { tags: string[]; date: Date }) => (
  <div class="py-xs space-y-lg">
    <div class="flex gap-xs text-sm">
      <p class="opacity-60">{date.toLocaleDateString("sv-SE")}</p>
      {tags.map((tag) => <Tag tag={tag} />)}
    </div>
  </div>
);
