<?php
declare(strict_types=1);

require_once __DIR__ . '/includes/helpers.php';
$cfg = site_config();

$topics = [
    'AI Agents & Multi-Agent Automation',
    'Computer Vision & Perception Systems',
    'Robotics & Autonomous Systems',
    'Organization OS Enterprise Deployment',
    'Edge AI & IoT Architecture',
];

$errors = [];
$submitted = false;
$form = [
    'name' => '',
    'email' => '',
    'company' => '',
    'timeline' => 'Within 30 days',
    'topic' => $topics[0],
    'message' => '',
];

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $honeypot = trim((string)($_POST['website'] ?? ''));
    $csrf = (string)($_POST['csrf_token'] ?? '');

    $form['name'] = trim((string)($_POST['name'] ?? ''));
    $form['email'] = trim((string)($_POST['email'] ?? ''));
    $form['company'] = trim((string)($_POST['company'] ?? ''));
    $form['timeline'] = trim((string)($_POST['timeline'] ?? 'Within 30 days'));
    $form['topic'] = trim((string)($_POST['topic'] ?? $topics[0]));
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
            $errors['email'] = 'Please enter a valid work email address.';
        }
        if ($form['message'] === '' || mb_strlen($form['message']) < 12) {
            $errors['message'] = 'Please share a brief overview of your goals (at least 12 characters).';
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
                'channel' => 'expert',
                'submitted_at' => gmdate('c'),
                'name' => $form['name'],
                'email' => $form['email'],
                'company' => $form['company'],
                'timeline' => $form['timeline'],
                'topic' => $form['topic'],
                'message' => $form['message'],
            ];
            file_put_contents($storageFile, json_encode($existing, JSON_PRETTY_PRINT), LOCK_EX);
            $submitted = true;
        }
    }
}

$pageTitle = 'Connect with Expert Team';
$pageDescription = 'Get personalized guidance from Sentician AI and Robotics architects in Bengaluru, India.';
$activePage = 'contact';
require_once __DIR__ . '/includes/header.php';
?>

<section class="sentician-solutions-hero sentician-contact-hero">
    <div class="sentician-solutions-aurora" aria-hidden="true">
        <img src="assets/images/solutions-hero-aurora.webp" alt="" width="1920" height="720" loading="eager" decoding="async">
    </div>

    <div class="container sentician-solutions-hero-inner">
        <div class="sentician-solutions-eyebrow">
            <span>EXPERT CONSULTATION</span>
        </div>
        <h1 class="sentician-solutions-title">Connect with Our<br>Expert Team</h1>
        <p class="sentician-solutions-sub">
            Get personalized architecture guidance and see how Sentician AI &amp; Robotics systems fit your workflows.
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
                    <h2>Consultation Request Received</h2>
                    <p>
                        Thank you, <strong><?= e($form['name']) ?></strong>. Our Bengaluru engineering team has received your request for <strong><?= e($form['topic']) ?></strong> and will respond to <strong><?= e($form['email']) ?></strong> within one business day.
                    </p>
                    <div class="success-actions">
                        <a href="contact.php" class="btn btn-primary">Back to Contact</a>
                        <a href="services.php" class="btn btn-ghost">Explore AI Solutions</a>
                    </div>
                </div>
            <?php else: ?>
                <form method="POST" action="contact-expert.php" class="contact-form" novalidate>
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
                            <input type="text" id="name" name="name" required value="<?= e($form['name']) ?>" placeholder="Alex Morgan">
                            <?php if (isset($errors['name'])): ?><small class="field-error"><?= e($errors['name']) ?></small><?php endif; ?>
                        </div>
                        <div class="form-field <?= isset($errors['email']) ? 'has-error' : '' ?>">
                            <label for="email">Work Email <span aria-hidden="true">*</span></label>
                            <input type="email" id="email" name="email" required value="<?= e($form['email']) ?>" placeholder="alex@company.com">
                            <?php if (isset($errors['email'])): ?><small class="field-error"><?= e($errors['email']) ?></small><?php endif; ?>
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="form-field">
                            <label for="company">Company / Organization</label>
                            <input type="text" id="company" name="company" value="<?= e($form['company']) ?>" placeholder="Acme Corp">
                        </div>
                        <div class="form-field">
                            <label for="timeline">Target Timeline</label>
                            <select id="timeline" name="timeline">
                                <?php foreach (['Immediate (This Month)', 'Within 30 days', 'Next Quarter', 'Exploring / Advisory'] as $opt): ?>
                                    <option value="<?= e($opt) ?>" <?= $form['timeline'] === $opt ? 'selected' : '' ?>><?= e($opt) ?></option>
                                <?php endforeach; ?>
                            </select>
                        </div>
                    </div>

                    <div class="form-field">
                        <label for="topic">Solution Focus</label>
                        <select id="topic" name="topic">
                            <?php foreach ($topics as $opt): ?>
                                <option value="<?= e($opt) ?>" <?= $form['topic'] === $opt ? 'selected' : '' ?>><?= e($opt) ?></option>
                            <?php endforeach; ?>
                        </select>
                    </div>

                    <div class="form-field <?= isset($errors['message']) ? 'has-error' : '' ?>">
                        <label for="message">Project Context &amp; Goals <span aria-hidden="true">*</span></label>
                        <textarea id="message" name="message" rows="5" required placeholder="Describe your workflow, hardware/software stack, or what you want to automate..."><?= e($form['message']) ?></textarea>
                        <?php if (isset($errors['message'])): ?><small class="field-error"><?= e($errors['message']) ?></small><?php endif; ?>
                    </div>

                    <div class="form-submit-row">
                        <button type="submit" class="btn btn-primary btn-lg">Request Expert Guidance</button>
                        <span class="privacy-note">Protected by CSRF &amp; reviewed directly by Sentician engineers.</span>
                    </div>
                </form>
            <?php endif; ?>
        </div>
    </div>
</section>

<?php require_once __DIR__ . '/includes/footer.php'; ?>
