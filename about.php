<?php
declare(strict_types=1);

$pageTitle = 'About Sentician';
$pageDescription = 'Sentician is an Artificial Intelligence and Robotics company engineering intelligent technologies across Computer Vision, Agentic AI, Autonomous Robotics, NLP, IoT, and Future Intelligence.';
$activePage = 'about';

$technologyDomains = [
    [
        'num' => '01',
        'code' => 'CV-01 • PERCEPTION',
        'title' => 'Computer Vision',
        'desc' => 'AI-powered vision systems that enable machines to interpret images and videos, recognize objects, detect patterns, and understand their surroundings.',
        'label' => 'Projects',
        'image' => 'assets/images/domain-cv.jpg',
        'svg_type' => 'reticle',
        'tags' => ['Object Detection', 'Facial Recognition', 'Image Segmentation', 'Defect Detection', 'Real-time Video Analytics'],
    ],
    [
        'num' => '02',
        'code' => 'AGT-02 • ORCHESTRATION',
        'title' => 'Agentic AI',
        'desc' => 'Intelligent AI agents that understand objectives, plan actions, use tools, collaborate, and execute multi-step tasks autonomously.',
        'label' => 'Projects',
        'image' => 'assets/images/AroYsG98cecxdfVar1RpE3QmpjY.webp',
        'svg_type' => 'agents',
        'tags' => ['Multi-Agent Systems', 'AI Workflow Automation', 'Autonomous Research Agents', 'AI Copilots', 'Decision Agents'],
    ],
    [
        'num' => '03',
        'code' => 'ROS-03 • AUTONOMY',
        'title' => 'Robotics & Autonomous Systems',
        'desc' => 'Intelligent robotic systems combining sensing, perception, planning, and control to interact safely and reliably with the physical environment.',
        'label' => 'Projects',
        'image' => 'assets/images/solutions-hero-aurora.webp',
        'svg_type' => 'robotics',
        'tags' => ['Robotic Automation', 'Autonomous Navigation', 'Human-Robot Interaction', 'ROS', 'Robotic Manipulation'],
    ],
    [
        'num' => '04',
        'code' => 'IOT-04 • TELEMETRY',
        'title' => 'Internet of Things (IoT)',
        'desc' => 'Connecting devices, sensors, and intelligent systems to build smart, responsive, and data-driven physical and digital environments.',
        'label' => 'Projects',
        'image' => 'assets/images/exceptionality-capabilities.png',
        'svg_type' => 'iot',
        'tags' => ['Smart Monitoring', 'Industrial IoT', 'Sensor Networks', 'Predictive Maintenance', 'Edge Computing'],
    ],
    [
        'num' => '05',
        'code' => 'NLP-05 • LANGUAGE',
        'title' => 'Natural Language Processing (NLP)',
        'desc' => 'Intelligent language technologies that enable computers to understand, reason over, process, and generate human language.',
        'label' => 'Projects',
        'image' => 'assets/images/domain-nlp.jpg',
        'svg_type' => 'waveform',
        'tags' => ['Conversational AI', 'Chatbots', 'Sentiment Analysis', 'Speech Recognition', 'Document Intelligence', 'RAG Systems'],
    ],
    [
        'num' => '06',
        'code' => 'ML-06 • NEURAL CORE',
        'title' => 'Artificial Intelligence & Machine Learning',
        'desc' => 'Intelligent models that learn from data, identify complex patterns, make predictions, and support high-stakes data-driven decisions.',
        'label' => 'Projects',
        'image' => 'assets/images/exceptionality-speed.webp',
        'svg_type' => 'neural',
        'tags' => ['Deep Learning', 'Predictive Analytics', 'Generative AI', 'Neural Networks', 'Recommendation Systems'],
    ],
    [
        'num' => '07',
        'code' => 'EDG-07 • SILICON',
        'title' => 'Edge AI & Embedded Intelligence',
        'desc' => 'Deploying intelligent models directly on devices and embedded hardware for real-time processing with reduced cloud dependence.',
        'label' => 'Projects',
        'image' => 'assets/images/AroYsG98cecxdfVar1RpE3QmpjY.webp',
        'svg_type' => 'chip',
        'tags' => ['Embedded AI', 'Edge Inference', 'Smart Devices', 'Real-time Processing', 'TinyML'],
    ],
    [
        'num' => '08',
        'code' => 'AGI-08 • FRONTIER',
        'title' => 'Future Intelligence — AGI & ASI Research',
        'desc' => 'Long-term research ambitions exploring advanced reasoning, adaptive learning, autonomous intelligence, and responsible human-AI collaboration.',
        'label' => 'Research Areas',
        'image' => 'assets/images/domain-agi.jpg',
        'svg_type' => 'orbital',
        'tags' => ['AGI', 'Advanced Reasoning', 'Multimodal Intelligence', 'Self-improving Systems', 'AI Safety'],
    ],
];

