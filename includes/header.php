<?php
declare(strict_types=1);

require_once __DIR__ . '/helpers.php';
$cfg = site_config();

$pageTitle = isset($pageTitle) ? $pageTitle . ' — ' . $cfg['brand']['name'] : $cfg['brand']['name'] . ' — ' . $cfg['brand']['tagline'];
$pageDescription = $pageDescription ?? $cfg['brand']['description'];
$activePage = $activePage ?? 'home';
?>
<!DOCTYPE html>
<html lang="en" class="dark">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= e($pageTitle) ?></title>
    <meta name="description" content="<?= e($pageDescription) ?>">
    <meta name="theme-color" content="#000000">
    <meta property="og:title" content="<?= e($pageTitle) ?>">
    <meta property="og:description" content="<?= e($pageDescription) ?>">
    <meta property="og:type" content="website">

    <!-- Sentician SVG Favicon -->
    <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='14' fill='%23000000'/%3E%3Cpath d='M16 46L30.5 17C31.2 15.6 32.8 15.6 33.5 17L48 46H40.5L32 28.5L23.5 46H16Z' fill='%23F8FAFC'/%3E%3Cpolygon points='32,35 38.5,46 25.5,46' fill='%230084FF'/%3E%3C/svg%3E">

    <!-- Typography: Inter (https://fonts.google.com/specimen/Inter) -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">

    <style>html,body{background:#000000;color:#F8FAFC;margin:0;}</style>
    <link rel="stylesheet" href="assets/css/styles.css?v=<?= filemtime(__DIR__ . '/../assets/css/styles.css') ?>">
</head>
<body>
<a class="skip-link" href="#main-content">Skip to main content</a>

<header class="site-header" id="site-header">
    <div class="container header-inner">
        <a href="index.php" class="brand-link" aria-label="Sentician Home">
            <img src="assets/images/sentician-logo-clean.png" alt="Sentician" class="brand-logo-img">
        </a>

        <!-- Centered Floating Pill Navigation (Sentician Header) -->
        <nav class="main-nav" aria-label="Primary Navigation">
            <?php foreach ($cfg['nav'] as $item): ?>
                <?php if ($item['slug'] === 'integrations') continue; ?>
                <?php $isActive = ($activePage === $item['slug']); ?>
                <a href="<?= e($item['href']) ?>"
                   class="nav-link <?= $isActive ? 'is-active' : '' ?>"
                   <?= $isActive ? 'aria-current="page"' : '' ?>>
                    <?= e($item['label']) ?>
                </a>
            <?php endforeach; ?>
        </nav>

        <div class="header-actions">
            <a href="contact.php" class="btn-glow-pill btn-glow-pill--sm">Get Started</a>
            <button type="button" class="mobile-menu-btn" id="mobileMenuBtn" aria-expanded="false" aria-controls="mobileDrawer" aria-label="Toggle Menu">
                <span></span>
                <span></span>
            </button>
        </div>
    </div>

    <!-- Mobile Navigation Drawer -->
    <div class="mobile-drawer" id="mobileDrawer" hidden>
        <div class="container mobile-drawer-inner">
            <?php foreach ($cfg['nav'] as $item): ?>
                <?php $isActive = ($activePage === $item['slug']); ?>
                <a href="<?= e($item['href']) ?>" class="mobile-nav-link <?= $isActive ? 'is-active' : '' ?>">
                    <?= e($item['label']) ?>
                </a>
            <?php endforeach; ?>
            <div class="mobile-drawer-actions">
                <a href="contact.php" class="btn-glow-pill">Get Started</a>
                <a href="<?= e($cfg['brand']['linkedin_url']) ?>" target="_blank" rel="noopener noreferrer" class="btn btn-ghost">LinkedIn</a>
            </div>
        </div>
    </div>
</header>

<main id="main-content">
