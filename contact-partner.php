<?php
declare(strict_types=1);

require_once __DIR__ . '/includes/helpers.php';
$cfg = site_config();

$partnerTypes = [
    'Technology & API Integration',
    'Robotics & Hardware Ecosystem Alliance',
    'Joint Research & Academic Collaboration',
    'Enterprise Channel / Solution Partner',
];

$errors = [];
$submitted = false;
$form = [
    'name' => '',
    'email' => '',
    'company' => '',
    'region' => 'India / APAC',
    'topic' => $partnerTypes[0],
    'message' => '',
];

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $honeypot = trim((string)($_POST['website'] ?? ''));
    $csrf = (string)($_POST['csrf_token'] ?? '');

    $form['name'] = trim((string)($_POST['name'] ?? ''));
    $form['email'] = trim((string)($_POST['email'] ?? ''));
    $form['company'] = trim((string)($_POST['company'] ?? ''));
    $form['region'] = trim((string)($_POST['region'] ?? 'India / APAC'));
    $form['topic'] = trim((string)($_POST['topic'] ?? $partnerTypes[0]));
    $form['message'] = trim((string)($_POST['message'] ?? ''));

    if ($honeypot !== '') {
        $submitted = true;
    } elseif (!verify_csrf($csrf)) {
        $errors['form'] = 'Your session expired. Please refresh and try submitting again.';
    } else {
        if ($form['name'] === '' || mb_strlen($form['name']) < 2) {
            $errors['name'] = 'Please enter your full name.';
        }
        if (!filter_var($form['email'], FILTER_VALIDATE_EMAIL)) {
            $errors['email'] = 'Please enter a valid business email address.';
        }
        if ($form['message'] === '' || mb_strlen($form['message']) < 12) {
            $errors['message'] = 'Please describe your partnership or integration proposal.';
        }

        if (empty($errors)) {
            $storageDir = __DIR__ . '/storage';
            if (!is_dir($storageDir)) {
                mkdir($storageDir, 0755, true);
            }
            $storageFile = $storageDir . '/leads.json';
            $existing = is_file($storageFile) ? (json_decode((string)file_get_contents($storageFile), true) ?: []) : [];
            $existing[] = [
                'id' => bin2hex(random_bytes(6)),
                'channel' => 'partner',
                'submitted_at' => gmdate('c'),
                'name' => $form['name'],
                'email' => $form['email'],
                'company' => $form['company'],
                'region' => $form['region'],
                'topic' => $form['topic'],
                'message' => $form['message'],
            ];
            file_put_contents($storageFile, json_encode($existing, JSON_PRETTY_PRINT), LOCK_EX);
            $submitted = true;
        }
    }
}

$pageTitle = 'Partner & Collaboration';
$pageDescription = 'Explore strategic partnerships, API integrations, and AI/Robotics collaborations with Sentician.';
$activePage = 'contact';
require_once __DIR__ . '/includes/header.php';
?>

<section class="sentician-solutions-hero sentician-contact-hero">
    <div class="sentician-solutions-aurora" aria-hidden="true">
        <img src="assets/images/solutions-hero-aurora.webp" alt="" width="1920" height="720" loading="eager" decoding="async">
    </div>

    <div class="container sentician-solutions-hero-inner">
        <div class="sentician-solutions-eyebrow">
            <span>PARTNERSHIPS &amp; ECOSYSTEM</span>
        </div>
        <h1 class="sentician-solutions-title">Partner &amp;<br>Collaboration</h1>
        <p class="sentician-solutions-sub">
            Co-build integrations, robotics hardware alliances, and joint enterprise AI initiatives with Sentician.
        </p>
    </div>
</section>

