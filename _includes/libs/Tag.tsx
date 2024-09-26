export default ({ tag }: { tag: string }) => (
  <a class="text-blue-6" href={`/tags/${tag}`}>
    #{tag}
  </a>
);
