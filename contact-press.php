<?php
declare(strict_types=1);

require_once __DIR__ . '/includes/helpers.php';
$cfg = site_config();

$inquiryTypes = [
    'Executive Interview / Podcast',
    'Feature Article / Editorial Coverage',
    'Speaking & Keynote Invitation',
    'Press Kit & Brand Assets Request',
];

$errors = [];
$submitted = false;
$form = [
    'name' => '',
    'email' => '',
    'outlet' => '',
    'deadline' => 'Flexible',
    'topic' => $inquiryTypes[0],
    'message' => '',
];

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $honeypot = trim((string)($_POST['website'] ?? ''));
    $csrf = (string)($_POST['csrf_token'] ?? '');

    $form['name'] = trim((string)($_POST['name'] ?? ''));
    $form['email'] = trim((string)($_POST['email'] ?? ''));
    $form['outlet'] = trim((string)($_POST['outlet'] ?? ''));
    $form['deadline'] = trim((string)($_POST['deadline'] ?? 'Flexible'));
    $form['topic'] = trim((string)($_POST['topic'] ?? $inquiryTypes[0]));
    $form['message'] = trim((string)($_POST['message'] ?? ''));

    if ($honeypot !== '') {
        $submitted = true;
    } elseif (!verify_csrf($csrf)) {
        $errors['form'] = 'Your session expired. Please refresh and try submitting again.';
    } else {
        if ($form['name'] === '' || mb_strlen($form['name']) < 2) {
            $errors['name'] = 'Please enter your name.';
        }
        if (!filter_var($form['email'], FILTER_VALIDATE_EMAIL)) {
            $errors['email'] = 'Please enter a valid email address.';
        }
        if ($form['message'] === '' || mb_strlen($form['message']) < 12) {
            $errors['message'] = 'Please share brief details about your story or media request.';
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
                'channel' => 'press',
                'submitted_at' => gmdate('c'),
                'name' => $form['name'],
                'email' => $form['email'],
                'outlet' => $form['outlet'],
                'deadline' => $form['deadline'],
                'topic' => $form['topic'],
                'message' => $form['message'],
            ];
            file_put_contents($storageFile, json_encode($existing, JSON_PRETTY_PRINT), LOCK_EX);
            $submitted = true;
        }
    }
}

$pageTitle = 'Press & Media Inquiries';
$pageDescription = 'Contact Sentician Communications for interviews, articles, keynotes, and media requests.';
$activePage = 'contact';
require_once __DIR__ . '/includes/header.php';
?>

<section class="sentician-solutions-hero sentician-contact-hero">
    <div class="sentician-solutions-aurora" aria-hidden="true">
        <img src="assets/images/solutions-hero-aurora.webp" alt="" width="1920" height="720" loading="eager" decoding="async">
    </div>

    <div class="container sentician-solutions-hero-inner">
        <div class="sentician-solutions-eyebrow">
            <span>PRESS &amp; MEDIA</span>
        </div>
        <h1 class="sentician-solutions-title">Press &amp; Media<br>Inquiries</h1>
        <p class="sentician-solutions-sub">
            For editorial interviews, keynote invitations, feature stories, and official Sentician media requests.
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
                    <h2>Media Inquiry Logged</h2>
                    <p>
                        Thank you, <strong><?= e($form['name']) ?></strong>. Our communications desk has received your <strong><?= e($form['topic']) ?></strong> request and will reply to <strong><?= e($form['email']) ?></strong> promptly.
                    </p>
                    <div class="success-actions">
                        <a href="contact.php" class="btn btn-primary">Back to Contact</a>
                        <a href="blog.php" class="btn btn-ghost">Read Tech Insights</a>
                    </div>
                </div>
            <?php else: ?>
                <form method="POST" action="contact-press.php" class="contact-form" novalidate>
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
                            <label for="name">Your Name <span aria-hidden="true">*</span></label>
                            <input type="text" id="name" name="name" required value="<?= e($form['name']) ?>" placeholder="Priya Nair">
                            <?php if (isset($errors['name'])): ?><small class="field-error"><?= e($errors['name']) ?></small><?php endif; ?>
                        </div>
                        <div class="form-field <?= isset($errors['email']) ? 'has-error' : '' ?>">
                            <label for="email">Editorial Email <span aria-hidden="true">*</span></label>
                            <input type="email" id="email" name="email" required value="<?= e($form['email']) ?>" placeholder="priya@publication.com">
                            <?php if (isset($errors['email'])): ?><small class="field-error"><?= e($errors['email']) ?></small><?php endif; ?>
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="form-field">
                            <label for="outlet">Publication / Media Outlet</label>
                            <input type="text" id="outlet" name="outlet" value="<?= e($form['outlet']) ?>" placeholder="TechCrunch / Wired / Podcast">
                        </div>
                        <div class="form-field">
                            <label for="deadline">Editorial Deadline</label>
                            <select id="deadline" name="deadline">
                                <?php foreach (['Within 24 Hours', 'This Week', 'This Month', 'Flexible'] as $opt): ?>
                                    <option value="<?= e($opt) ?>" <?= $form['deadline'] === $opt ? 'selected' : '' ?>><?= e($opt) ?></option>
                                <?php endforeach; ?>
                            </select>
                        </div>
                    </div>

                    <div class="form-field">
                        <label for="topic">Inquiry Type</label>
                        <select id="topic" name="topic">
                            <?php foreach ($inquiryTypes as $opt): ?>
                                <option value="<?= e($opt) ?>" <?= $form['topic'] === $opt ? 'selected' : '' ?>><?= e($opt) ?></option>
                            <?php endforeach; ?>
                        </select>
                    </div>

                    <div class="form-field <?= isset($errors['message']) ? 'has-error' : '' ?>">
                        <label for="message">Story Angle &amp; Questions <span aria-hidden="true">*</span></label>
                        <textarea id="message" name="message" rows="5" required placeholder="Share your article angle, interview format, or media request details..."><?= e($form['message']) ?></textarea>
                        <?php if (isset($errors['message'])): ?><small class="field-error"><?= e($errors['message']) ?></small><?php endif; ?>
                    </div>

                    <div class="form-submit-row">
                        <button type="submit" class="btn btn-primary btn-lg">Send Media Inquiry</button>
                        <span class="privacy-note">Direct desk: <?= e($cfg['brand']['email'] ?? 'hello@sentician.com') ?></span>
                    </div>
                </form>
            <?php endif; ?>
        </div>
    </div>
</section>

<?php require_once __DIR__ . '/includes/footer.php'; ?>
