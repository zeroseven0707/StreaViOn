<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\SubscriptionPlan;

class SubscriptionPlanTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $subsciptionPlan = [
            [
                'name' => "Basic",
                'price' => 10000,
                'active_period_in_months' => 1,
                'features' => json_encode(["feature 1","feature 2"]),
            ],[
                'name' => "Premium",
                'price' => 100000,
                'active_period_in_months' => 12,
                'features' => json_encode(["feature 1","feature 2","feature 3","feature 4"]),
            ],
            ];
            
            SubscriptionPlan::insert($subsciptionPlan);
    }
}
