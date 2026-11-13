<?php
declare(strict_types=1);

$pageTitle = 'Privacy Policy';
$pageDescription = 'Understand how Sentician collects, processes, and protects enterprise and employee data across our AI Organization OS and autonomous agent platforms.';
$activePage = 'privacy';

require_once __DIR__ . '/includes/header.php';
?>

<section class="legal-hero">
    <div class="sentician-solutions-aurora" aria-hidden="true">
        <img src="assets/images/solutions-hero-aurora.webp" alt="" width="1890" height="680" loading="eager" decoding="async">
    </div>

    <div class="container legal-hero-inner">
        <div class="legal-badge">
            <img src="assets/images/icons/mH5OKmjNShfPxiFuUqwazYgcLNQ.svg" alt="" width="18" height="18">
            <span>LEGAL &amp; GOVERNANCE</span>
        </div>

        <h1 class="legal-title">Privacy Policy</h1>

        <p class="legal-sub">
            At Sentician, we hold enterprise data protection, employee confidentiality, and algorithmic safety as foundational engineering principles.
        </p>

        <div class="legal-meta-pills">
            <div class="legal-meta-pill">
                <span>Last Updated:</span>
                <strong>November 2026</strong>
            </div>
            <div class="legal-meta-pill">
                <span>Version:</span>
                <strong>2.4 Enterprise</strong>
            </div>
            <div class="legal-meta-pill">
                <span>Model Training Policy:</span>
                <strong>Strict Zero-Retention</strong>
            </div>
        </div>
    </div>
</section>

