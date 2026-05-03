<?php

namespace App\Http\Controllers;

abstract class Controller
{
    public static array $ROUTE_MAP = [
        "/" => "Dashboard",
        "/projects" => "Projects",
    ];

    public static function appendRoutes(array $data): array
    {
        $data["routes"] = self::$ROUTE_MAP;
        return $data;
    }
}
