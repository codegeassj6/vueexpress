<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Voucher;
use Auth;
use App\Models\User;
use App\Models\UserVoucher;

class VoucherController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($id)
    {
        $vouchers = Voucher::where('store_id', $id)->get();

        foreach($vouchers as $voucher) {
            $voucher->details = html_entity_decode($voucher->details);
            $userVoucher = UserVoucher::where('voucher_id', $voucher->id)->where('store_id', $voucher->store_id)->first();

            if($userVoucher) {
                $voucher->claim = true;
            } else {
                $voucher->claim = false;
            }
        }

        return $vouchers;
    }

    public function claimVoucher(Request $request) {
        UserVoucher::create([
            'user_id' => Auth::id(),
            'voucher_id' => $request->input('id'),
            'store_id' =>  $request->input('store_id')
        ]);
        return $request->all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
