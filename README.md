





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