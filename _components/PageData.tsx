export default (data: Lume.Data) => (
  <div class="py-xs space-y-lg">
    <div class="flex gap-xs items-center text-sm font-medium">
      <p class="m-0 opacity-70">{data.date.toLocaleDateString("sv-SE")}</p>
      {data.tags.map((tag) => <data.comp.Tag key={tag} tag={tag} />)}
    </div>
  </div>
);
