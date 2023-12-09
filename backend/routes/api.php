<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
 */

// -- Public routes below ----

// The public login route.
Route::post('/login', [AuthController::class, 'login']);

// The public register route.
Route::post('/register', [UserController::class, 'register']);

// Public route to check if this app is online.
Route::get('/uptime', function (Request $request) {
    return response()->json(['message' => 'This service is online.'], 200);
});

// -- Private routes below ----

// Group that requires user to be authenticated
Route::middleware(['auth:sanctum'])->group(function () {

    //The logout route. Needs to be logged in first.
    Route::post('/logout', [AuthController::class, 'logout']);

    // If the user has the token, return user information for testing.
    Route::get('/checkauth', function (Request $request) {
        return response()->json(['message' => 'You are authenticated.'], 200);
    });

    // If the user has the token, return user information for testing.
    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    // Route for changing username
    Route::post('/changename', [UserController::class, 'changeName']);

    // Route for changing password
    Route::post('/changepassword', [UserController::class, 'changePassword']);

});