$approachPrinciples = [
    [
        'num' => '01',
        'tag' => 'DISCOVERY',
        'title' => 'Research',
        'image' => 'assets/images/approach-research.jpg',
        'svg' => 'research',
        'desc' => 'Exploring emerging technologies and identifying opportunities to solve complex real-world challenges.',
    ],
    [
        'num' => '02',
        'tag' => 'ARCHITECTURE',
        'title' => 'Engineering',
        'image' => 'assets/images/approach-engineering.jpg',
        'svg' => 'engineering',
        'desc' => 'Designing and developing production AI models, intelligent applications, and robotic systems.',
    ],
    [
        'num' => '03',
        'tag' => 'SYNTHESIS',
        'title' => 'Innovation',
        'image' => 'assets/images/approach-innovation.jpg',
        'svg' => 'innovation',
        'desc' => 'Experimenting with new architectures, autonomous systems, and next-generation technologies.',
    ],
    [
        'num' => '04',
        'tag' => 'DEPLOYMENT',
        'title' => 'Impact',
        'image' => 'assets/images/approach-impact.jpg',
        'svg' => 'impact',
        'desc' => 'Delivering practical solutions that create measurable value for businesses and society.',
    ],
];

$industries = [
    'Manufacturing',
    'Healthcare',
    'Automotive',
    'Smart Cities',
    'Logistics',
    'Agriculture',
    'Enterprise Technology',
];

require_once __DIR__ . '/includes/header.php';
?>

<!-- 1. HERO PHOTO + WHO WE ARE STATEMENT (Preserving sen10.mp4 layout) -->
<section class="sentician-about-hero">
    <div class="sentician-about-photo-wrap" aria-hidden="true">
        <img src="assets/images/about-hero-team.webp" alt="" width="1340" height="597" loading="eager" decoding="async" style="margin-top: 150px">
    </div>

    <div class="container sentician-about-mission">
        <div class="sentician-about-who-eyebrow">AI &bull; Robotics &bull; Future Technologies</div>
        <h1 class="sentician-about-who-title">Think. Evolve. Transcend.</h1>
        <p class="sentician-about-mission-text">
            At Sentician, we are an AI and Robotics company building intelligent technologies that shape the future.
            
            We combine Artificial Intelligence, Agentic AI, Computer Vision, Robotics, NLP and IoT to create smarter, autonomous solutions that solve real-world challenges.
            
            We don't just build technology. We engineer intelligence for tomorrow.
        </p>
    </div>
</section>

