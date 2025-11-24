<?php

namespace App\Http\Controllers;

use App\Models\UsedFeature;
use App\Http\Resources\UsedFeatureResource;
use Inertia\Inertia;

class DashoardController extends Controller
{
    public function index()
    {
        $usedFeatures = UsedFeature::with('feature')
            ->where('user_id', auth()->id())
            ->latest()
            ->paginate();

        return Inertia::render('Dashboard', [
            'usedFeatures' => UsedFeatureResource::collection($usedFeatures),
        ]);
    }
}
