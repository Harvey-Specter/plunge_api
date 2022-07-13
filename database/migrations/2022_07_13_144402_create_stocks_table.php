<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

return new class extends Migration
{
	public function up()
	{
		Schema::create('stocks', function(Blueprint $table) {
            $table->increments('id');
            $table->Integer('price_id')->unsigned();
            $table->date('day')->index();
            $table->string('code')->index();
            $table->Integer('user_id')->unsigned();
            $table->integer('category_id')->unsigned();
            $table->string('pattern');
            $table->string('market');
            $table->string('remark')->nullable ();
            $table->timestamps();
        });
	}

	public function down()
	{
		Schema::drop('stocks');
	}
};