<!-- 2. VISION, MISSION & CORE PHILOSOPHY 3-CARD SECTION (Preserving sen10.mp4 3-card layout) -->
<section class="section sentician-about-committed">
    <div class="container">
        <div class="org-os-eyebrow-row" data-reveal>
            <div class="org-os-tag-pill">
                <img src="assets/images/icons/3UovOTKirX07vhyWYJGSliEt1E4.svg" alt="" width="20" height="20">
                <span>VISION &amp; MISSION</span>
            </div>
            <div class="org-os-divider-line" aria-hidden="true"></div>
        </div>

        <div class="split-section-head sentician-about-head" data-reveal>
            <h2>Think Beyond Automation. Engineer Intelligence.</h2>
            <p class="split-section-sub">
                From practical Computer Vision, Robotics, and Agentic AI today to long-term AGI and ASI research ambitions.
            </p>
        </div>

        <div class="sentician-committed-grid" data-reveal>
            <article class="sentician-committed-card sentician-committed-card--amber-left">
                <div class="sentician-committed-copy">
                    <h3>Our Vision</h3>
                    <p>
                        To shape a future where Artificial Intelligence and Robotics work together to create a smarter, more connected world—progressing responsibly toward Artificial General Intelligence (AGI) and long-term Artificial Superintelligence (ASI) research.
                    </p>
                </div>
                <div class="sentician-committed-art" aria-hidden="true">
                    <svg viewBox="0 0 180 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="90" cy="52" r="36" stroke="rgba(255,255,255,0.68)" stroke-width="1.1"/>
                        <circle cx="66" cy="90" r="36" stroke="rgba(255,255,255,0.68)" stroke-width="1.1"/>
                        <circle cx="114" cy="90" r="36" stroke="rgba(255,255,255,0.68)" stroke-width="1.1"/>
                    </svg>
                </div>
            </article>

            <article class="sentician-committed-card sentician-committed-card--blue-center">
                <div class="sentician-committed-copy">
                    <h3>Our Mission</h3>
                    <p>
                        To research, engineer, and deploy practical AI and Robotics solutions—spanning Computer Vision, Agentic AI, autonomous robotics, IoT &amp; Edge AI, and NLP—that solve real-world problems with measurable impact.
                    </p>
                </div>
                <div class="sentician-committed-art" aria-hidden="true">
                    <svg viewBox="0 0 180 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="90" y1="12" x2="90" y2="128" stroke="rgba(255,255,255,0.68)" stroke-width="1.1"/>
                        <line x1="32" y1="70" x2="148" y2="70" stroke="rgba(255,255,255,0.68)" stroke-width="1.1"/>
                        <line x1="49" y1="29" x2="131" y2="111" stroke="rgba(255,255,255,0.68)" stroke-width="1.1"/>
                        <line x1="131" y1="29" x2="49" y2="111" stroke="rgba(255,255,255,0.68)" stroke-width="1.1"/>
                    </svg>
                </div>
            </article>

            <article class="sentician-committed-card sentician-committed-card--amber-right">
                <div class="sentician-committed-copy">
                    <h3>Core Philosophy</h3>
                    <p>
                        Intelligence should create possibilities. We see AI not merely as an automation tool, but as the foundation for intelligent systems that collaborate with humans, understand complex environments, and deliver lasting value.
                    </p>
                </div>
                <div class="sentician-committed-art" aria-hidden="true">
                    <svg viewBox="0 0 180 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <ellipse cx="64" cy="70" rx="34" ry="38" stroke="rgba(255,255,255,0.68)" stroke-width="1.1"/>
                        <ellipse cx="81" cy="70" rx="34" ry="38" stroke="rgba(255,255,255,0.68)" stroke-width="1.1"/>
                        <ellipse cx="99" cy="70" rx="34" ry="38" stroke="rgba(255,255,255,0.68)" stroke-width="1.1"/>
                        <ellipse cx="116" cy="70" rx="34" ry="38" stroke="rgba(255,255,255,0.68)" stroke-width="1.1"/>
                    </svg>
                </div>
            </article>
        </div>
    </div>
</section>

