<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('co_jp', function (Blueprint $table) {
            $table->increments('id');
            $table->Integer('date')->unsigned();
            $table->string('code')->index();
            $table->string('name');
            $table->string('market');

            $table->string('cate33_code');
            $table->string('cate33');
            $table->string('cate17_code');
            $table->string('cate17');
            $table->string('size_code');
            $table->string('size');
            $table->timestamps();
            // $table->tinyInteger('score')->unsigned()->default(0);

            // $table->unique(['category_id','code']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('co_jp');
    }
};
