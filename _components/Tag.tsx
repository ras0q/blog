export default ({ tag }: { tag: string }) => (
  <a class="text-blue-5" href={`/tags/${tag}`}>
    #{tag}
  </a>
);
