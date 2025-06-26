# ras0q/blog

## Bookmarklet

```js
javascript: (function () {
  const GITHUB_OWNER = "ras0q";
  const GITHUB_REPO = "blog-posts";
  const GITHUB_BRANCH = "main";
  const BASE_PATH = "";
  const BASE_URL =
    `https://github.com/${GITHUB_OWNER}/${GITHUB_REPO}/new/${GITHUB_BRANCH}/${BASE_PATH}`;

  const title = prompt("Enter the title for the new file:");
  if (!title) {
    alert("No title was entered. Operation aborted.");
    return;
  }

  const sanitizedTitle = title.toLowerCase()
    .replace(/[\/\*:?"<>|\\]/g, "")
    .replace(/\s+/g, "-")
    .replace(/--+/g, "-")
    .replace(/^-+|-+$/g, "");
  if (!sanitizedTitle) {
    alert("title is all sanitized. Operation aborted.");
    return;
  }

  const date = (new Date()).toLocaleDateString("sv-SE"); /* YYYY-MM-DD */
  const filename = `${date}_${sanitizedTitle}.md`;

  const fileContent = [
    "---",
    `title: "${title}"`,
    "draft: true",
    "---",
    "",
    "",
  ]
    .join("\n");

  const queryParams = new URLSearchParams({
    filename,
    value: fileContent,
    message: `feat: Add ${filename}`,
  });

  window.open(`${BASE_URL}?${queryParams.toString()}`, "_blank");
})();
```
