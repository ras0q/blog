import lumeCMS from "lume/cms/mod.ts";
import GitHub from "lume/cms/storage/github.ts";
import { Octokit } from "octokit";

const username = Deno.env.get("CMS_USERNAME");
const password = Deno.env.get("CMS_PASSWORD");
const isRemote = username && password;

const cms = lumeCMS({
  auth: isRemote
    ? {
        method: "basic",
        users: {
          [username]: password,
        },
      }
    : undefined,
});

if (isRemote) {
  cms.storage(
    "src",
    new GitHub({
      client: new Octokit({ auth: Deno.env.get("GITHUB_TOKEN") }),
      owner: "ras0q",
      repo: "blog",
    })
  );
}

const datePattern = "\\d{4}-\\d{2}-\\d{2}";
const nowDate = new Date().toLocaleDateString("sv-SE"); // YYYY-MM-DD

cms.collection({
  name: "pages",
  store: "src:posts/**/*.md",
  fields: [
    {
      name: "title",
      type: "text",
      attributes: {
        required: true,
        pattern: datePattern + "_.+",
      },
      value: nowDate + "_",
    },
    {
      name: "draft",
      type: "checkbox",
    },
    {
      name: "tags",
      type: "list",
      label: "Tags",
      init(field) {
        const { data } = field.cmsContent;
        field.options = data.site?.search.values("tags");
      },
    },
    {
      name: "content",
      type: "markdown",
    },
  ],
  nameField: "title",
});

cms.upload("uploads: Uploaded files", "src:public", "/");

export default cms;