<!-- 3. WHAT WE DO — OUR TECHNOLOGY DOMAINS (8 Cards) -->
<section class="section sentician-about-domains" id="technology-domains">
    <div class="container">
        <div class="org-os-eyebrow-row" data-reveal>
            <div class="org-os-tag-pill">
                <img src="assets/images/icons/3UovOTKirX07vhyWYJGSliEt1E4.svg" alt="" width="20" height="20">
                <span>WHAT WE DO</span>
            </div>
            <div class="org-os-divider-line" aria-hidden="true"></div>
        </div>

        <div class="split-section-head sentician-about-head" data-reveal>
            <h2>Our Technology Domains</h2>
            <p class="split-section-sub">
                Eight core engineering and research pillars bridging physical robotics, edge intelligence, and autonomous software.
            </p>
        </div>

        <div class="sentician-domains-grid">
            <?php foreach ($technologyDomains as $domain): ?>
                <article class="sentician-domain-card" data-reveal>
                    <div class="sentician-domain-media">
                        <img src="<?= e($domain['image']) ?>" alt="<?= e($domain['title']) ?>" loading="lazy" decoding="async">
                        <div class="sentician-domain-media-overlay" aria-hidden="true"></div>
                        <div class="sentician-domain-scanline" aria-hidden="true"></div>

                        <div class="sentician-domain-status">
                            <span class="sentician-domain-status-dot" aria-hidden="true"></span>
                            <span><?= e($domain['code']) ?></span>
                        </div>

                        <svg class="sentician-domain-hud sentician-domain-hud--<?= e($domain['svg_type']) ?>" viewBox="0 0 320 180" fill="none" aria-hidden="true">
                            <?php if ($domain['svg_type'] === 'agents'): ?>
                                <path class="hud-flow-line" d="M60 90 L160 45 L260 90 L160 135 Z" stroke="rgba(125,164,255,0.55)" stroke-width="1.5"/>
                                <line class="hud-flow-line" x1="160" y1="45" x2="160" y2="135" stroke="rgba(255,154,60,0.55)" stroke-width="1.4"/>
                                <circle class="hud-pulse-node" cx="60" cy="90" r="7" fill="#0084FF"/>
                                <circle class="hud-pulse-node" cx="160" cy="45" r="8" fill="#FF7A00"/>
                                <circle class="hud-pulse-node" cx="260" cy="90" r="7" fill="#0084FF"/>
                                <circle class="hud-pulse-node" cx="160" cy="135" r="7" fill="#93C5FD"/>
                            <?php elseif ($domain['svg_type'] === 'robotics'): ?>
                                <circle class="hud-spin-slow" cx="160" cy="90" r="56" stroke="rgba(125,164,255,0.38)" stroke-width="1.2" stroke-dasharray="8 6"/>
                                <path class="hud-flow-line" d="M90 132 L132 82 L182 64 L224 94" stroke="#93C5FD" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <circle class="hud-pulse-node" cx="90" cy="132" r="6" fill="#FF7A00"/>
                                <circle class="hud-pulse-node" cx="132" cy="82" r="6" fill="#0084FF"/>
                                <circle class="hud-pulse-node" cx="182" cy="64" r="6" fill="#FFFFFF"/>
                                <circle class="hud-pulse-node" cx="224" cy="94" r="5" fill="#FF7A00"/>
                            <?php elseif ($domain['svg_type'] === 'iot'): ?>
                                <circle class="hud-pulse-ring" cx="160" cy="90" r="24" stroke="rgba(0,132,255,0.75)" stroke-width="1.5"/>
                                <circle class="hud-pulse-ring hud-pulse-ring--d1" cx="160" cy="90" r="46" stroke="rgba(125,164,255,0.48)" stroke-width="1.2"/>
                                <circle class="hud-pulse-ring hud-pulse-ring--d2" cx="160" cy="90" r="68" stroke="rgba(255,122,0,0.4)" stroke-width="1.2"/>
                                <circle class="hud-pulse-node" cx="160" cy="90" r="6" fill="#FFFFFF"/>
                            <?php elseif ($domain['svg_type'] === 'neural'): ?>
                                <path class="hud-flow-line" d="M64 52 L160 40 L256 64 M64 90 L160 90 L256 90 M64 128 L160 140 L256 116 M64 52 L160 90 L256 116 M64 128 L160 90 L256 64" stroke="rgba(147,197,253,0.45)" stroke-width="1.3"/>
                                <circle class="hud-pulse-node" cx="64" cy="52" r="5" fill="#0084FF"/>
                                <circle class="hud-pulse-node" cx="64" cy="90" r="5" fill="#0084FF"/>
                                <circle class="hud-pulse-node" cx="64" cy="128" r="5" fill="#0084FF"/>
                                <circle class="hud-pulse-node" cx="160" cy="40" r="6" fill="#FF7A00"/>
                                <circle class="hud-pulse-node" cx="160" cy="90" r="7" fill="#FFFFFF"/>
                                <circle class="hud-pulse-node" cx="160" cy="140" r="6" fill="#FF7A00"/>
                                <circle class="hud-pulse-node" cx="256" cy="64" r="5" fill="#93C5FD"/>
                                <circle class="hud-pulse-node" cx="256" cy="90" r="5" fill="#93C5FD"/>
                                <circle class="hud-pulse-node" cx="256" cy="116" r="5" fill="#93C5FD"/>
                            <?php elseif ($domain['svg_type'] === 'chip'): ?>
                                <rect x="116" y="46" width="88" height="88" rx="14" stroke="rgba(147,197,253,0.6)" stroke-width="1.6" fill="rgba(6,7,10,0.65)"/>
                                <rect x="134" y="64" width="52" height="52" rx="8" stroke="rgba(255,122,0,0.7)" stroke-width="1.4"/>
                                <path class="hud-flow-line" d="M84 72 H116 M84 108 H116 M204 72 H236 M204 108 H236 M142 18 V46 M178 18 V46 M142 134 V162 M178 134 V162" stroke="#60A5FA" stroke-width="2" stroke-linecap="round"/>
                                <circle class="hud-pulse-node" cx="160" cy="90" r="7" fill="#0084FF"/>
                            <?php endif; ?>
                        </svg>
                    </div>

                    <div class="sentician-domain-body">
                        <div class="sentician-domain-top">
                            <span class="sentician-domain-num"><?= e($domain['num']) ?></span>
                            <span class="sentician-domain-label"><?= e($domain['label']) ?></span>
                        </div>
                        <h3><?= e($domain['title']) ?></h3>
                        <p><?= e($domain['desc']) ?></p>
                        <div class="sentician-domain-tags">
                            <?php foreach ($domain['tags'] as $tag): ?>
                                <span class="sentician-domain-tag"><?= e($tag) ?></span>
                            <?php endforeach; ?>
                        </div>
                    </div>
                </article>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<!-- 4. OUR APPROACH & INDUSTRIES WE TRANSFORM -->
