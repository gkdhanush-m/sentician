<?php
declare(strict_types=1);

$pageTitle = 'Integrations & Connectors';
$pageDescription = 'Connect Sentician AI agents securely to SharePoint, SAP, Slack, Confluence, Salesforce, Jira, GitHub, PostgreSQL, HubSpot, and custom enterprise APIs.';
$activePage = 'integrations';

require_once __DIR__ . '/includes/header.php';

$categories = array_values(array_unique(array_column($cfg['integrations'], 'category')));

$connectorVisuals = [
    'Slack' => ['image' => 'assets/images/AroYsG98cecxdfVar1RpE3QmpjY.webp', 'code' => 'SLK • REALTIME', 'hud' => 'stream'],
    'SharePoint' => ['image' => 'assets/images/approach-research.jpg', 'code' => 'SHP • INDEXED', 'hud' => 'mesh'],
    'SAP' => ['image' => 'assets/images/approach-engineering.jpg', 'code' => 'SAP • ERP SYNC', 'hud' => 'bus'],
    'Confluence' => ['image' => 'assets/images/domain-nlp.jpg', 'code' => 'CNF • KNOWLEDGE', 'hud' => 'stream'],
    'Salesforce' => ['image' => 'assets/images/approach-impact.jpg', 'code' => 'SFC • PIPELINE', 'hud' => 'bus'],
    'Jira' => ['image' => 'assets/images/domain-cv.jpg', 'code' => 'JRA • SPRINT OS', 'hud' => 'mesh'],
    'GitHub' => ['image' => 'assets/images/exceptionality-capabilities.png', 'code' => 'GHB • REPO AI', 'hud' => 'bus'],
    'PostgreSQL' => ['image' => 'assets/images/domain-agi.jpg', 'code' => 'PG • SQL GUARD', 'hud' => 'mesh'],
    'HubSpot' => ['image' => 'assets/images/approach-innovation.jpg', 'code' => 'HSP • REVOPS', 'hud' => 'stream'],
];
?>

<!-- ==================== 1. INTEGRATIONS AURORA HERO ==================== -->
<section class="sentician-solutions-hero">
    <div class="sentician-solutions-aurora" aria-hidden="true">
        <img src="assets/images/solutions-hero-aurora.webp" alt="" loading="eager" decoding="async">
        <div class="sentician-solutions-aurora-fade"></div>
    </div>

    <div class="sentician-solutions-hero-inner">
        <div class="sentician-solutions-eyebrow" data-reveal>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
                <rect x="3" y="3" width="6" height="6" rx="1"/>
                <rect x="15" y="3" width="6" height="6" rx="1"/>
                <rect x="3" y="15" width="6" height="6" rx="1"/>
                <rect x="15" y="15" width="6" height="6" rx="1"/>
                <path d="M9 6h6M9 18h6M6 9v6M18 9v6"/>
            </svg>
            <span>INTEGRATION ECOSYSTEM</span>
        </div>

        <h1 class="sentician-solutions-title" data-reveal>Smart, Versatile<br>Agent-Driven Integration</h1>
        <p class="sentician-solutions-sub" data-reveal>
            Connect pre-built or custom connectors to your enterprise warehouses, CRMs, wikis, and engineering tools in minutes.
        </p>

        <div class="sentician-int-filter-wrap" data-reveal>
            <div class="sentician-blog-filters" role="tablist" aria-label="Filter integrations by category">
                <button type="button" class="filter-pill is-active" data-int-filter="all">All Connectors</button>
                <?php foreach ($categories as $cat): ?>
                    <button type="button" class="filter-pill" data-int-filter="<?= e($cat) ?>"><?= e($cat) ?></button>
                <?php endforeach; ?>
            </div>
        </div>
    </div>
</section>

