# WU DONGNI Portfolio

Web Designer / UI・UX Designer のポートフォリオサイトです。

## 特徴

- **シングルページレイアウト** - メインページですべての情報を確認できます
- **作品詳細ページ** - 各作品の詳細を個別ページで紹介
- **レスポンシブデザイン** - PC・タブレット・スマートフォン対応
- **アニメーション** - GSAP による滑らかなスクロールアニメーション
- **インタラクティブ要素** - カスタムカーソル、磁気ボタン、カードチルトエフェクト

## ファイル構成

```
portfolio/
├── index.html              # メインページ
├── README.md
├── css/
│   ├── style.css          # メインスタイル（他CSSをimport）
│   ├── variables.css      # CSS変数
│   ├── base.css           # ベーススタイル
│   ├── components.css     # コンポーネント
│   ├── layout.css         # レイアウト
│   ├── animations.css     # アニメーション
│   └── work-detail.css    # 作品詳細ページ用
├── js/
│   ├── main.js            # メインJavaScript
│   └── animations.js      # GSAPアニメーション
├── assets/
│   ├── svg/               # SVGアイコン
│   └── resume.pdf         # 履歴書（要追加）
└── works/
    ├── work-01.html       # 作品詳細ページ
    ├── work-02.html
    ├── work-03.html
    ├── work-04.html
    └── work-05.html
```

## カスタマイズ方法

### 1. 個人情報の変更

`index.html` で以下を編集：
- 名前（`hero__title`、`profile__name`）
- 肩書き
- 自己紹介文
- 学歴（`education-timeline`）
- 経験・実績（`experience-list`）
- スキル（`skills-section`）
- メールアドレス（`contact-card__email`、`copy-btn` の `data-copy`）
- SNSリンク

### 2. 作品の変更

**メインページ（index.html）:**
- `works-grid` 内の各 `work-card-v2` を編集
- 画像、タイトル、説明、タグを変更
- 受賞作品には `work-card-v2__award` を追加

**詳細ページ（works/work-XX.html）:**
- コンセプト、制作期間、使用ツールなどを編集
- 画像を実際の作品画像に差し替え

### 3. 画像の差し替え

placeholder画像を実際の画像に差し替えてください：
- プロフィール写真
- 作品サムネイル
- 作品詳細画像
- 趣味の写真

### 4. 色の変更

`css/variables.css` で CSS 変数を編集：

```css
--accent: #7eb8da;        /* メインアクセントカラー */
--accent-light: #b8d4e8;  /* 明るいアクセント */
--accent-dark: #5a9bc4;   /* 暗いアクセント */
```

### 5. 履歴書の追加

`assets/` フォルダに `resume.pdf` を追加してください。
ダウンロード時のファイル名は `index.html` の `download` 属性で設定されています：

```html
<a href="assets/resume.pdf" download="WU_DONGNI_履歴書.pdf">
```

## デザイン要素

### 装飾エフェクト
- 手書き風テキスト（Caveat フォント）
- 浮遊する星のアニメーション
- 点線フレーム
- テープ風装飾
- ステッカー風ラベル
- ピクセルハート

### インタラクティブ機能
- カスタムカーソル（PC のみ）
- 磁気ボタンエフェクト
- カードの 3D チルトエフェクト
- テキストスクランブルアニメーション
- メールアドレスコピーボタン
- スムーズスクロール

## 使用技術

- HTML5
- CSS3（CSS Variables, Flexbox, Grid）
- JavaScript（Vanilla JS）
- GSAP（GreenSock Animation Platform）
- Google Fonts（Noto Sans JP, Montserrat, Caveat）

## ブラウザサポート

- Chrome（推奨）
- Firefox
- Safari
- Edge

## ローカルでの確認

ファイルをそのままブラウザで開くか、ローカルサーバーを使用してください：

```bash
# Python 3
python -m http.server 8000

# Node.js (npx)
npx serve
```

---

© 2026 WU DONGNI