<section class="section sentician-about-approach">
    <div class="container">
        <div class="org-os-eyebrow-row" data-reveal>
            <div class="org-os-tag-pill">
                <img src="assets/images/icons/01d6Xos4x3sbU293TmKaFduYFAc.svg" alt="" width="20" height="20">
                <span>OUR APPROACH</span>
            </div>
            <div class="org-os-divider-line" aria-hidden="true"></div>
        </div>

        <div class="split-section-head sentician-about-head" data-reveal>
            <h2>From an idea to intelligent execution.</h2>
            <p class="split-section-sub">
                Built around four engineering principles that turn emerging research into measurable real-world impact.
            </p>
        </div>

        <div class="sentician-approach-grid" data-reveal>
            <?php foreach ($approachPrinciples as $step): ?>
                <article class="sentician-approach-card">
                    <div class="sentician-approach-media">
                        <img src="<?= e($step['image']) ?>" alt="<?= e($step['title']) ?>" loading="lazy" decoding="async">
                        <div class="sentician-domain-media-overlay" aria-hidden="true"></div>
                        <div class="sentician-domain-scanline" aria-hidden="true"></div>

                        <svg class="sentician-domain-hud" viewBox="0 0 280 150" fill="none" aria-hidden="true">
                            <?php if ($step['svg'] === 'research'): ?>
                                <circle class="hud-spin-slow" cx="140" cy="75" r="46" stroke="rgba(125,164,255,0.45)" stroke-width="1.3" stroke-dasharray="7 5"/>
                                <circle class="hud-pulse-ring" cx="140" cy="75" r="24" stroke="rgba(255,122,0,0.65)" stroke-width="1.4"/>
                                <circle class="hud-pulse-node" cx="140" cy="75" r="5" fill="#FFFFFF"/>
                            <?php elseif ($step['svg'] === 'engineering'): ?>
                                <path class="hud-flow-line" d="M44 105 H106 L128 60 H188 L210 42 H240" stroke="#60A5FA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path class="hud-flow-line" d="M44 48 H88 L112 94 H174 L198 112 H240" stroke="rgba(255,122,0,0.75)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                                <circle class="hud-pulse-node" cx="128" cy="60" r="5" fill="#0084FF"/>
                                <circle class="hud-pulse-node" cx="174" cy="94" r="5" fill="#FF7A00"/>
                            <?php elseif ($step['svg'] === 'innovation'): ?>
                                <polygon class="hud-flow-line" points="140,26 196,75 140,124 84,75" stroke="rgba(147,197,253,0.65)" stroke-width="1.6"/>
                                <circle class="hud-pulse-node" cx="140" cy="26" r="5" fill="#FF7A00"/>
                                <circle class="hud-pulse-node" cx="196" cy="75" r="5" fill="#0084FF"/>
                                <circle class="hud-pulse-node" cx="140" cy="124" r="5" fill="#93C5FD"/>
                                <circle class="hud-pulse-node" cx="84" cy="75" r="5" fill="#0084FF"/>
                            <?php else: ?>
                                <path class="hud-flow-line" d="M48 112 C86 110, 108 82, 146 72 C176 64, 200 38, 234 32" stroke="#60A5FA" stroke-width="2.4" stroke-linecap="round"/>
                                <circle class="hud-pulse-ring" cx="234" cy="32" r="14" stroke="rgba(255,122,0,0.65)" stroke-width="1.3"/>
                                <circle class="hud-pulse-node" cx="234" cy="32" r="5.5" fill="#FF7A00"/>
                            <?php endif; ?>
                        </svg>
                    </div>

                    <div class="sentician-approach-body">
                        <span class="sentician-approach-kicker"><?= e($step['num']) ?> &bull; <?= e($step['tag']) ?></span>
                        <h3><?= e($step['title']) ?></h3>
                        <p><?= e($step['desc']) ?></p>
                    </div>
                </article>
            <?php endforeach; ?>
        </div>

        <div class="sentician-industries-bar" data-reveal>
            <span class="sentician-industries-label">Industries We Transform</span>
            <div class="sentician-industries-list">
                <?php foreach ($industries as $industry): ?>
                    <span class="sentician-industry-pill"><?= e($industry) ?></span>
                <?php endforeach; ?>
            </div>
        </div>
    </div>
</section>

<!-- 5. "JOIN US" BENTO SECTION (Preserving sen10.mp4 00:09-00:12, no founder/team personal info) -->
<section class="section sentician-about-join">
    <div class="sentician-about-join-glow" aria-hidden="true"></div>

    <div class="container sentician-about-join-grid">
        <div class="sentician-about-join-left" data-reveal>
            <div class="sentician-about-eyebrow-block">
                <div class="org-os-tag-pill">
                    <img src="assets/images/icons/01d6Xos4x3sbU293TmKaFduYFAc.svg" alt="" width="20" height="20">
                    <span>INNOVATION &amp; TALENT</span>
                </div>
                <div class="org-os-divider-line" aria-hidden="true"></div>
            </div>

            <h2>Join us as we engineer<br>tomorrow’s intelligence.</h2>

            <p>
                Sentician brings together AI engineers, robotics researchers, and emerging talent to build practical prototypes and production systems across Computer Vision, Agentic AI, and Autonomous Systems.
            </p>

            <div>
                <a href="careers.php" class="btn-gradient-outline sentician-about-join-btn">
                    <span>Join Our Team</span>
                </a>
            </div>
        </div>

        <div class="sentician-about-bento" data-reveal>
            <div class="sentician-about-bento-col">
                <div class="sentician-about-bento-photo sentician-about-bento-photo--team">
                    <img src="assets/images/about-join-team.png" alt="Sentician engineering collaboration" width="600" height="700" loading="lazy" decoding="async">
                </div>
                <div class="sentician-about-bento-slab" aria-hidden="true">
                    <img src="assets/images/exceptionality-speed.webp" alt="" width="600" height="240" loading="lazy" decoding="async">
                </div>
            </div>

            <div class="sentician-about-bento-col">
                <div class="sentician-about-bento-slab" aria-hidden="true">
                    <img src="assets/images/security-slab-1.webp" alt="" width="600" height="240" loading="lazy" decoding="async">
                </div>
                <div class="sentician-about-bento-photo sentician-about-bento-photo--office">
                    <img src="assets/images/about-join-office.png" alt="Sentician architectural studio" width="600" height="700" loading="lazy" decoding="async">
                </div>
            </div>
        </div>
    </div>
</section>

<?php require_once __DIR__ . '/includes/footer.php'; ?>
