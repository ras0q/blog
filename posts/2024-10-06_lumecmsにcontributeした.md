---
title: LumeCMSにcontributeした
draft: false
tags: []
---
これです。v0.6.6から使えるようになっている。

途中で指摘の示すところを勘違いしてごちゃごちゃしているので正直中身はそこまで見てほしくない🫣

[feat: name files dynamically from the created fields by ras0q · Pull Request #26 · lumeland/cms](https://github.com/lumeland/cms/pull/26)

## 解説

LumeCMSにはフィールドからファイル名を決定できる`nameField`というプロパティがある。

[Collections - Lume](https://lume.land/cms/configuration/collections/#namefield)

従来ここには`nameField: "title"`といった指定をしてtitleフィールドをそのまま参照する形だった。例えばこのブログでは、

1. CMSの設定でtitleフィールドに`2024-10-06_`という接頭語をあらかじめ入力させておく
2. タイトルを付け足し、titleフィールドを`2024-10-06_LumeCMSにcontributeした`に変更する
3. 記事を書きCreateボタンを押す
4. ファイル名が`2024-10-06_lumecmsにcontributeした.md`になり、Markdownファイルのfrontmatterには`title: 2024-10-06_LumeCMSにcontributeした`が設定される

という手順を取っていた。

この方法だとファイルが日付順で表示できるがブログに表示されるタイトルにも日付が入っていて冗長である。

このPRではファイル名にのみ日付が入るように改善した。

[feat: name files dynamically from the created fields by ras0q · Pull Request #26 · lumeland/cms](https://github.com/lumeland/cms/pull/26)

コードで説明すると以下のような設定が可能になる。[ブログの変更対応](https://github.com/ras0q/blog/commit/2d297b436293b7fe3b9e42626993da9265ab570d)

この変更によってタイトルに日付を入れなくても記事作成時にファイル名にのみ日付接頭語を付けることが可能になった🎉

```diff
- nameField: "title",
+ nameField: (changes) => `${nowDate}_${changes.title}`,
```

正直LumeCMSはまだ使いづらいところがいくつかあるので、適宜改善に協力したいと思っている（もちろんLume本体にも）。
