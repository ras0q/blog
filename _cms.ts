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
      repo: "diary",
    })
  );
}

cms.collection("pages: All pages of the site", "src:**/*.md", [
  "date: datetime",
  "content: markdown",
]);

cms.upload("uploads: Uploaded files", "src:assets");

export default cms;
