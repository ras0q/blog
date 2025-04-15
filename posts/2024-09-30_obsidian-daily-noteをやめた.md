---
title: Obsidian Daily Noteをやめた
draft: false
tags:
  - Obsidian
---
日常のメモやドキュメント管理に[Obsidian](https://obsidian.md/)を使っている。

[Daily notes](https://help.obsidian.md/Plugins/Daily+notes)という標準プラグインがあり愛用していたが、1ファイルに書くことが少なくなったので月ごとにファイルをまとめるようにした。

以下Obsidian Vaultからの転記

---

## 経緯・目的

- Daily Noteに書くことが日記しかなくなった
	- 日記を書かない日は無駄にファイルだけが増えていくことに
- 1ファイルで1日分の日記しか見れないのもプラグインを入れないと不便
	- Daily Noteを結合して見れるみたいなプラグインがあったりする
- 日記を書くだけなら月ごとにファイルを作ってそこに書き込んでいくのがよさそう

## 作業

週/月/年ノートを作る[liamcain/obsidian-periodic-notes](https://github.com/liamcain/obsidian-periodic-notes)があるが、できれば標準の[[Daily Notes]]プラグインのみで済ませたい

Data Formatを月ごとにすれば日が変わっても同じノートを使い続けられるのでそれでいこう

Data Formatを`YYYY/MM/YYYY-MM-DD`にしていたが（[[2024-09-14_daily noteのフォルダを年月で区切る]]）、`YYYY/[M]MM`に変更し`daily/2024/M09`のような形式にした

[[_templates/monthly]]を作成しとりあえず以下のようなテンプレートを作成する
```markdown
## 今月の目標

- 

## Journal
```

`_templates/daily`を削除しmonthlyを[[Daily Notes]]のテンプレートに変更

以下のスクリプトをNode.jsで実行し過去のJournalをMonthly Noteに移す
```javascript
const fs = require('fs');
const path = require('path');

const rootDir = 'daily'; // ルートディレクトリ

// 処理対象の年
const years = [2023, 2024];

years.forEach(year => {
    const yearDir = path.join(rootDir, year.toString());
    const months = fs.readdirSync(yearDir);

    months.forEach(month => {
        const monthDir = path.join(yearDir, month);
        const files = fs.readdirSync(monthDir);

        let monthlyContent = [];

        files.forEach(file => {
            const filePath = path.join(monthDir, file);
            const content = fs.readFileSync(filePath, 'utf8');

            // ## Journal がない場合も考慮
            const journalContent = content.split('## Journal').at(1)?.trim() ?? content;

            // ### hh:mm が含まれる場合と含まれない場合で処理を分ける
            if (/### (\d{2}:\d{2})/g.test(journalContent)) {
                const replacedContent = journalContent.replace(/### (\d{2}:\d{2})/g, `### ${file.replace(/.md$/, '')} $1`);
                monthlyContent.push(replacedContent);
            } else {
                const newContent = `### ${file.replace(/.md$/, '')}\n${journalContent}`;
                monthlyContent.push(newContent);
            }
        });

        // 月ごとのファイル生成
        const monthlyFile = path.join(yearDir, `M${month.padStart(2, '0')}.md`);
        const header = `## 今月の目標\n\n- \n\n## Journal\n`;
        fs.writeFileSync(monthlyFile, header + monthlyContent.join('\n'));
    });
});
```

既存のDaily Noteを消す

[[QuickAdd]]とか[[Templater]]の設定をもよしなに変える
