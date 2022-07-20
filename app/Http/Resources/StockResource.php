<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class StockResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'price_id' => $this->price_id,
            'day' =>  $this->day,
            'code' =>  $this->code,
            'user_id' => (int) $this->user_id,
            'category_id' => (int) $this->category_id,
            'pattern' => $this->pattern,
            'remark' => $this->remark,
            'created_at' => (string) $this->created_at->date('Y-m-d-H:i:s'),
            'updated_at' => (string) $this->updated_at,
        ];
    }
}

//  $table->Integer('price_id')->unsigned();
//             $table->date('day')->index();
//             $table->string('code')->index();
//             $table->Integer('owner')->unsigned();
//             $table->integer('category_id')->unsigned();
//             $table->integer('pattern')->unsigned()->default(0);
//             $table->string('market');
//             $table->string('remark')->nullable ();
