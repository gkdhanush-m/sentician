<?php
declare(strict_types=1);

$cfg = site_config();
?>
</main>

<!-- ==================== 12. CLOSING CTA & MONUMENTAL HORIZON FOOTER (Matching sen8.mp4 & Sentician .framer-8moa8) ==================== -->
<footer class="sentician-footer">
    <div class="sentician-footer-container">
        <!-- Top CTA Block (.framer-kl79kt) -->
        <div class="sentician-footer-top" data-reveal>
            <div class="sentician-footer-top-inner">
                <div class="sentician-footer-top-text">
                    <h2>Step Into Sentician The Future of Intelligent Agents</h2>
                    <p>Everything your team needs, in one simple workspace. Stay focused, stay in sync.</p>
                </div>
                <div class="sentician-footer-top-cta">
                    <a href="contact.php" class="btn-glow-pill">Get Started</a>
                </div>
            </div>
        </div>

        <!-- Monumental Horizon Wordmark Row (.framer-ystmvz) -->
        <div class="sentician-footer-logo-row" aria-label="Sentician">
            <figure class="sentician-footer-bg-fig" aria-hidden="true">
                <img src="assets/images/3ez5Goty6KdEzujpWDVyu8Um6Ns.webp" alt="" width="2334" height="1082" loading="lazy" decoding="async">
            </figure>

            <div class="sentician-wordmark-item sentician-wordmark-item--ghost" aria-hidden="true">
                <img src="assets/images/sentician-wordmark-giant.svg" alt="" width="1810" height="335" loading="lazy" decoding="async">
            </div>

            <div class="sentician-wordmark-item sentician-wordmark-item--main">
                <img src="assets/images/sentician-wordmark-giant.svg" alt="SENTICIAN" width="1810" height="335" loading="lazy" decoding="async">
            </div>

            <div class="sentician-wordmark-item sentician-wordmark-item--ghost" aria-hidden="true">
                <img src="assets/images/sentician-wordmark-giant.svg" alt="" width="1810" height="335" loading="lazy" decoding="async">
            </div>
        </div>

        <!-- 4-Column Links & Bottom Copyright Block (.framer-1x91rc6) -->
        <div class="sentician-footer-bottom-wrap">
            <div class="sentician-footer-links-outer">
                <div class="sentician-footer-links-grid">
                    <!-- Column 1: Navigation -->
                    <div class="sentician-footer-col">
                        <div class="sentician-footer-col-title">
                            <p>Navigation</p>
                        </div>
                        <nav class="sentician-footer-nav" aria-label="Footer Navigation">
                            <a href="index.php" class="sentician-footer-link">
                                <span>Home</span>
                                <span class="sentician-footer-link-line"></span>
                            </a>
                            <a href="about.php" class="sentician-footer-link">
                                <span>About</span>
                                <span class="sentician-footer-link-line"></span>
                            </a>
                            <a href="careers.php" class="sentician-footer-link">
                                <span>Join Us</span>
                                <span class="sentician-footer-link-line"></span>
                            </a>
                            <a href="integrations.php" class="sentician-footer-link">
                                <span>Integration</span>
                                <span class="sentician-footer-link-line"></span>
                            </a>
                            <a href="contact.php" class="sentician-footer-link">
                                <span>Contact</span>
                                <span class="sentician-footer-link-line"></span>
                            </a>
                        </nav>
                    </div>

                    <!-- Column 2: Documentation -->
                    <div class="sentician-footer-col">
                        <div class="sentician-footer-col-title">
                            <p>Documentation</p>
                        </div>
                        <nav class="sentician-footer-nav" aria-label="Footer Documentation">
                            <a href="services.php" class="sentician-footer-link">
                                <span>AI Solutions</span>
                                <span class="sentician-footer-link-line"></span>
                            </a>
                            <a href="index.php#organization-os" class="sentician-footer-link">
                                <span>Organization OS</span>
                                <span class="sentician-footer-link-line"></span>
                            </a>
                            <a href="privacy.php" class="sentician-footer-link">
                                <span>Privacy policy</span>
                                <span class="sentician-footer-link-line"></span>
                            </a>
                            <a href="terms.php" class="sentician-footer-link">
                                <span>Terms and Conditions</span>
                                <span class="sentician-footer-link-line"></span>
                            </a>
                        </nav>
                    </div>

                    <!-- Column 3: Other Pages -->
                    <div class="sentician-footer-col">
                        <div class="sentician-footer-col-title">
                            <p>Other Pages</p>
                        </div>
                        <nav class="sentician-footer-nav" aria-label="Footer Other Pages">
                            <a href="blog.php" class="sentician-footer-link">
                                <span>Tech Insights</span>
                                <span class="sentician-footer-link-line"></span>
                            </a>
                            <?php if (false): // Hidden while sections are commented out in index.php ?>
                            <a href="index.php#kickstart" class="sentician-footer-link">
                                <span>3 Steps to Kickstart</span>
                                <span class="sentician-footer-link-line"></span>
                            </a>
                            <a href="index.php#security" class="sentician-footer-link">
                                <span>Multi-Layer Security</span>
                                <span class="sentician-footer-link-line"></span>
                            </a>
                            <?php endif; ?>
                            <a href="index.php#faq" class="sentician-footer-link">
                                <span>FAQ</span>
                                <span class="sentician-footer-link-line"></span>
                            </a>
                        </nav>
                    </div>

                    <!-- Column 4: Social Connect -->
                    <div class="sentician-footer-col">
                        <div class="sentician-footer-col-title">
                            <p>Social Connect</p>
                        </div>
                        <nav class="sentician-footer-nav" aria-label="Footer Social Connect">
                            <a href="<?= e($cfg['brand']['instagram_url']) ?>" target="_blank" rel="noopener noreferrer" class="sentician-footer-link">
                                <span>Instagram</span>
                                <span class="sentician-footer-link-line"></span>
                            </a>
                            <a href="<?= e($cfg['brand']['twitter_url']) ?>" target="_blank" rel="noopener noreferrer" class="sentician-footer-link">
                                <span>X/twitter</span>
                                <span class="sentician-footer-link-line"></span>
                            </a>
                            <a href="<?= e($cfg['brand']['linkedin_url']) ?>" target="_blank" rel="noopener noreferrer" class="sentician-footer-link">
                                <span>Linkedin</span>
                                <span class="sentician-footer-link-line"></span>
                            </a>
                            <a href="<?= e($cfg['brand']['reddit_url']) ?>" target="_blank" rel="noopener noreferrer" class="sentician-footer-link">
                                <span>Reddit</span>
                                <span class="sentician-footer-link-line"></span>
                            </a>
                        </nav>
                    </div>
                </div>
            </div>

            <!-- Bottom Copyright Bar (.framer-1n6snbj) -->
            <div class="sentician-footer-copy-outer">
                <div class="sentician-footer-copy-line" aria-hidden="true"></div>
                <div class="sentician-footer-copy-row">
                    <div class="sentician-footer-copy-left">
                        <p>All rights reserved for @SENTICIAN</p>
                    </div>
                    <div class="sentician-footer-copy-right">
                        <p><a href="index.php">Intelligence &bull; Automation &bull; Impact</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>

<script src="assets/js/main.js?v=<?= filemtime(__DIR__ . '/../assets/js/main.js') ?>" defer></script>
</body>
</html>
