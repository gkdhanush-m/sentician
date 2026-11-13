<?php
declare(strict_types=1);

require_once __DIR__ . '/includes/helpers.php';
$cfg = site_config();

$errors = [];
$submitted = false;

$topics = [
    'Enterprise AI Copilots & RAG Systems',
    'End-to-End Workflow Automation',
    'Custom SaaS & AI Product Engineering',
    'Predictive Analytics & Data Pipelines',
    'AI Readiness & Architecture Advisory',
    'Automation ROI Assessment',
    'Press & Media Inquiries',
    'General Partnership / Inquiry',
];

$form = [
    'name' => '',
    'email' => '',
    'company' => '',
    'topic' => trim((string) ($_GET['topic'] ?? $topics[0])),
    'timeline' => 'Within 30 days',
    'message' => '',
];

if (!in_array($form['topic'], $topics, true) && $form['topic'] === '') {
    $form['topic'] = $topics[0];
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $honeypot = trim((string) ($_POST['website'] ?? ''));
    $csrf = $_POST['csrf_token'] ?? '';

    $form['name'] = trim((string) ($_POST['name'] ?? ''));
    $form['email'] = trim((string) ($_POST['email'] ?? ''));
    $form['company'] = trim((string) ($_POST['company'] ?? ''));
    $form['topic'] = trim((string) ($_POST['topic'] ?? $topics[0]));
    $form['timeline'] = trim((string) ($_POST['timeline'] ?? 'Within 30 days'));
    $form['message'] = trim((string) ($_POST['message'] ?? ''));

    if ($honeypot !== '') {
        // Silently treat bot submissions as handled without persisting.
        $submitted = true;
    } elseif (!verify_csrf(is_string($csrf) ? $csrf : null)) {
        $errors['form'] = 'Your session expired. Please refresh and try submitting again.';
    } else {
        if ($form['name'] === '' || mb_strlen($form['name']) < 2) {
            $errors['name'] = 'Please enter your full name.';
        }
        if ($form['email'] === '' || !filter_var($form['email'], FILTER_VALIDATE_EMAIL)) {
            $errors['email'] = 'Please enter a valid work email address.';
        }
        if ($form['message'] === '' || mb_strlen($form['message']) < 15) {
            $errors['message'] = 'Please share a brief summary of your goals (at least 15 characters).';
        }

        if (empty($errors)) {
            $storageDir = __DIR__ . '/storage';
            if (!is_dir($storageDir)) {
                mkdir($storageDir, 0750, true);
            }

            $logFile = $storageDir . '/inquiries.json';
            $existing = [];
            if (is_file($logFile)) {
                $decoded = json_decode((string) file_get_contents($logFile), true);
                if (is_array($decoded)) {
                    $existing = $decoded;
                }
            }

            $existing[] = [
                'id' => bin2hex(random_bytes(6)),
                'received_at' => gmdate('c'),
                'name' => $form['name'],
                'email' => $form['email'],
                'company' => $form['company'],
                'topic' => $form['topic'],
                'timeline' => $form['timeline'],
                'message' => $form['message'],
            ];

            file_put_contents(
                $logFile,
                json_encode($existing, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES) . PHP_EOL,
                LOCK_EX
            );

            $submitted = true;
            // Rotate CSRF token after successful POST
            unset($_SESSION['sentician_csrf']);
        }
    }
}

$pageTitle = 'Contact & Architecture Call';
$pageDescription = 'Book an architecture session or project consultation with Sentician.';
$activePage = 'contact';

require_once __DIR__ . '/includes/header.php';
?>

<!-- 1. AURORA HERO (Matching sen12.mp4 00:00) -->
<section class="sentician-solutions-hero sentician-contact-hero">
    <div class="sentician-solutions-aurora" aria-hidden="true">
        <img src="assets/images/solutions-hero-aurora.webp" alt="" width="1920" height="720" loading="eager" decoding="async">
    </div>

    <div class="container sentician-solutions-hero-inner">
        <div class="sentician-solutions-eyebrow">
            <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            <span>CONTACT</span>
        </div>

        <h1 class="sentician-solutions-title">
            Need Smarter AI<br>Solutions?
        </h1>

        <p class="sentician-solutions-sub">
            Connect any app or system pre-built<br>or custom with ease and flexibility.
        </p>
    </div>
</section>

