---
title: "GitHub IssueをCMSにした"
draft: true
---

ブログを書くのに[LumeCMS](https://lume.land/cms/)を使っていたんですが、特にモバイルで書くのが辛くてモチベーションが上がりづらい状況にありました。一応LumeCMSの機能でBasic認証をかけられるのでかけていたんですが、iOSだとなぜかページ遷移ごとにパスワードが要求され、そこそこストレスだったことが大きいです。

ブログ自体はGitHubで公開しているのでGitHub認証できるCMSがよかったのですが、自分がよくモバイル版のGitHubを半分SNSとして見ていることもあり、GitHub Issueで管理するようにしました。 → [blog/.github/workflows/post.yaml](https://github.com/ras0q/blog/blob/main/.github/workflows/post.yaml)

`post`ラベルを付けた新規Issueに反応し、Draft状態の記事を作成します。Issueが更新されたら記事も更新し、IssueがCloseされたら記事のDraftを外して公開します。`tag:{タグ名}`ラベルを付けてタグを管理することもできます

一応LumeCMSも残してはいるので、しばらくは併用して使ってみます。

まだ適当に作った段階でいくつか問題もあるので、それもいつか解消出来たらと思います。

- タイトルを変えたら前のファイルが残る
- Issueじゃないとこで記事ファイルを変更した場合の同期
- ブログでは1行改行は改行とみなさないが、GitHubのプレビューでは改行とみなされてしまう
- Draft状態でもGitHubでは公開してるので全然見れてしまう

---

ついでにブログのUIをちょっと変えたりしてみました。気が向いたらダークモード対応とかもします。
