<?php
declare(strict_types=1);

/**
 * Shared template & security helper functions for the Sentician PHP site.
 */

if (session_status() === PHP_SESSION_NONE && !headers_sent()) {
    session_start();
}

function site_config(): array
{
    static $config = null;
    if ($config === null) {
        $config = require dirname(__DIR__) . '/config/site.php';
    }
    return $config;
}

function e(string $value): string
{
    return htmlspecialchars($value, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
}

function csrf_token(): string
{
    if (empty($_SESSION['sentician_csrf'])) {
        $_SESSION['sentician_csrf'] = bin2hex(random_bytes(32));
    }
    return (string) $_SESSION['sentician_csrf'];
}

function verify_csrf(?string $token): bool
{
    if (empty($_SESSION['sentician_csrf']) || empty($token)) {
        return false;
    }
    return hash_equals((string) $_SESSION['sentician_csrf'], $token);
}

/**
 * Renders the crisp vector Sentician wordmark matching the official company logo:
 * - Geometric wide uppercase "SENTICIAN" with a chevron A and cobalt-blue delta core
 * - "INTELLIGENCE. AUTOMATION. IMPACT." gradient tagline flanked by hairline rules
 */
function render_logo_svg(string $size = 'md', bool $withTagline = true): string
{
    $uid = bin2hex(random_bytes(3));
    $gradId = 'senticianTagGrad_' . $uid;
    $triGradId = 'senticianTriGrad_' . $uid;
    $class = 'sentician-logo sentician-logo--' . e($size);

    $taglineMarkup = '';
    $viewBox = $withTagline ? '0 0 360 72' : '0 0 360 44';

    if ($withTagline) {
        $taglineMarkup = <<<SVG
        <line x1="8" y1="58" x2="48" y2="58" stroke="#334155" stroke-width="1.5" stroke-linecap="round"/>
        <text x="180" y="61.5" text-anchor="middle" fill="url(#{$gradId})"
              font-family="'Space Grotesk', 'Inter', system-ui, sans-serif"
              font-size="9.5" font-weight="600" letter-spacing="2.4">INTELLIGENCE. AUTOMATION. IMPACT.</text>
        <line x1="312" y1="58" x2="352" y2="58" stroke="#334155" stroke-width="1.5" stroke-linecap="round"/>
SVG;
    }

    return <<<SVG
<svg class="{$class}" viewBox="{$viewBox}" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Sentician — Intelligence. Automation. Impact.">
    <defs>
        <linearGradient id="{$gradId}" x1="48" y1="58" x2="312" y2="58" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#3B82F6"/>
            <stop offset="52%" stop-color="#8B5CF6"/>
            <stop offset="100%" stop-color="#EC4899"/>
        </linearGradient>
        <linearGradient id="{$triGradId}" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#3B82F6"/>
            <stop offset="100%" stop-color="#2563EB"/>
        </linearGradient>
    </defs>
    <text x="14" y="34" fill="#F8FAFC"
          font-family="'Space Grotesk', system-ui, sans-serif"
          font-size="31" font-weight="600" letter-spacing="6.5">SENTICI</text>
    <path d="M261 34L276.5 9.5C277.3 8.2 279.1 8.2 279.9 9.5L295.5 34H289.2L278.2 16.4L267.2 34H261Z" fill="#F8FAFC"/>
    <polygon points="278.2,23.2 284.4,34 272.0,34" fill="url(#{$triGradId})"/>
    <text x="307" y="34" fill="#F8FAFC"
          font-family="'Space Grotesk', system-ui, sans-serif"
          font-size="31" font-weight="600">N</text>
    {$taglineMarkup}
</svg>
SVG;
}

/**
 * Sentician-exact FAQ Section (Matching sen7.mp4):
 * Eyebrow row with info icon + divider line, split title row, and two independent vertical columns
 * with smooth accordion expansion and rotating + / × icon.
 */
function render_faq_section(): string
{
    $cfg = site_config();
    $faqs = $cfg['faqs'];
    $leftFaqs = array_slice($faqs, 0, 4);
    $rightFaqs = array_slice($faqs, 4, 4);

    ob_start();
    ?>
    <section class="section faq-section" id="faq">
        <div class="container faq-container">
            <!-- Section Heading Block -->
            <div class="faq-heading-block" data-reveal>
                <div class="org-os-eyebrow-row faq-eyebrow-row">
                    <div class="org-os-tag-pill">
                        <img src="assets/images/icons/mH5OKmjNShfPxiFuUqwazYgcLNQ.svg" alt="" width="20" height="20">
                        <span>FAQ</span>
                    </div>
                    <div class="org-os-header-line"></div>
                </div>

                <div class="faq-title-row">
                    <div class="faq-title-main">
                        <h2>Curious About Sentician?</h2>
                    </div>
                    <div class="faq-title-sub">
                        <p>Answers to common questions about our AI-powered enterprise platform.</p>
                    </div>
                </div>
            </div>

            <!-- Two Independent Vertical Columns (Part 01 & Part 02) -->
            <div class="faq-columns-wrap" data-reveal>
                <div class="faq-col">
                    <?php foreach ($leftFaqs as $item): ?>
                        <div class="faq-item">
                            <button type="button" class="faq-trigger" aria-expanded="false">
                                <span class="faq-q-text"><?= e($item['q']) ?></span>
                                <span class="faq-icon-wrap" aria-hidden="true">
                                    <svg viewBox="0 0 24 24" width="24" height="24" fill="none">
                                        <path d="M 12 5.75 L 12 18.25" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M 18.25 12 L 5.75 12" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </span>
                            </button>
                            <div class="faq-panel" aria-hidden="true">
                                <div class="faq-panel-overflow">
                                    <div class="faq-panel-inner">
                                        <p><?= e($item['a']) ?></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <?php endforeach; ?>
                </div>

                <div class="faq-col">
                    <?php foreach ($rightFaqs as $item): ?>
                        <div class="faq-item">
                            <button type="button" class="faq-trigger" aria-expanded="false">
                                <span class="faq-q-text"><?= e($item['q']) ?></span>
                                <span class="faq-icon-wrap" aria-hidden="true">
                                    <svg viewBox="0 0 24 24" width="24" height="24" fill="none">
                                        <path d="M 12 5.75 L 12 18.25" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M 18.25 12 L 5.75 12" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </span>
                            </button>
                            <div class="faq-panel" aria-hidden="true">
                                <div class="faq-panel-overflow">
                                    <div class="faq-panel-inner">
                                        <p><?= e($item['a']) ?></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>
        </div>
    </section>
    <?php
    return (string) ob_get_clean();
}

/**
 * Sentician-exact Closing Section is now integrated directly into the top of includes/footer.php
 * (matching .framer-8moa8 in sen8.mp4), so render_cta_banner() returns an empty string to avoid duplication.
 */
function render_cta_banner(string $heading = '', string $subtext = ''): string
{
    return '';
}
