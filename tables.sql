CREATE TABLE `pattern_day` (
`id` int(10) unsigned NOT NULL AUTO_INCREMENT,
`day` date NOT NULL,
`code` varchar(16) COLLATE utf8mb4_unicode_ci NOT NULL,
`pattern` varchar(16) COLLATE utf8mb4_unicode_ci NOT NULL,
`price` double NOT NULL DEFAULT 0,
`market` varchar(16) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
`remark` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
`create_time` timestamp NULL DEFAULT current_timestamp(),
PRIMARY KEY (`id`),
UNIQUE KEY `idx_date` (`day`,`code`,`pattern`) USING BTREE,
KEY `code` (`code`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `Categories` (
`id` int(10) unsigned NOT NULL AUTO_INCREMENT,
`name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
`code` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
`owner` int(10) unsigned NOT NULL DEFAULT 0 ,
`remark` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
`create_time` timestamp NULL DEFAULT current_timestamp(),
PRIMARY KEY (`id`),
UNIQUE KEY `idx_user` (`user`,`name`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ;

php artisan make:scaffold Categories --schema="name:string,code:string,remark:string:nullable,owner:integer:unsigned:default(0), stock_count:integer:unsigned:default(0), create_time:date"

php artisan make:scaffold Topic --schema="title:string:index,body:text,user_id:bigInteger:unsigned:index,category_id:integer:unsigned:index,reply_count:integer:unsigned:default(0),view_count:integer:unsigned:default(0),last_reply_user_id:integer:unsigned:default(0),order:integer:unsigned:default(0),excerpt:text:nullable,slug:string:nullable"

title:string:index
body:text
user_id:bigInteger:unsigned:index
category_id:integer:unsigned:index
reply_count:integer:unsigned:default(0)
view_count:integer:unsigned:default(0)
last_reply_user_id:integer:unsigned:default(0)
order:integer:unsigned:default(0)
excerpt:text:nullable
slug:string:nullable

CREATE TABLE `category_detail` (
`id` int(10) unsigned NOT NULL AUTO_INCREMENT,
`category_id` date NOT NULL,
`pattern_day_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
`code` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
`remark` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
`create_time` timestamp NULL DEFAULT current_timestamp(),
PRIMARY KEY (`id`),
UNIQUE KEY `idx_cate` (`category_id`,`code`) USING BTREE,
KEY `code` (`code`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ;