<?php
declare(strict_types=1);

require_once __DIR__ . '/includes/helpers.php';
$cfg = site_config();

$openRoles = [
    [
        'id' => 'agentic-ai-engineer',
        'title' => 'Agentic AI Systems Engineer',
        'dept' => 'AI & ML',
        'dept_slug' => 'ai-ml',
        'location' => 'Bengaluru, India',
        'work_mode' => 'Hybrid',
        'work_slug' => 'hybrid',
        'type' => 'Full-Time',
        'comp' => 'Competitive + Equity',
        'summary' => 'Architect deterministic multi-agent orchestration graphs, tool-execution guardrails, and evaluation harnesses for Sentician Organization OS.',
        'opportunity' => 'As an Agentic AI Systems Engineer at Sentician, you will design the core reasoning and execution layer that powers autonomous enterprise workflows across HR, RevOps, and engineering.',
        'responsibilities' => [
            'Design and ship multi-agent supervisor routing graphs with strict JSON schema contracts.',
            'Build automated evaluation suites measuring accuracy, grounding, and tool-call reliability.',
            'Implement hybrid vector + lexical retrieval pipelines with row-level permission enforcement.',
            'Collaborate directly with enterprise deployment engineers to harden production agents.',
        ],
        'qualifications' => [
            '2+ years building production AI, LLM orchestration, or distributed backend systems in Python/TypeScript.',
            'Deep familiarity with tool-calling architectures, RAG pipelines, and automated eval frameworks.',
            'Strong systems intuition around latency budgets, observability, and deterministic guardrails.',
        ],
    ],
    [
        'id' => 'computer-vision-engineer',
        'title' => 'Computer Vision & Perception Engineer',
        'dept' => 'Robotics & Vision',
        'dept_slug' => 'robotics-vision',
        'location' => 'Bengaluru, India',
        'work_mode' => 'On-Site',
        'work_slug' => 'onsite',
        'type' => 'Full-Time',
        'comp' => 'Competitive + Equity',
        'summary' => 'Build real-time object detection, defect inspection, and spatial perception pipelines deployed across industrial and edge environments.',
        'opportunity' => 'You will take computer vision models from research prototypes to sub-30ms real-time inference on factory floors, logistics hubs, and autonomous platforms.',
        'responsibilities' => [
            'Train, fine-tune, and quantize detection, segmentation, and tracking models in PyTorch.',
            'Optimize inference graphs with TensorRT / ONNX Runtime for edge GPU hardware.',
            'Design automated active-learning data curation loops for continuous model improvement.',
            'Partner with robotics engineers on camera calibration, depth estimation, and 3D perception.',
        ],
        'qualifications' => [
            '2+ years of hands-on experience in Computer Vision (detection, segmentation, or video analytics).',
            'Proficiency in PyTorch, OpenCV, and model optimization (TensorRT, ONNX, FP16/INT8).',
            'Track record of shipping reliable vision pipelines in real-world lighting and edge conditions.',
        ],
    ],
    [
        'id' => 'robotics-autonomy-engineer',
        'title' => 'Robotics & ROS2 Autonomy Engineer',
        'dept' => 'Robotics & Vision',
        'dept_slug' => 'robotics-vision',
        'location' => 'Bengaluru, India',
        'work_mode' => 'On-Site',
        'work_slug' => 'onsite',
        'type' => 'Full-Time',
        'comp' => 'Competitive + Equity',
        'summary' => 'Design motion planning, SLAM, and human-robot interaction stacks bridging intelligent AI planners with physical actuators.',
        'opportunity' => 'Work at our Bengaluru hardware & simulation lab to build safe, adaptive robotic autonomy stacks that operate alongside humans in dynamic environments.',
        'responsibilities' => [
            'Develop navigation, localization (SLAM), and obstacle-avoidance nodes in ROS2.',
            'Integrate vision-language planners with deterministic low-level motion controllers.',
            'Build high-fidelity simulation testbeds in Gazebo / Isaac Sim before hardware validation.',
            'Instrument telemetry, safety watchdogs, and over-the-air fleet diagnostics.',
        ],
        'qualifications' => [
            'Strong C++ and Python experience with ROS / ROS2 middleware and real-time control loops.',
            'Hands-on background in SLAM, sensor fusion (LiDAR, IMU, stereo), or manipulation.',
            'Comfort debugging across simulation and physical robotic hardware.',
        ],
    ],
    [
        'id' => 'edge-ai-embedded-engineer',
        'title' => 'Edge AI & Embedded Intelligence Engineer',
        'dept' => 'AI & ML',
        'dept_slug' => 'ai-ml',
        'location' => 'Bengaluru, India',
        'work_mode' => 'Hybrid',
        'work_slug' => 'hybrid',
        'type' => 'Full-Time',
        'comp' => 'Competitive + Equity',
        'summary' => 'Optimize neural networks for low-latency on-device inference across IoT gateways, industrial sensors, and embedded hardware.',
        'opportunity' => 'Enable real-time intelligence where cloud round-trips are impossible—bringing compressed models directly onto Jetson, ARM, and microcontroller targets.',
        'responsibilities' => [
            'Profile, prune, and quantize neural models for memory-constrained embedded targets.',
            'Build C/C++ inference runtimes and telemetry agents for industrial IoT gateways.',
            'Collaborate with hardware partners on thermal, power, and throughput benchmarks.',
        ],
        'qualifications' => [
            'Experience with Embedded Linux, C/C++, and TinyML / edge inference frameworks.',
            'Understanding of neural network quantization, pruning, and hardware acceleration.',
        ],
    ],
    [
        'id' => 'platform-infra-engineer',
        'title' => 'Full-Stack Platform Engineer (Organization OS)',
        'dept' => 'Platform & Infra',
        'dept_slug' => 'platform-infra',
        'location' => 'Bengaluru, India',
        'work_mode' => 'Hybrid',
        'work_slug' => 'hybrid',
        'type' => 'Full-Time',
        'comp' => 'Competitive + Equity',
        'summary' => 'Engineer high-throughput APIs, real-time telemetry dashboards, and secure enterprise connectors powering Sentician workflows.',
        'opportunity' => 'Shape the foundational web platform, RBAC governance layer, and enterprise connector fabric that customers interact with every day.',
        'responsibilities' => [
            'Build responsive, low-latency web workspaces and REST/GraphQL APIs.',
            'Implement enterprise SSO, audit logging, and fine-grained permission boundaries.',
            'Partner with AI engineers to stream live agent execution traces into the UI.',
        ],
        'qualifications' => [
            '3+ years in full-stack engineering (TypeScript, Node/Go/PHP, PostgreSQL, Redis).',
            'Strong eye for clean API design, security hygiene, and front-end responsiveness.',
        ],
    ],
    [
        'id' => 'product-designer-ai',
        'title' => 'Product Designer — AI & Autonomous Interfaces',
        'dept' => 'Product & Design',
        'dept_slug' => 'product-design',
        'location' => 'Bengaluru, India',
        'work_mode' => 'Hybrid',
        'work_slug' => 'hybrid',
        'type' => 'Full-Time',
        'comp' => 'Competitive + Equity',
        'summary' => 'Craft intuitive human-in-the-loop control surfaces, agent observability workspaces, and robotics command interfaces.',
        'opportunity' => 'Define how enterprise teams supervise, trust, and collaborate with autonomous AI and robotic systems through clear, dark-mode-first interfaces.',
        'responsibilities' => [
            'Design end-to-end workflows for multi-agent supervision, approvals, and analytics.',
            'Evolve Sentician’s dark-obsidian design system across web and embedded consoles.',
            'Partner closely with engineers in rapid prototyping and customer usability reviews.',
        ],
        'qualifications' => [
            '3+ years designing complex B2B, developer-tool, or AI/data-intensive products.',
            'Strong systems thinking in Figma and high craft in typography, motion, and hierarchy.',
        ],
    ],
];

$rolesById = [];
$deptCounts = [];
foreach ($openRoles as $r) {
    $rolesById[$r['id']] = $r;
    $deptCounts[$r['dept_slug']] = ($deptCounts[$r['dept_slug']] ?? 0) + 1;
}

$deptLabels = [
    'ai-ml' => 'AI & ML',
    'robotics-vision' => 'Robotics & Vision',
    'platform-infra' => 'Platform & Infra',
    'product-design' => 'Product & Design',
];

$selectedRoleId = trim((string)($_GET['role'] ?? ''));
$activeRole = $rolesById[$selectedRoleId] ?? null;
$initialTab = (($_GET['tab'] ?? '') === 'application') ? 'application' : 'overview';

$errors = [];
$submitted = false;
$form = [
    'name' => '',
    'email' => '',
    'phone' => '',
    'portfolio' => '',
    'note' => '',
    'role_id' => $activeRole['id'] ?? '',
];

if ($_SERVER['REQUEST_METHOD'] === 'POST' && ($_POST['form_action'] ?? '') === 'career_apply') {
    $honeypot = trim((string)($_POST['website'] ?? ''));
    $csrf = (string)($_POST['csrf_token'] ?? '');
    $postedRoleId = trim((string)($_POST['role_id'] ?? ''));
    if (isset($rolesById[$postedRoleId])) {
        $activeRole = $rolesById[$postedRoleId];
    } else {
        $activeRole = $openRoles[0];
    }
    $initialTab = 'application';

    $form['role_id'] = $activeRole['id'];
    $form['name'] = trim((string)($_POST['name'] ?? ''));
    $form['email'] = trim((string)($_POST['email'] ?? ''));
    $form['phone'] = trim((string)($_POST['phone'] ?? ''));
    $form['portfolio'] = trim((string)($_POST['portfolio'] ?? ''));
    $form['note'] = trim((string)($_POST['note'] ?? ''));

    if ($honeypot !== '') {
        $submitted = true;
    } elseif (!verify_csrf($csrf)) {
        $errors['form'] = 'Your session expired. Please refresh and submit again.';
    } else {
        if ($form['name'] === '' || mb_strlen($form['name']) < 2) {
            $errors['name'] = 'Please enter your full name.';
        }
        if (!filter_var($form['email'], FILTER_VALIDATE_EMAIL)) {
            $errors['email'] = 'Please enter a valid email address.';
        }
        if ($form['note'] === '' || mb_strlen($form['note']) < 12) {
            $errors['note'] = 'Please share a brief summary of your background and projects.';
        }

        $resumePathSaved = '';
        if (isset($_FILES['resume']) && $_FILES['resume']['error'] !== UPLOAD_ERR_NO_FILE) {
            if ($_FILES['resume']['error'] !== UPLOAD_ERR_OK) {
                $errors['resume'] = 'Resume upload failed. Please try again.';
            } else {
                $ext = strtolower(pathinfo((string)$_FILES['resume']['name'], PATHINFO_EXTENSION));
                if (!in_array($ext, ['pdf', 'doc', 'docx'], true)) {
                    $errors['resume'] = 'Please upload a PDF, DOC, or DOCX file.';
                } elseif ((int)$_FILES['resume']['size'] > 5 * 1024 * 1024) {
                    $errors['resume'] = 'Resume file must be under 5 MB.';
                } else {
                    $resumeDir = __DIR__ . '/storage/resumes';
                    if (!is_dir($resumeDir)) {
                        mkdir($resumeDir, 0755, true);
                    }
                    $safeName = bin2hex(random_bytes(8)) . '.' . $ext;
                    if (move_uploaded_file($_FILES['resume']['tmp_name'], $resumeDir . '/' . $safeName)) {
                        $resumePathSaved = 'storage/resumes/' . $safeName;
                    }
                }
            }
        }

        if (empty($errors)) {
            $storageDir = __DIR__ . '/storage';
            if (!is_dir($storageDir)) {
                mkdir($storageDir, 0755, true);
            }
            $storageFile = $storageDir . '/applications.json';
            $existing = is_file($storageFile) ? (json_decode((string)file_get_contents($storageFile), true) ?: []) : [];
            $existing[] = [
                'id' => bin2hex(random_bytes(6)),
                'submitted_at' => gmdate('c'),
                'role_id' => $activeRole['id'],
                'role_title' => $activeRole['title'],
                'name' => $form['name'],
                'email' => $form['email'],
                'phone' => $form['phone'],
                'portfolio' => $form['portfolio'],
                'resume' => $resumePathSaved,
                'note' => $form['note'],
            ];
            file_put_contents($storageFile, json_encode($existing, JSON_PRETTY_PRINT), LOCK_EX);
            $submitted = true;
        }
    }
}

$pageTitle = $activeRole ? $activeRole['title'] . ' — Join Us' : 'Join Us — Careers';
$pageDescription = 'Join Sentician in Bengaluru, India to engineer AI Agents, Computer Vision, Autonomous Robotics, and Organization OS.';
$activePage = 'careers';
include __DIR__ . '/includes/header.php';
?>

<?php if ($activeRole): ?>
<!-- ==================== ROLE DETAIL & APPLICATION VIEW (Ashby / Roboflow Corporate Flow) ==================== -->
<section class="sentician-solutions-hero sentician-career-detail-hero">
    <div class="sentician-solutions-aurora" aria-hidden="true">
        <img src="assets/images/solutions-hero-aurora.webp" alt="" loading="eager" decoding="async">
        <div class="sentician-solutions-aurora-fade"></div>
    </div>

    <div class="container sentician-solutions-hero-inner">
        <div class="sentician-solutions-eyebrow">
            <span><?= e($activeRole['dept']) ?> &bull; <?= e($activeRole['location']) ?></span>
        </div>
        <h1 class="sentician-solutions-title"><?= e($activeRole['title']) ?></h1>
        <p class="sentician-solutions-sub"><?= e($activeRole['summary']) ?></p>
    </div>
</section>

<section class="section sentician-role-detail-section">
    <div class="container">
        <div class="sentician-role-back-row">
            <a href="careers.php#open-roles" class="sentician-contact-btn">&larr; Back to All Open Roles</a>
        </div>

        <div class="sentician-role-layout">
            <aside class="sentician-role-sidebar" data-reveal>
                <div class="sentician-role-meta-item">
                    <span>Location</span>
                    <strong><?= e($activeRole['location']) ?></strong>
                </div>
                <div class="sentician-role-meta-item">
                    <span>Employment Type</span>
                    <strong><?= e($activeRole['type']) ?></strong>
                </div>
                <div class="sentician-role-meta-item">
                    <span>Work Mode</span>
                    <strong><?= e($activeRole['work_mode']) ?></strong>
                </div>
                <div class="sentician-role-meta-item">
                    <span>Department</span>
                    <strong><?= e($activeRole['dept']) ?></strong>
                </div>
                <div class="sentician-role-meta-item">
                    <span>Compensation</span>
                    <strong><?= e($activeRole['comp']) ?></strong>
                </div>
            </aside>

            <div class="sentician-role-main" data-reveal>
                <div class="sentician-role-tabs" role="tablist" aria-label="Role Details and Application">
                    <button type="button"
                            class="sentician-role-tab <?= $initialTab === 'overview' ? 'is-active' : '' ?>"
                            role="tab"
                            aria-selected="<?= $initialTab === 'overview' ? 'true' : 'false' ?>"
                            data-role-tab="overview">
                        Overview
                    </button>
                    <button type="button"
                            class="sentician-role-tab <?= $initialTab === 'application' ? 'is-active' : '' ?>"
                            role="tab"
                            aria-selected="<?= $initialTab === 'application' ? 'true' : 'false' ?>"
                            data-role-tab="application">
                        Application
                    </button>
                </div>

                <!-- Tab 1: Overview -->
                <div class="sentician-role-pane <?= $initialTab === 'overview' ? 'is-active' : '' ?>" data-role-pane="overview">
                    <div class="sentician-role-block">
                        <h2>Who We Are</h2>
                        <p>
                            At Sentician, we are an Artificial Intelligence and Robotics company headquartered in Bengaluru, India. We bring together AI, Machine Learning, Robotics, Computer Vision, NLP, and Edge IoT to engineer autonomous systems that transform how organizations operate.
                        </p>
                    </div>

                    <div class="sentician-role-block">
                        <h2>The Opportunity</h2>
                        <p><?= e($activeRole['opportunity']) ?></p>
                    </div>

                    <div class="sentician-role-block">
                        <h2>What You’ll Do</h2>
                        <ul>
                            <?php foreach ($activeRole['responsibilities'] as $item): ?>
                                <li><?= e($item) ?></li>
                            <?php endforeach; ?>
                        </ul>
                    </div>

                    <div class="sentician-role-block">
                        <h2>What We’re Looking For</h2>
                        <ul>
                            <?php foreach ($activeRole['qualifications'] as $item): ?>
                                <li><?= e($item) ?></li>
                            <?php endforeach; ?>
                        </ul>
                    </div>

                    <div class="sentician-role-cta-bar">
                        <button type="button" class="btn-glow-pill" data-switch-to-apply>Apply for This Role &rarr;</button>
                    </div>
                </div>

                <!-- Tab 2: Application -->
                <div class="sentician-role-pane <?= $initialTab === 'application' ? 'is-active' : '' ?>" data-role-pane="application">
                    <?php if ($submitted): ?>
                        <div class="success-panel" role="status">
                            <div class="success-icon" aria-hidden="true">&#10003;</div>
                            <h2>Application Submitted</h2>
                            <p>
                                Thank you, <strong><?= e($form['name']) ?></strong>. Your application for <strong><?= e($activeRole['title']) ?></strong> has been received by our Bengaluru hiring team. We’ll contact you at <strong><?= e($form['email']) ?></strong>.
                            </p>
                            <div class="success-actions">
                                <a href="careers.php#open-roles" class="btn btn-primary">Explore Other Roles</a>
                                <a href="about.php" class="btn btn-ghost">Who We Are</a>
                            </div>
                        </div>
                    <?php else: ?>
                        <form method="POST" action="careers.php?role=<?= e($activeRole['id']) ?>&amp;tab=application" enctype="multipart/form-data" class="contact-form" novalidate>
                            <input type="hidden" name="form_action" value="career_apply">
                            <input type="hidden" name="role_id" value="<?= e($activeRole['id']) ?>">
                            <input type="hidden" name="csrf_token" value="<?= e(csrf_token()) ?>">
                            <div class="hp-field" aria-hidden="true">
                                <label for="career_website">Website</label>
                                <input type="text" id="career_website" name="website" tabindex="-1" autocomplete="off">
                            </div>

                            <?php if (!empty($errors['form'])): ?>
                                <div class="form-alert" role="alert"><?= e($errors['form']) ?></div>
                            <?php endif; ?>

                            <div class="form-row">
                                <div class="form-field <?= isset($errors['name']) ? 'has-error' : '' ?>">
                                    <label for="app_name">Full Name <span aria-hidden="true">*</span></label>
                                    <input type="text" id="app_name" name="name" required value="<?= e($form['name']) ?>" placeholder="Aarav Sharma">
                                    <?php if (isset($errors['name'])): ?><small class="field-error"><?= e($errors['name']) ?></small><?php endif; ?>
                                </div>
                                <div class="form-field <?= isset($errors['email']) ? 'has-error' : '' ?>">
                                    <label for="app_email">Email Address <span aria-hidden="true">*</span></label>
                                    <input type="email" id="app_email" name="email" required value="<?= e($form['email']) ?>" placeholder="aarav@domain.com">
                                    <?php if (isset($errors['email'])): ?><small class="field-error"><?= e($errors['email']) ?></small><?php endif; ?>
                                </div>
                            </div>

                            <div class="form-row">
                                <div class="form-field">
                                    <label for="app_phone">Phone Number</label>
                                    <input type="tel" id="app_phone" name="phone" value="<?= e($form['phone']) ?>" placeholder="+91 98XXX XXXXX">
                                </div>
                                <div class="form-field">
                                    <label for="app_portfolio">LinkedIn / GitHub / Portfolio URL</label>
                                    <input type="url" id="app_portfolio" name="portfolio" value="<?= e($form['portfolio']) ?>" placeholder="https://github.com/username">
                                </div>
                            </div>

                            <div class="form-field <?= isset($errors['resume']) ? 'has-error' : '' ?>">
                                <label for="app_resume">Resume / CV (PDF, DOC, DOCX — max 5 MB)</label>
                                <label class="sentician-upload-dropzone" for="app_resume">
                                    <input type="file" id="app_resume" name="resume" accept=".pdf,.doc,.docx" class="sentician-upload-input">
                                    <span class="sentician-upload-btn">Upload File</span>
                                    <span class="sentician-upload-hint" id="resumeFileName">or drag and drop your resume here</span>
                                </label>
                                <?php if (isset($errors['resume'])): ?><small class="field-error"><?= e($errors['resume']) ?></small><?php endif; ?>
                            </div>

                            <div class="form-field <?= isset($errors['note']) ? 'has-error' : '' ?>">
                                <label for="app_note">Why Sentician &amp; Notable Work <span aria-hidden="true">*</span></label>
                                <textarea id="app_note" name="note" rows="5" required placeholder="Share links or highlights of AI, robotics, vision, or systems you’ve shipped..."><?= e($form['note']) ?></textarea>
                                <?php if (isset($errors['note'])): ?><small class="field-error"><?= e($errors['note']) ?></small><?php endif; ?>
                            </div>

                            <div class="form-submit-row">
                                <button type="submit" class="btn-glow-pill">Submit Application</button>
                                <span class="privacy-note">Reviewed directly by Sentician hiring leads in Bengaluru.</span>
                            </div>
                        </form>
                    <?php endif; ?>
                </div>
            </div>
        </div>
    </div>
</section>

<?php else: ?>
<!-- ==================== 1. CORPORATE JOIN US AURORA HERO ==================== -->
<section class="sentician-solutions-hero">
    <div class="sentician-solutions-aurora" aria-hidden="true">
        <img src="assets/images/solutions-hero-aurora.webp" alt="" loading="eager" decoding="async">
        <div class="sentician-solutions-aurora-fade"></div>
    </div>

    <div class="sentician-solutions-hero-inner">
        <div class="sentician-solutions-eyebrow" data-reveal>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
            <span>CAREERS AT SENTICIAN</span>
        </div>

        <h1 class="sentician-solutions-title" data-reveal>Build What Comes Next<br>at Sentician</h1>
        <p class="sentician-solutions-sub" data-reveal>
            Join our Bengaluru, India engineering and research teams advancing Agentic AI, Computer Vision, and Autonomous Robotics.
        </p>

        <div class="sentician-blog-hero-actions" data-reveal>
            <a href="#open-roles" class="btn-glow-pill">Explore Open Roles (<?= count($openRoles) ?>)</a>
            <a href="#why-sentician" class="btn-gradient-outline">Life at Sentician</a>
        </div>
    </div>
</section>

<!-- ==================== 2. CORPORATE CULTURE & BENEFITS (Clean Icon Cards) ==================== -->
<section class="section sentician-careers-pillars" id="why-sentician">
    <div class="container">
        <div class="org-os-eyebrow-row" data-reveal>
            <div class="org-os-tag-pill">
                <img src="assets/images/icons/3UovOTKirX07vhyWYJGSliEt1E4.svg" alt="" width="20" height="20">
                <span>WHY SENTICIAN</span>
            </div>
            <div class="org-os-divider-line" aria-hidden="true"></div>
        </div>

        <div class="split-section-head sentician-about-head" data-reveal>
            <h2>Built for high-craft engineers &amp; researchers.</h2>
            <p class="split-section-sub">
                High autonomy, real hardware &amp; production scale, and direct ownership from research paper to live deployment.
            </p>
        </div>

        <div class="sentician-corp-pillars-grid" data-reveal>
            <article class="sentician-corp-pillar">
                <div class="sentician-corp-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
                </div>
                <h3>Frontier R&amp;D</h3>
                <p>Work directly on multi-agent orchestration, real-time Computer Vision, ROS2 robotics, and Edge AI.</p>
            </article>

            <article class="sentician-corp-pillar">
                <div class="sentician-corp-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                </div>
                <h3>High Ownership &amp; Speed</h3>
                <p>Small, senior-led pods where you own architecture decisions end-to-end without bureaucratic layers.</p>
            </article>

            <article class="sentician-corp-pillar">
                <div class="sentician-corp-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <h3>Bengaluru Studio</h3>
                <p>Collaborate at our Bengaluru, India headquarters with dedicated robotics hardware &amp; hybrid flexibility.</p>
            </article>

            <article class="sentician-corp-pillar">
                <div class="sentician-corp-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                </div>
                <h3>Compensation &amp; Growth</h3>
                <p>Competitive base salary, meaningful equity ownership, compute stipends, and conference sponsorship.</p>
            </article>
        </div>
    </div>
</section>

<!-- ==================== 3. CORPORATE INTERACTIVE JOB BOARD (Roboflow / Ashby Style) ==================== -->
<section class="section sentician-jobboard-section" id="open-roles">
    <div class="container">
        <div class="split-section-head sentician-about-head" data-reveal>
            <h2>Open Roles</h2>
            <p class="split-section-sub">
                Ready to join the team? Filter by department or work mode and click any role to view full details and apply.
            </p>
        </div>

        <div class="sentician-jobboard" data-reveal>
            <!-- Left Filter Sidebar -->
            <aside class="sentician-jobboard-sidebar" aria-label="Filter open roles">
                <div class="sentician-jb-search">
                    <input type="search" id="jobSearchInput" placeholder="Search roles..." aria-label="Search open roles">
                </div>

                <div class="sentician-jb-filter-group">
                    <div class="sentician-jb-filter-title">Department</div>
                    <label class="sentician-jb-check">
                        <input type="radio" name="jb_dept" value="all" checked>
                        <span>All</span>
                        <em><?= count($openRoles) ?></em>
                    </label>
                    <?php foreach ($deptLabels as $slug => $label): ?>
                        <label class="sentician-jb-check">
                            <input type="radio" name="jb_dept" value="<?= e($slug) ?>">
                            <span><?= e($label) ?></span>
                            <em><?= $deptCounts[$slug] ?? 0 ?></em>
                        </label>
                    <?php endforeach; ?>
                </div>

                <div class="sentician-jb-filter-group">
                    <div class="sentician-jb-filter-title">Work Mode</div>
                    <label class="sentician-jb-check">
                        <input type="radio" name="jb_mode" value="all" checked>
                        <span>All</span>
                    </label>
                    <label class="sentician-jb-check">
                        <input type="radio" name="jb_mode" value="hybrid">
                        <span>Hybrid</span>
                    </label>
                    <label class="sentician-jb-check">
                        <input type="radio" name="jb_mode" value="onsite">
                        <span>On-Site</span>
                    </label>
                </div>

                <button type="button" class="sentician-jb-clear-btn" id="jobFilterClear">Clear Filters</button>
            </aside>

            <!-- Right Role List -->
            <div class="sentician-jobboard-list">
                <div class="sentician-jb-list-header">
                    <span id="jobBoardHeading">All Open Positions</span>
                    <strong id="jobBoardCount"><?= count($openRoles) ?></strong>
                </div>

                <div class="sentician-jb-rows" id="jobBoardRows">
                    <?php foreach ($openRoles as $role): ?>
                        <a href="careers.php?role=<?= e($role['id']) ?>"
                           class="sentician-jb-row"
                           data-jb-dept="<?= e($role['dept_slug']) ?>"
                           data-jb-mode="<?= e($role['work_slug']) ?>"
                           data-jb-search="<?= e(strtolower($role['title'] . ' ' . $role['dept'] . ' ' . $role['summary'])) ?>">
                            <div class="sentician-jb-row-main">
                                <h3><?= e($role['title']) ?></h3>
                                <div class="sentician-jb-badges">
                                    <span class="sentician-jb-pill"><?= e(strtoupper($role['type'])) ?></span>
                                    <span class="sentician-jb-pill"><?= e(strtoupper($role['location'])) ?></span>
                                    <span class="sentician-jb-pill"><?= e(strtoupper($role['work_mode'])) ?></span>
                                    <span class="sentician-jb-pill sentician-jb-pill--dept"><?= e(strtoupper($role['dept'])) ?></span>
                                </div>
                            </div>
                            <span class="sentician-jb-arrow" aria-hidden="true">View Role &rarr;</span>
                        </a>
                    <?php endforeach; ?>
                </div>

                <div class="sentician-jb-empty" id="jobBoardEmpty" hidden>
                    <p>No roles match your current filters.</p>
                    <button type="button" class="sentician-contact-btn" id="jobFilterEmptyReset">Reset Filters</button>
                </div>
            </div>
        </div>
    </div>
</section>
<?php endif; ?>

<?php include __DIR__ . '/includes/footer.php'; ?>
