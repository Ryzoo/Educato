<?php

use Coderello\DynamicRendering\RenderingCriteria\IsCrawler;
use Coderello\DynamicRendering\RenderingCriteria\IsEnabled;
use Coderello\DynamicRendering\RenderingCriteria\IsNotRenderer;
use Coderello\DynamicRendering\RenderingCriteria\IsNotStaticFilePath;

return [

    /*
     * Enable or disable the dynamic rendering.
     */
    'enabled' => env('DYNAMIC_RENDERING_ENABLED', true),

    /*
     * The driver which is used to render the pages dynamically.
     *
     * Available drivers: "prerender", "rendertron".
     */
    'default' => env('DYNAMIC_RENDERER', 'prerender'),

    /*
     * The list of rendering criteria which should be met to render
     * the page dynamically.
     */
    'rendering_criteria' => [
        IsEnabled::class,
        IsNotRenderer::class,
        IsCrawler::class,
        IsNotStaticFilePath::class,
    ],

    /**
     * The list of renderers and their configurations.
     */
    'renderers' => [

        'rendertron' => [
            'url' => env('RENDERTRON_URL', 'http://localhost:3000'),
        ],

        'prerender' => [
            'url' => env('PRERENDER_URL', 'http://localhost:3000'),
        ],

    ],

];
