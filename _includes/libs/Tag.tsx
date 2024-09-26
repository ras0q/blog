export default ({ tag }: { tag: string }) => (
  <a class="text-blue" href={`/tags/${tag}`}>
    #{tag}
  </a>
);