<!-- 2. BENTO CONTACT CARDS (Matching sen12.mp4 00:06 & 00:42) -->
<section class="sentician-contact-bento-section">
    <div class="container sentician-contact-bento-grid">
        <article class="sentician-contact-card sentician-contact-card--featured" data-reveal>
            <div class="sentician-contact-hello-stage">
                <img src="assets/images/AroYsG98cecxdfVar1RpE3QmpjY.webp" alt="" loading="eager" decoding="async">
                <div class="sentician-contact-hello-glass" aria-hidden="true"></div>
                <span class="sentician-contact-hello-word">Hello</span>
            </div>

            <div class="sentician-contact-card-body">
                <h2>Connect with Expert Team</h2>
                <p>
                    Get personalized guidance and see how Sentician AI Agents can transform your enterprise workflows. Our experts will help you explore solutions.
                </p>
                <a href="contact-expert.php" class="sentician-contact-btn sentician-contact-btn--full">
                    <span>Get Help</span>
                </a>
            </div>
        </article>

        <div class="sentician-contact-right-stack">
            <article class="sentician-contact-card sentician-contact-card--compact" data-reveal>
                <div class="sentician-contact-compact-head">
                    <div class="sentician-contact-icon-badge" aria-hidden="true">
                        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.6">
                            <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/>
                            <path d="M18 14h-8M15 18h-5M10 6h8v4h-8V6Z"/>
                        </svg>
                    </div>
                    <span class="sentician-contact-sla-pill">MEDIA DESK &bull; &lt; 24H</span>
                </div>
                <div class="sentician-contact-card-body">
                    <h3>Press &amp; Media Inquiries</h3>
                    <p>For executive interviews, editorial features, keynotes, and official media requests.</p>
                    <div class="sentician-contact-compact-actions">
                        <a href="contact-press.php" class="sentician-contact-btn">
                            <span>Write to us &rarr;</span>
                        </a>
                    </div>
                </div>
            </article>

            <article class="sentician-contact-card sentician-contact-card--compact" data-reveal>
                <div class="sentician-contact-compact-head">
                    <div class="sentician-contact-icon-badge" aria-hidden="true">
                        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.6">
                            <rect x="3" y="3" width="6" height="6" rx="1"/>
                            <rect x="15" y="3" width="6" height="6" rx="1"/>
                            <rect x="3" y="15" width="6" height="6" rx="1"/>
                            <rect x="15" y="15" width="6" height="6" rx="1"/>
                            <path d="M9 6h6M9 18h6M6 9v6M18 9v6"/>
                        </svg>
                    </div>
                    <span class="sentician-contact-sla-pill">ALLIANCES &bull; API</span>
                </div>
                <div class="sentician-contact-card-body">
                    <h3>Partner &amp; Collaboration</h3>
                    <p>Explore enterprise integrations, robotics hardware alliances, and joint research.</p>
                    <div class="sentician-contact-compact-actions">
                        <a href="contact-partner.php" class="sentician-contact-btn">
                            <span>Let's Connect &rarr;</span>
                        </a>
                    </div>
                </div>
            </article>
        </div>
    </div>
</section>

<!-- 3. OUR GLOBAL PRESENCE (Bengaluru, India) -->
<?php
$globalOffices = [
    [
        'city' => 'Bengaluru',
        'country' => 'India',
        'title' => 'Sentician Bengaluru',
        'desc' => 'India headquarters, engineering AI, Robotics, Computer Vision, and autonomous enterprise systems.',
    ],
];
?>
<section class="section sentician-global-section">
    <div class="container sentician-global-container">
        <div class="split-section-head sentician-global-head" data-reveal>
            <h2>Our Location</h2>
            <p class="split-section-sub">
                Headquartered in Bengaluru, India — building intelligent AI and Robotics systems for the world.
            </p>
        </div>

        <div class="sentician-global-stage" data-reveal>
            <div class="sentician-global-cities" role="tablist" aria-label="Sentician Location">
                <?php foreach ($globalOffices as $idx => $office): ?>
                    <button type="button"
                            class="sentician-global-city-btn <?= $idx === 0 ? 'is-active' : '' ?>"
                            role="tab"
                            aria-selected="<?= $idx === 0 ? 'true' : 'false' ?>"
                            data-office-idx="<?= $idx ?>"
                            data-office-title="<?= e($office['title']) ?>"
                            data-office-desc="<?= e($office['desc']) ?>">
                        <span class="sentician-global-dot" aria-hidden="true"></span>
                        <span class="sentician-global-city-meta">
                            <strong><?= e($office['city']) ?></strong>
                            <small><?= e($office['country']) ?></small>
                        </span>
                    </button>
                <?php endforeach; ?>

                <div class="sentician-global-meta-list">
                    <div class="sentician-global-meta-item">
                        <span>STATUS</span>
                        <strong>Headquarters &bull; Active</strong>
                    </div>
                    <div class="sentician-global-meta-item">
                        <span>TIMEZONE</span>
                        <strong>IST (UTC +05:30)</strong>
                    </div>
                    <div class="sentician-global-meta-item">
                        <span>FOCUS</span>
                        <strong>AI, Robotics &amp; Vision</strong>
                    </div>
                    <div class="sentician-global-meta-item">
                        <span>DIRECT</span>
                        <strong><?= e($cfg['brand']['email'] ?? 'hello@sentician.com') ?></strong>
                    </div>
                </div>
            </div>

            <div class="sentician-global-photo">
                <img src="assets/images/bengaluru-office.jpg" alt="Sentician Bengaluru, India Office" width="1024" height="1024" loading="lazy" decoding="async" id="globalOfficePhoto">
                <div class="sentician-domain-scanline" aria-hidden="true"></div>
                <div class="sentician-domain-status">
                    <span class="sentician-domain-status-dot" aria-hidden="true"></span>
                    <span>BLR &bull; 12.9716&deg; N, 77.5946&deg; E</span>
                </div>
            </div>

            <div class="sentician-global-detail">
                <h3 id="globalOfficeTitle"><?= e($globalOffices[0]['title']) ?></h3>
                <div class="sentician-global-orb" aria-hidden="true">
                    <img src="assets/images/EKJKz0Ea1JuAJx3wKCZDIGVfoQc.png" alt="" width="34" height="34">
                </div>
                <p id="globalOfficeDesc"><?= e($globalOffices[0]['desc']) ?></p>
                <div class="sentician-global-cta-wrap">
                    <a href="contact-expert.php" class="sentician-contact-btn">
                        <span>Schedule a Call &rarr;</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>

<?php require_once __DIR__ . '/includes/footer.php'; ?>