<section class="section sentician-contact-form-section">
    <div class="container sentician-contact-form-container">
        <div class="sentician-subpage-back" data-reveal>
            <a href="contact.php" class="sentician-contact-btn">&larr; Back to Contact</a>
        </div>

        <div class="contact-form-wrap" data-reveal>
            <?php if ($submitted): ?>
                <div class="success-panel" role="status">
                    <div class="success-icon" aria-hidden="true">&#10003;</div>
                    <h2>Partnership Proposal Received</h2>
                    <p>
                        Thank you, <strong><?= e($form['name']) ?></strong>. Our alliances team in Bengaluru has logged your <strong><?= e($form['topic']) ?></strong> proposal and will follow up at <strong><?= e($form['email']) ?></strong>.
                    </p>
                    <div class="success-actions">
                        <a href="contact.php" class="btn btn-primary">Back to Contact</a>
                        <a href="integrations.php" class="btn btn-ghost">View Integrations</a>
                    </div>
                </div>
            <?php else: ?>
                <form method="POST" action="contact-partner.php" class="contact-form" novalidate>
                    <input type="hidden" name="csrf_token" value="<?= e(csrf_token()) ?>">
                    <div class="hp-field" aria-hidden="true">
                        <label for="website">Website</label>
                        <input type="text" id="website" name="website" tabindex="-1" autocomplete="off">
                    </div>

                    <?php if (!empty($errors['form'])): ?>
                        <div class="form-alert" role="alert"><?= e($errors['form']) ?></div>
                    <?php endif; ?>

                    <div class="form-row">
                        <div class="form-field <?= isset($errors['name']) ? 'has-error' : '' ?>">
                            <label for="name">Full Name <span aria-hidden="true">*</span></label>
                            <input type="text" id="name" name="name" required value="<?= e($form['name']) ?>" placeholder="Rohan Kulkarni">
                            <?php if (isset($errors['name'])): ?><small class="field-error"><?= e($errors['name']) ?></small><?php endif; ?>
                        </div>
                        <div class="form-field <?= isset($errors['email']) ? 'has-error' : '' ?>">
                            <label for="email">Business Email <span aria-hidden="true">*</span></label>
                            <input type="email" id="email" name="email" required value="<?= e($form['email']) ?>" placeholder="rohan@partner.io">
                            <?php if (isset($errors['email'])): ?><small class="field-error"><?= e($errors['email']) ?></small><?php endif; ?>
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="form-field">
                            <label for="company">Organization / Lab</label>
                            <input type="text" id="company" name="company" value="<?= e($form['company']) ?>" placeholder="Partner Technologies">
                        </div>
                        <div class="form-field">
                            <label for="region">Primary Region</label>
                            <select id="region" name="region">
                                <?php foreach (['India / APAC', 'North America', 'Europe / UK', 'Middle East', 'Global'] as $opt): ?>
                                    <option value="<?= e($opt) ?>" <?= $form['region'] === $opt ? 'selected' : '' ?>><?= e($opt) ?></option>
                                <?php endforeach; ?>
                            </select>
                        </div>
                    </div>

                    <div class="form-field">
                        <label for="topic">Collaboration Track</label>
                        <select id="topic" name="topic">
                            <?php foreach ($partnerTypes as $opt): ?>
                                <option value="<?= e($opt) ?>" <?= $form['topic'] === $opt ? 'selected' : '' ?>><?= e($opt) ?></option>
                            <?php endforeach; ?>
                        </select>
                    </div>

                    <div class="form-field <?= isset($errors['message']) ? 'has-error' : '' ?>">
                        <label for="message">Collaboration Overview <span aria-hidden="true">*</span></label>
                        <textarea id="message" name="message" rows="5" required placeholder="Share your integration, hardware, research, or co-selling vision..."><?= e($form['message']) ?></textarea>
                        <?php if (isset($errors['message'])): ?><small class="field-error"><?= e($errors['message']) ?></small><?php endif; ?>
                    </div>

                    <div class="form-submit-row">
                        <button type="submit" class="btn btn-primary btn-lg">Submit Partnership Request</button>
                        <span class="privacy-note">Protected by CSRF &amp; reviewed by Sentician Partnerships.</span>
                    </div>
                </form>
            <?php endif; ?>
        </div>
    </div>
</section>

<?php require_once __DIR__ . '/includes/footer.php'; ?>
