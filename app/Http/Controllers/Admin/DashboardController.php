<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
   public function index (){
    
    return 'i am Admin';
    //return view('admin.dashboard');
   }
}
