export default ({ tag }: { tag: string }) => (
  <a class="text-coolgray-500" href={`/tags/${tag}/`}>
    #{tag}
  </a>
);
