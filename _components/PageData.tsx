export default (data: Lume.Data) => (
  <div class="py-xs grid grid-cols-[auto_1fr] gap-xs text-sm font-medium">
    <p class="m-0 text-coolgray-500 dark:text-coolgray-400">
      {data.date.toLocaleDateString("sv-SE")}
    </p>
    <div class="flex gap-x-xs flex-wrap">
      {data.tags.map((tag) => <data.comp.Tag key={tag} tag={tag} />)}
    </div>
  </div>
);