<section class="legal-main-section">
    <div class="container legal-layout">
        <!-- Sticky Left Table of Contents -->
        <aside class="legal-sidebar" aria-label="Privacy Table of Contents">
            <h3 class="legal-sidebar-title">Sections</h3>
            <nav class="legal-toc-nav">
                <a href="#sec-01" class="legal-toc-item">1. Information We Collect</a>
                <a href="#sec-02" class="legal-toc-item">2. How We Use Data</a>
                <a href="#sec-03" class="legal-toc-item">3. AI Model Governance</a>
                <a href="#sec-04" class="legal-toc-item">4. Access Controls &amp; Scoping</a>
                <a href="#sec-05" class="legal-toc-item">5. Data Retention &amp; Deletion</a>
                <a href="#sec-06" class="legal-toc-item">6. Cloud Subprocessors</a>
                <a href="#sec-07" class="legal-toc-item">7. Global Privacy Rights</a>
                <a href="#sec-08" class="legal-toc-item">8. Contact Our DPO</a>
            </nav>
        </aside>

        <!-- Main Content -->
        <div class="legal-content">
            <article class="legal-card" id="sec-01" data-reveal>
                <div class="legal-card-head">
                    <span class="legal-num-badge">01</span>
                    <h2>Information We Collect</h2>
                </div>
                <p>
                    Sentician collects only the minimum necessary information required to operate our Organization OS, authenticate authorized workspace users, and execute requested agent workflows. This includes:
                </p>
                <ul>
                    <li><strong>Account &amp; Workspace Data:</strong> Corporate email addresses, full names, single sign-on (SSO) identifiers, role assignments, and organizational department metadata.</li>
                    <li><strong>Connected Enterprise Data:</strong> Read and write permissions granted via OAuth connectors (e.g., Slack, SharePoint, Jira, Salesforce, SAP) solely within authorized scope bounds.</li>
                    <li><strong>Operational Logs &amp; Telemetry:</strong> Execution timestamps, API response latencies, connector success rates, and deterministic guardrail audit events.</li>
                </ul>
            </article>

            <article class="legal-card" id="sec-02" data-reveal>
                <div class="legal-card-head">
                    <span class="legal-num-badge">02</span>
                    <h2>How We Use Data</h2>
                </div>
                <p>
                    Your data is strictly processed to deliver deterministic AI orchestration, workforce management, talent screening, and intelligent operational automation. We never monetize, broker, or sell customer proprietary data under any circumstances.
                </p>
                <ul>
                    <li>To authenticate workspace personnel and maintain fine-grained Role-Based Access Control (RBAC).</li>
                    <li>To dispatch intelligent background agents that automate recruitment cycles, onboarding workflows, and internal inquiry resolution.</li>
                    <li>To generate telemetry dashboards and compliance audit logs for organizational administrators.</li>
                </ul>
            </article>

            <article class="legal-card" id="sec-03" data-reveal>
                <div class="legal-card-head">
                    <span class="legal-num-badge">03</span>
                    <h2>AI Model Governance &amp; Zero-Retention Training Policy</h2>
                </div>
                <p>
                    Sentician enforces an unwavering guarantee regarding artificial intelligence model training:
                </p>
                <ul>
                    <li><strong>Zero Model Training:</strong> Customer prompts, internal documents, candidate resumes, employee records, and agent outputs are <strong>NEVER used to train, fine-tune, or improve any public foundation models</strong>.</li>
                    <li><strong>Stateless Inference:</strong> Foundation model API inference requests are ephemeral and wiped immediately upon generation of the workflow response.</li>
                    <li><strong>VPC &amp; Dedicated Tenants:</strong> Enterprise deployments are offered in isolated Virtual Private Clouds (VPC) with customer-managed encryption keys (CMEK).</li>
                </ul>
            </article>

            <article class="legal-card" id="sec-04" data-reveal>
                <div class="legal-card-head">
                    <span class="legal-num-badge">04</span>
                    <h2>Access Controls, Permissions &amp; Encryption</h2>
                </div>
                <p>
                    Security is deeply integrated into every layer of the Sentician architecture:
                </p>
                <ul>
                    <li><strong>Encryption in Transit:</strong> TLS 1.3 encryption is enforced across all inbound and outbound API interactions.</li>
                    <li><strong>Encryption at Rest:</strong> AES-256 encryption protects all database volumes, secret tokens, and telemetry logs.</li>
                    <li><strong>Scoped Tokens:</strong> Connector credentials and access tokens are isolated in Hardware Security Module (HSM) vaults.</li>
                </ul>
            </article>

            <article class="legal-card" id="sec-05" data-reveal>
                <div class="legal-card-head">
                    <span class="legal-num-badge">05</span>
                    <h2>Data Retention &amp; Erasure Schedules</h2>
                </div>
                <p>
                    We retain data only as long as your enterprise subscription remains active or as required by governing legal compliance standards:
                </p>
                <ul>
                    <li>Workspace administrators may request complete cryptographic erasure of tenant databases at any time.</li>
                    <li>Upon contract termination or workspace cancellation, all proprietary tenant data is permanently purged within 30 days.</li>
                    <li>Transient agent execution logs are automatically expired according to your organization's configured retention policy (default: 30 days).</li>
                </ul>
            </article>

            <article class="legal-card" id="sec-06" data-reveal>
                <div class="legal-card-head">
                    <span class="legal-num-badge">06</span>
                    <h2>Subprocessors &amp; Cloud Infrastructure</h2>
                </div>
                <p>
                    Sentician partners exclusively with certified, SOC2 Type II, ISO 27001, and FedRAMP compliant tier-1 cloud infrastructure providers:
                </p>
                <ul>
                    <li><strong>Cloud Hosting &amp; Storage:</strong> Google Cloud Platform (GCP) and Amazon Web Services (AWS) data centers with regional residency pinning.</li>
                    <li><strong>Authentication Infrastructure:</strong> Enterprise identity providers supporting SAML 2.0 and OIDC (Okta, Azure AD, Google Workspace).</li>
                </ul>
            </article>

            <article class="legal-card" id="sec-07" data-reveal>
                <div class="legal-card-head">
                    <span class="legal-num-badge">07</span>
                    <h2>Global Privacy Rights (GDPR, CCPA &amp; HIPAA)</h2>
                </div>
                <p>
                    Whether your enterprise operates in the European Union, the United States, or globally, Sentician fully honors your statutory rights:
                </p>
                <ul>
                    <li>The right to access, rectify, export, or permanently delete personal data.</li>
                    <li>The right to restrict or object to algorithmic automated processing without human review.</li>
                    <li>Dedicated Data Processing Addendums (DPA) incorporating Standard Contractual Clauses (SCC) for international transfers.</li>
                </ul>
            </article>

            <article class="legal-card" id="sec-08" data-reveal>
                <div class="legal-card-head">
                    <span class="legal-num-badge">08</span>
                    <h2>Contact Our Data Protection Officer (DPO)</h2>
                </div>
                <p>
                    For inquiries regarding this Privacy Policy, enterprise DPAs, security attestations, or to exercise your statutory rights:
                </p>
                <div class="legal-contact-callout">
                    <p><strong>Sentician Privacy &amp; Data Governance Office</strong></p>
                    <p>Email: <a href="mailto:privacy@sentician.com">privacy@sentician.com</a></p>
                    <p>Security &amp; Compliance Team: <a href="mailto:security@sentician.com">security@sentician.com</a></p>
                    <p>Direct Consultations: <a href="contact.php">Request an Enterprise Security Briefing &rarr;</a></p>
                </div>
            </article>
        </div>
    </div>
</section>

<?php require_once __DIR__ . '/includes/footer.php'; ?>
