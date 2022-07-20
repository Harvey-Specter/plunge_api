<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

return new class extends Migration
{
	public function up()
	{
		Schema::create('categories', function(Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('code')->default('');
            $table->string('remark')->nullable();
            $table->integer('user_id')->unsigned()->default(0);
            $table->integer('stock_count')->unsigned()->default(0);
            // $table->date('create_time');
            $table->timestamps();
        });
	}

	public function down()
	{
		Schema::drop('categories');
	}
};
