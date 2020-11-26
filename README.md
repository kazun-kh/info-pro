
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

- has_many :maker_users
- has_many :makers, through: maker_users
- has_many :room_users
- has_many :rooms, through: room_users
- has_many :messages

## makers テーブル

| Column    | Type       | Options                        
| ---------------------- | ---------- |------------------- |
| name                   | string     | null: false        |
| info                   | text       | null: false        |
| url                    | string     | null: false        |
| image                  | text       | null: false        |


### Association

- has_many :maker_users
- has_many :users, through: maker_users
- has_many :rooms
- has_many :messages

## maker_users テーブル

| Column | Type       | Options                        |
| ------ | ---------- | ------------------------------ |
| user   | references | null: false, foreign_key: true |
| maker  | references | null: false, foreign_key: true |

### Association

- belongs_to :user
- belongs_to :maker

## rooms テーブル

| Column   | Type       | Options           |
| -------- | ---------- | ----------------- |
| maker    | references | foreign_key: true |
| name     | string     | null: false       |

### Association

- has_many :room_users
- has_many :users, through: room_users
- belongs_to :maker
- has_many :messages

## room_users テーブル

| Column | Type       | Options                        |
| ------ | ---------- | ------------------------------ |
| user   | references | null: false, foreign_key: true |
| room   | references | null: false, foreign_key: true |

### Association

- belongs_to :user
- belongs_to :room

## messages テーブル

| Column  | Type       | Options                        |
| ------- | ---------- | ------------------------------ |
| content | string     |                                |
| user    | references | null: false, foreign_key: true |
| maker   | references | null: false, foreign_key: true |
| room    | references | null: false, foreign_key: true |

### Association

- belongs_to :user
- belongs_to :maker
- belongs_to :room