<!-- ==================== 2. ANIMATED CONNECTOR GRID ==================== -->
<section class="section sentician-int-section">
    <div class="container">
        <div class="integrations-grid" id="integrationsGrid">
            <?php foreach ($cfg['integrations'] as $conn): ?>
                <?php
                    $vis = $connectorVisuals[$conn['name']] ?? [
                        'image' => 'assets/images/AroYsG98cecxdfVar1RpE3QmpjY.webp',
                        'code' => strtoupper(substr($conn['name'], 0, 3)) . ' • SYNC',
                        'hud' => 'stream',
                    ];
                ?>
                <article class="integration-card sentician-int-card" data-int-cat="<?= e($conn['category']) ?>" data-reveal>
                    <div class="sentician-domain-media">
                        <img src="<?= e($vis['image']) ?>" alt="<?= e($conn['name']) ?> Integration" loading="lazy" decoding="async">
                        <div class="sentician-domain-media-overlay" aria-hidden="true"></div>
                        <div class="sentician-domain-scanline" aria-hidden="true"></div>

                        <div class="sentician-domain-status">
                            <span class="sentician-domain-status-dot" aria-hidden="true"></span>
                            <span><?= e($vis['code']) ?></span>
                        </div>

                        <svg class="sentician-domain-hud" viewBox="0 0 320 180" fill="none" aria-hidden="true">
                            <?php if ($vis['hud'] === 'stream'): ?>
                                <path class="hud-flow-line" d="M44 90 C104 52, 216 128, 276 90" stroke="rgba(147,197,253,0.65)" stroke-width="2" stroke-linecap="round"/>
                                <circle class="hud-pulse-node" cx="44" cy="90" r="6" fill="#0084FF"/>
                                <circle class="hud-pulse-node" cx="160" cy="90" r="7" fill="#FFFFFF"/>
                                <circle class="hud-pulse-node" cx="276" cy="90" r="6" fill="#FF7A00"/>
                            <?php elseif ($vis['hud'] === 'bus'): ?>
                                <path class="hud-flow-line" d="M48 110 H118 L142 68 H212 L236 52 H274" stroke="#60A5FA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <circle class="hud-pulse-node" cx="142" cy="68" r="5.5" fill="#0084FF"/>
                                <circle class="hud-pulse-node" cx="212" cy="68" r="5.5" fill="#FF7A00"/>
                            <?php else: ?>
                                <path class="hud-flow-line" d="M72 90 L160 44 L248 90 L160 136 Z" stroke="rgba(125,164,255,0.55)" stroke-width="1.6"/>
                                <circle class="hud-pulse-node" cx="72" cy="90" r="5.5" fill="#0084FF"/>
                                <circle class="hud-pulse-node" cx="160" cy="44" r="6.5" fill="#FF7A00"/>
                                <circle class="hud-pulse-node" cx="248" cy="90" r="5.5" fill="#0084FF"/>
                                <circle class="hud-pulse-node" cx="160" cy="136" r="5.5" fill="#93C5FD"/>
                            <?php endif; ?>
                        </svg>
                    </div>

                    <div class="sentician-int-body">
                        <div class="integration-card-top">
                            <div class="connector-monogram" aria-hidden="true">
                                <?= e(strtoupper(substr($conn['name'], 0, 2))) ?>
                            </div>
                            <span class="bento-badge"><?= e($conn['category']) ?></span>
                        </div>
                        <h2><?= e($conn['name']) ?></h2>
                        <p><?= e($conn['desc']) ?></p>
                        <div class="sentician-int-footer">
                            <span class="status-pill status-pill--blue">OAuth2 / Webhook Ready</span>
                            <a href="contact-partner.php" class="sentician-int-link">Connect &rarr;</a>
                        </div>
                    </div>
                </article>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<!-- ==================== 3. CUSTOM CONNECTOR CTA ==================== -->
<?= render_cta_banner('Need a custom connector for an internal ERP or proprietary database?', 'Sentician builds deterministic, schema-validated REST, GraphQL, and SQL connectors tailored to your security boundary.', 'Request Custom Connector', 'contact-partner.php') ?>

<?php require_once __DIR__ . '/includes/footer.php'; ?>
