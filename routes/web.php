<?php

use Illuminate\Support\Facades\Route;
use App\Http\Resources\Tutorial as TutorialResource;
use App\Tutorial;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');


Route::get('/tutorial', function () {
    return TutorialResource::collection(Tutorial::all());
});
