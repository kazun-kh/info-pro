## アプリケーション名
- info-protein
 
## アプリケーション概要
- 情報共有を行えるチャット機能、体重から1日に必要なたんぱく質の計算、各プロテイン公式メーカーへの画面遷移が行えます。

## URL

## テスト用アカウント
- email 
   test@com
- password 
   12qwas

## 利用方法	
- TOPページから新規登録が行えます。新規登録をするとチャット機能が行えるようになりユーザーは任意のルームを作成する事ができますので
各ルームの話題にあった内容でメッセージや画像を投稿して情報共有をする事ができます。

- ログアウト中のユーザーであってもTOPページの「Let's calculate!!!」の入力フォームにてご自身の体重を半角数字で入力すると1日に必要なたんぱく質を非同期で表示する事ができます。

- 各プロテインメーカーのロゴがTOPページにありますので、クリックしていただきますと公式サイトに画面遷移致します。

- TOPページのスライド画像の3枚目に、Amazonのプロテインの売り上げランキング画面へ遷移する事ができます。

## 目指した課題解決
- トレーニングをする方々が、どのようなプロテインを購入しようか悩んでいる時に情報を共有して、その悩みを解決したいと思いました。
プロテインは各メーカーによって、味や価格、溶けやすさや時期によってはセールなども行われるので初めてプロテインを購入しようとしている人や
他のプロテインの購入を考えている方々の為に作成いたしました。

## 洗い出した要件
- Chat機能
プロテインや筋トレについてChat画面を使い、情報共有を行えるようにする為。

- 非同期の計算機能
ユーザーの体重を入力すると1日に必要なたんぱく質が非同期で表示されるようにする為。

- ユーザー管理機能
ユーザー登録するとchat機能が利用できます。

- プレビュー機能
画像を選択してプレビューできます。

- ページネーション機能
ページネーション処理をする事により、今自分がどのあたりのページを見ているかがわかり、どのくらいの情報量があるかを一目で確認できます。

## 実装した機能についてのGIFと説明
#### Ruby on railsのgemによる「devise」を導入しました。新規登録とログイン、ログアウトが行えるるようになり、ログイン後はheaderに「新規登録」で登録したユーザーのニックネームが常時表示されます。ユーザー登録する事により、Chat機能が利用できるようになります。ログアウト状態のユーザーがChat画面に遷移しようとすると、ログイン画面へ遷移します。
- 新規登録画面 https://i.gyazo.com/86bf0fa4f147af30a4d78150a21c1982.gif
- ログインとログアウト画面 https://i.gyazo.com/41292294c1c8d19461a5b29685a7691c.gif
- ログアウト状態のユーザーがChat画面に遷移しようとすると、
  ログイン画面へ遷移 https://i.gyazo.com/ba6b1df82fa995f0b7794ac5c400556b.gif

#### トップページのLet's calculateにある入力フォームで自身の体重を半角英数字を入力すると非同期で入力フォーム右側に1日に必要なおおよそのたんぱく質量が表示されます。この機能はクライアントサイドのものなので、JavaScriptを使用して実装を行いました。尚、ログアウト中のユーザーも利用する事ができます。
- 入力フォームに体重を入力後非同期で計算画面 https://i.gyazo.com/5914b3e4034ca61d07175d396d61ad69.gif

#### ユーザーはChatルームを作成することができます。各ユーザー同士でメッセージの投稿をする事ができます。その際ログイン中のユーザー投稿はChat画面右側、それ以外の投稿はChat画面左側に表示されます。画像の投稿が行えます。ユーザーは各テーブルを削除することが出来ます。
- 新規ルーム作成画面 https://i.gyazo.com/3743911f7a9ddcadf3ed39696159e78c.gif
- メッセージの投稿画面、ルームの削除画面 https://i.gyazo.com/984102a4cbc550036681b6f9cbc62e45.gif

#### 新規の画像を投稿するときに、どの画像が選択されているかわかりやすくなるようにプレビュー機能を実装しました。この機能はクライアントサイドのものなので、JavaScriptを使用して実装を行いました。尚、一度画像をプレビューした後に違う画像を選択すると画像が切り替わります。
- プレビュー画像の切替画面 https://i.gyazo.com/744ede4bd4e72e51be2b0bf38eafd649.gif

#### Ruby on railsのgemによる「kaminari」を導入しました。Chat画面にてコメントを10件ずつ1つのページとして表示する事ができます。「bootstrap」も利用し、使いやすい見た目になっています、マウスを上に載せた箇所が丸くなります。一番新しいコメントのページから一番古いページにすぐ画面遷移が行えます。
- ページネーションの表示画面 https://i.gyazo.com/3ca0ccc705257e0cae5e1a93467c987c.gif

## 実装予定の機能
- メッセージの削除機能
- ユーザーのプロフィール情報
- メッセージの非同期通信、リアルタイムチャット

## データベース設計
- ER図
https://i.gyazo.com/660f5c25ccd0d9ae7525abcbfb148526.png


# テーブル設計

## users テーブル

| Column               | Type   | Options     |
| ---------------------| ------ | ----------- |
| email                | string | null: false |
| encrypted_password   | string | null: false |
| nickname             | string | null: false |
| my_protein           | string |             |
| profile              | text   |             |

### Association

- has_many :workout_room_users
- has_many :workout_rooms, through: room_users
- has_many :workout_messages


## workout_rooms テーブル

| Column   | Type       | Options           |
| -------- | ---------- | ----------------- |
| name     | string     | null: false       |

### Association

- has_many :workout_room_users
- has_many :users, through: room_users
- has_many :workout_messages

## workout_room_users テーブル

| Column       | Type       | Options                        |
| ------------ | ---------- | ------------------------------ |
| user         | references | null: false, foreign_key: true |
| workout_room | references | null: false, foreign_key: true |

### Association

- belongs_to :user
- belongs_to :workout_room

## workout_messages テーブル

| Column           | Type       | Options                        |
| ---------------- | ---------- | ------------------------------ |
| content          | string     |                                |
| user             | references | null: false, foreign_key: true |
| workout_room     | references | null: false, foreign_key: true |

### Association

- belongs_to :user
- belongs_to :workout_room