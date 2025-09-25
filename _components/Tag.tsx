export default ({ tag }: { tag: string }) => (
  <a class="text-coolgray-500 dark:text-coolgray-400" href={`/tags/${tag}/`}>
    #{tag}
  </a>
);
