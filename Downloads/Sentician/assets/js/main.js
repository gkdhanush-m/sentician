/**
 * Sentician Interactive UI Behaviors
 * Powers Hero App Preview, Features tabs, Agent Studio selector, Kickstart stages,
 * Security layers, Testimonial carousel, Billing toggle, FAQ accordion, Filters & ROI.
 */

document.addEventListener('DOMContentLoaded', () => {
    initMobileDrawer();
    initCosmosStars();
    initHeroParallax();
    initHeroAppPreview();
    initOrgOsStickyNav();
    initOrgOsTypewriter();
    initTabSwitcher('[data-ftab]', '[data-fpanel]', 'ftab', 'fpanel');
    initTabSwitcher('[data-vtab]', '[data-vpanel]', 'vtab', 'vpanel');
    initStudioAgentSelector();
    initKickstartProgress();
    initStageStack();
    initSecurityLayers();
    initTestimonialCarousel();
    initBillingToggle();
    initFaqAccordion();
    initFilterGroup('[data-filter]', '#servicesGrid .service-card', 'filter', 'category');
    initFilterGroup('[data-int-filter]', '#integrationsGrid .integration-card', 'intFilter', 'intCat');
    initFilterGroup('[data-blog-filter]', '.sentician-blog-card', 'blogFilter', 'blogCategory');
    initFilterGroup('[data-career-filter]', '.sentician-career-card', 'careerFilter', 'careerDept');
    initRoiCalculator();
    initSolutionFeaturesAccordion();
    initSolutionUsecaseTabs();
    initContactGlobalPresence();
    initCareerApplyLinks();
    initCorporateCareers();
    initBlogArticleModal();
    initDomainCardSpotlight();
    initScrollReveal();
});

function initMobileDrawer() {
    const btn = document.getElementById('mobileMenuBtn');
    const drawer = document.getElementById('mobileDrawer');
    if (!btn || !drawer) return;

    btn.addEventListener('click', () => {
        const isOpen = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', String(!isOpen));
        drawer.hidden = isOpen;
    });
}

function initHeroAppPreview() {
    const navItems = document.querySelectorAll('[data-preview-nav]');
    const titleEl = document.getElementById('appPreviewTitle');
    navItems.forEach((item) => {
        item.addEventListener('click', () => {
            navItems.forEach((n) => n.classList.remove('is-active'));
            item.classList.add('is-active');
            if (titleEl) titleEl.textContent = item.textContent.trim();
        });
    });

    const toggles = document.querySelectorAll('[data-sim-toggle]');
    const simSpeed = document.getElementById('simSpeed');
    const simCost = document.getElementById('simCost');
    const simAccuracy = document.getElementById('simAccuracy');
    if (!toggles.length) return;

    const update = () => {
        const state = {};
        toggles.forEach((t) => { state[t.dataset.simToggle] = t.checked; });

        let latency = 290;
        let cost = 0.68;
        let accuracy = 96.8;

        if (state.cache) { latency -= 110; cost -= 0.26; }
        if (state.turbo) { latency -= 45; cost += 0.08; accuracy += 1.4; }
        if (state.guardrails) { latency += 15; accuracy += 1.2; }

        if (simSpeed) simSpeed.textContent = `${latency} ms`;
        if (simCost) simCost.textContent = `$${cost.toFixed(2)} / 1k runs`;
        if (simAccuracy) simAccuracy.textContent = `${Math.min(99.9, accuracy).toFixed(1)}%`;
    };

    toggles.forEach((t) => t.addEventListener('change', update));
    update();
}

function initTabSwitcher(tabSelector, panelSelector, tabKey, panelKey) {
    const tabs = document.querySelectorAll(tabSelector);
    const panels = document.querySelectorAll(panelSelector);
    const dashes = tabKey === 'vtab' ? document.querySelectorAll('[data-vdash]') : [];
    if (!tabs.length || !panels.length) return;

    tabs.forEach((tab) => {
        tab.addEventListener('click', () => {
            const target = tab.dataset[tabKey];
            tabs.forEach((t) => {
                const active = t.dataset[tabKey] === target;
                t.classList.toggle('is-active', active);
                t.setAttribute('aria-selected', String(active));
            });
            panels.forEach((panel) => {
                const match = panel.dataset[panelKey] === target;
                panel.hidden = !match;
                panel.classList.toggle('is-active', match);
            });
            if (dashes.length) {
                dashes.forEach((dash) => {
                    const match = dash.dataset.vdash === target;
                    dash.classList.toggle('is-active', match);
                });
            }
        });
    });
}

function initStudioAgentSelector() {
    const grid = document.getElementById('studioAgentGrid');
    const label = document.getElementById('selectedAgentLabel');
    if (!grid || !label) return;

    const cards = grid.querySelectorAll('.agent-mini-card');
    cards.forEach((card) => {
        card.addEventListener('click', () => {
            cards.forEach((c) => c.classList.remove('is-selected'));
            card.classList.add('is-selected');
            label.textContent = `AI for ${card.dataset.agent}`;
        });
    });
}

function initKickstartProgress() {
    const stack = document.getElementById('kickstartScreensStack');
    const beam = document.getElementById('kickstartBeamLine');
    const numbersBar = document.querySelector('.kickstart-numbers-bar');
    const cols = document.querySelectorAll('.kickstart-num-col[data-ktarget]');
    if (!stack || !beam) return;

    const wrappers = stack.querySelectorAll('.kickstart-step-wrapper');
    let rafId = null;

    const updateProgress = () => {
        rafId = null;
        const stackRect = stack.getBoundingClientRect();
        const firstHeight = wrappers[0] ? wrappers[0].offsetHeight : 558;
        const scrollable = Math.max(1, stackRect.height - firstHeight);
        const scrolled = 214 - stackRect.top;

        // Map scrolled from [-60, scrollable + 180] -> progress [0.06, 1.0]
        const raw = (scrolled + 60) / (scrollable + 240);
        const progress = Math.max(0.06, Math.min(1, raw));
        const translatePct = (progress - 1) * 100;
        beam.style.transform = `translate3d(${translatePct.toFixed(2)}%, 0, 0)`;

        // Keep 01/02/03 bar locked 94px above the stacked cards when scrolling past #step-03
        if (numbersBar) {
            const releaseDelta = stackRect.bottom - (214 + firstHeight);
            if (releaseDelta < 0) {
                numbersBar.style.transform = `translate3d(0, ${releaseDelta.toFixed(1)}px, 0)`;
            } else {
                numbersBar.style.transform = 'translate3d(0, 0, 0)';
            }
        }
    };

    const requestUpdate = () => {
        if (rafId === null) {
            rafId = window.requestAnimationFrame(updateProgress);
        }
    };

    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate, { passive: true });
    updateProgress();

    cols.forEach((col, idx) => {
        col.addEventListener('click', () => {
            if (!wrappers[idx]) return;
            const stackTopDoc = window.scrollY + stack.getBoundingClientRect().top;
            const cardHeight = wrappers[0].offsetHeight + 48;
            const targetScrollY = stackTopDoc - 214 + idx * cardHeight;
            window.scrollTo({ top: targetScrollY, behavior: 'smooth' });
        });
    });
}

function initStageStack() {
    const stack = document.getElementById('launchStageStack');
    if (!stack) return;

    const cards = stack.querySelectorAll('.stage-step-card');
    cards.forEach((card) => {
        card.addEventListener('click', () => {
            cards.forEach((c) => c.classList.remove('is-active'));
            card.classList.add('is-active');
        });
    });
}

function initSecurityLayers() {
    const container = document.getElementById('securityLayerPills');
    const note = document.getElementById('securityDetailNote');
    if (!container || !note) return;

    const descriptions = [
        'End-to-end TLS + AES-256 encryption, automatic PII redaction before model inference, and zero model-training guarantees on your data.',
        'Continuous prompt-injection filtering, output schema validation, and anomaly rate-limiting across every agent endpoint.',
        'Immutable execution logs, RBAC access scopes, and SOC2-aligned governance controls built for regulated enterprises.'
    ];

    const pills = container.querySelectorAll('.security-pill');
    pills.forEach((pill) => {
        pill.addEventListener('click', () => {
            pills.forEach((p) => p.classList.remove('is-active'));
            pill.classList.add('is-active');
            const idx = Number(pill.dataset.slayer);
            if (descriptions[idx]) note.textContent = descriptions[idx];
        });
    });
}

function initTestimonialCarousel() {
    const root = document.getElementById('testimonialCarousel');
    if (!root) return;

    const slides = root.querySelectorAll('[data-tslide]');
    const dots = root.querySelectorAll('[data-tdot]');
    if (!slides.length || !dots.length) return;

    dots.forEach((dot) => {
        dot.addEventListener('click', () => {
            const idx = dot.dataset.tdot;
            dots.forEach((d) => d.classList.toggle('is-active', d === dot));
            slides.forEach((s) => {
                const match = s.dataset.tslide === idx;
                s.hidden = !match;
                s.classList.toggle('is-active', match);
            });
        });
    });
}

function initBillingToggle() {
    const buttons = document.querySelectorAll('.billing-btn[data-billing]');
    const prices = document.querySelectorAll('.price-value[data-monthly][data-yearly]');
    if (!buttons.length || !prices.length) return;

    buttons.forEach((btn) => {
        btn.addEventListener('click', () => {
            const cycle = btn.dataset.billing;
            buttons.forEach((b) => b.classList.toggle('is-active', b === btn));
            prices.forEach((el) => {
                el.textContent = cycle === 'yearly' ? el.dataset.yearly : el.dataset.monthly;
            });
        });
    });
}

function initFaqAccordion() {
    const items = document.querySelectorAll('.faq-item');
    if (!items.length) return;

    items.forEach((item) => {
        const trigger = item.querySelector('.faq-trigger');
        const panel = item.querySelector('.faq-panel');
        if (!trigger || !panel) return;

        trigger.addEventListener('click', () => {
            const isOpen = item.classList.contains('is-open');
            items.forEach((other) => {
                other.classList.remove('is-open');
                const otherBtn = other.querySelector('.faq-trigger');
                const otherPanel = other.querySelector('.faq-panel');
                if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
                if (otherPanel) otherPanel.setAttribute('aria-hidden', 'true');
            });

            if (!isOpen) {
                item.classList.add('is-open');
                trigger.setAttribute('aria-expanded', 'true');
                panel.setAttribute('aria-hidden', 'false');
            }
        });
    });
}

function initFilterGroup(btnSelector, cardSelector, btnDataKey, cardDataKey) {
    const buttons = document.querySelectorAll(btnSelector);
    const cards = document.querySelectorAll(cardSelector);
    if (!buttons.length || !cards.length) return;

    buttons.forEach((btn) => {
        btn.addEventListener('click', () => {
            const target = btn.dataset[btnDataKey];
            buttons.forEach((b) => b.classList.toggle('is-active', b === btn));
            cards.forEach((card) => {
                const match = target === 'all' || card.dataset[cardDataKey] === target;
                card.classList.toggle('is-hidden', !match);
            });
        });
    });
}

function initRoiCalculator() {
    const teamInput = document.getElementById('roiTeamSize');
    const hoursInput = document.getElementById('roiHours');
    const rateInput = document.getElementById('roiRate');
    if (!teamInput || !hoursInput || !rateInput) return;

    const teamVal = document.getElementById('roiTeamVal');
    const hoursVal = document.getElementById('roiHoursVal');
    const rateVal = document.getElementById('roiRateVal');
    const hoursSavedEl = document.getElementById('roiHoursSaved');
    const fteEl = document.getElementById('roiFte');
    const dollarsEl = document.getElementById('roiDollars');

    const compute = () => {
        const team = Number(teamInput.value);
        const hrs = Number(hoursInput.value);
        const rate = Number(rateInput.value);

        const annualSaved = Math.round(team * hrs * 52 * (rate / 100));
        const fte = (annualSaved / 2000).toFixed(1);
        const valueDollars = annualSaved * 75;

        if (teamVal) teamVal.textContent = `${team} people`;
        if (hoursVal) hoursVal.textContent = `${hrs} hrs`;
        if (rateVal) rateVal.textContent = `${rate}%`;
        if (hoursSavedEl) hoursSavedEl.textContent = `${annualSaved.toLocaleString()} hrs/yr`;
        if (fteEl) fteEl.textContent = `${fte} FTE`;
        if (dollarsEl) dollarsEl.textContent = `$${valueDollars.toLocaleString()}`;
    };

    [teamInput, hoursInput, rateInput].forEach((input) => input.addEventListener('input', compute));
    compute();
}

function initScrollReveal() {
    const nodes = document.querySelectorAll('[data-reveal]');
    if (!nodes.length) return;

    if (!('IntersectionObserver' in window)) {
        nodes.forEach((node) => node.classList.add('is-visible'));
        return;
    }

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.05, rootMargin: '0px 0px 40px 0px' }
    );

    const vh = window.innerHeight || document.documentElement.clientHeight;
    nodes.forEach((node) => {
        const rect = node.getBoundingClientRect();
        if (rect.top < vh * 0.96) {
            node.classList.add('is-visible');
        } else {
            observer.observe(node);
        }
    });
}

function initCosmosStars() {
    const canvas = document.getElementById('cosmosStarsCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let stars = [];
    let animationFrameId = null;
    let isVisible = true;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const resize = () => {
        width = canvas.parentElement ? canvas.parentElement.clientWidth : window.innerWidth;
        height = canvas.parentElement ? canvas.parentElement.clientHeight * 0.65 : 450;
        canvas.width = width * window.devicePixelRatio;
        canvas.height = height * window.devicePixelRatio;
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

        stars = [];
        const count = Math.floor(Math.min(width / 32, 50));
        for (let i = 0; i < count; i++) {
            stars.push({
                x: Math.random() * width,
                y: Math.random() * height * 0.8,
                radius: Math.random() * 1.3 + 0.5,
                baseAlpha: Math.random() * 0.55 + 0.2,
                speed: Math.random() * 0.0018 + 0.0008,
                phase: Math.random() * Math.PI * 2,
                color: Math.random() > 0.4 ? '255, 255, 255' : (Math.random() > 0.5 ? '0, 194, 255' : '255, 180, 80')
            });
        }
    };

    window.addEventListener('resize', resize, { passive: true });
    resize();

    const draw = (timestamp) => {
        if (!isVisible) return;
        ctx.clearRect(0, 0, width, height);

        for (let i = 0; i < stars.length; i++) {
            const s = stars[i];
            const alpha = prefersReducedMotion
                ? s.baseAlpha
                : s.baseAlpha + Math.sin(timestamp * s.speed + s.phase) * (s.baseAlpha * 0.55);

            ctx.beginPath();
            ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${s.color}, ${Math.max(0.08, alpha)})`;
            ctx.fill();
        }

        if (!prefersReducedMotion) {
            animationFrameId = requestAnimationFrame(draw);
        }
    };

    if ('IntersectionObserver' in window) {
        const obs = new IntersectionObserver(([entry]) => {
            isVisible = entry.isIntersecting;
            if (isVisible && !prefersReducedMotion) {
                cancelAnimationFrame(animationFrameId);
                animationFrameId = requestAnimationFrame(draw);
            }
        }, { threshold: 0.05 });
        obs.observe(canvas.parentElement || canvas);
    }

    if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(draw);
    } else {
        draw(0);
    }
}

function initHeroParallax() {
    const hero = document.getElementById('heroCosmos');
    const bgLayer = document.getElementById('cosmosBgLayer');
    if (!hero || !bgLayer) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const onMouseMove = (e) => {
        const rect = hero.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        targetX = x * -14;
        targetY = y * -9;
    };

    const onMouseLeave = () => {
        targetX = 0;
        targetY = 0;
    };

    const loop = () => {
        currentX += (targetX - currentX) * 0.06;
        currentY += (targetY - currentY) * 0.06;
        bgLayer.style.transform = `translate3d(${currentX.toFixed(2)}px, ${currentY.toFixed(2)}px, 0)`;
        requestAnimationFrame(loop);
    };

    hero.addEventListener('mousemove', onMouseMove, { passive: true });
    hero.addEventListener('mouseleave', onMouseLeave, { passive: true });
    loop();
}

function initOrgOsStickyNav() {
    const navItems = document.querySelectorAll('[data-org-nav]');
    const cards = Array.from(document.querySelectorAll('[data-org-card]'));
    if (!navItems.length || !cards.length) return;

    const setActive = (id) => {
        navItems.forEach((item) => {
            item.classList.toggle('is-active', item.dataset.orgNav === id);
        });
    };

    navItems.forEach((item) => {
        item.addEventListener('click', (e) => {
            const targetId = item.dataset.orgNav;
            const targetEl = document.getElementById(targetId);
            if (targetEl) {
                e.preventDefault();
                setActive(targetId);
                targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        });
    });

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let rafId = null;

    const updateOnScroll = () => {
        rafId = null;
        const vh = window.innerHeight || document.documentElement.clientHeight;
        const isDesktop = window.innerWidth > 1024;
        const startY = vh * 0.86;
        const endY = vh * 0.28;
        const anchorY = vh * 0.36;

        let closestId = cards[0].dataset.orgCard;
        let minDistance = Infinity;

        cards.forEach((card, index) => {
            const rect = card.getBoundingClientRect();
            const cardCenter = rect.top + rect.height * 0.35;
            const dist = Math.abs(cardCenter - anchorY);
            if (dist < minDistance) {
                minDistance = dist;
                closestId = card.dataset.orgCard;
            }

            // Scroll-linked right-to-left shift for 2nd and 3rd cards (matching sen3.mp4 & Sentician)
            if (index > 0) {
                if (!isDesktop || reduceMotion) {
                    card.style.setProperty('--card-shift-x', '0px');
                } else {
                    const rawProgress = (startY - rect.top) / (startY - endY);
                    const clamped = Math.max(0, Math.min(1, rawProgress));
                    const eased = clamped * clamped * (3 - 2 * clamped);
                    const shiftX = (1 - eased) * 68;
                    card.style.setProperty('--card-shift-x', `${shiftX.toFixed(2)}px`);
                }
            } else {
                card.style.setProperty('--card-shift-x', '0px');
            }
        });

        setActive(closestId);
    };

    const requestUpdate = () => {
        if (rafId === null) {
            rafId = window.requestAnimationFrame(updateOnScroll);
        }
    };

    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate, { passive: true });
    updateOnScroll();
}

function initOrgOsTypewriter() {
    const el = document.getElementById('orgOsTypewriter');
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const phrases = [
        'Hello World!',
        'Help me with the candidate shortlist...',
        'Screen top engineering applicants...',
        'Schedule panel interviews for tomorrow...'
    ];

    let phraseIndex = 0;
    let charIndex = phrases[0].length;
    let isDeleting = true;

    const tick = () => {
        const currentPhrase = phrases[phraseIndex];

        if (isDeleting) {
            charIndex--;
            el.textContent = currentPhrase.substring(0, charIndex);
            if (charIndex <= 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
                setTimeout(tick, 420);
                return;
            }
            setTimeout(tick, 38);
        } else {
            charIndex++;
            el.textContent = currentPhrase.substring(0, charIndex);
            if (charIndex >= currentPhrase.length) {
                isDeleting = true;
                setTimeout(tick, 1800);
                return;
            }
            setTimeout(tick, 68);
        }
    };

    setTimeout(tick, 1600);
}

/**
 * Interactive 4-item vertical accordion + right-hand visual switcher
 * on AI Solution detail subpage (services.php?solution=...)
 */
function initSolutionFeaturesAccordion() {
    const items = Array.from(document.querySelectorAll('.sentician-sol-acc-item[data-sol-feat]'));
    const panes = Array.from(document.querySelectorAll('.sentician-sol-visual-pane[data-sol-pane]'));
    if (!items.length) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let currentIndex = 0;
    let timerId = null;

    const activate = (targetIdx) => {
        currentIndex = items.findIndex((item) => item.dataset.solFeat === String(targetIdx));
        if (currentIndex < 0) currentIndex = 0;

        items.forEach((item) => {
            const isMatch = item.dataset.solFeat === String(targetIdx);
            item.classList.remove('is-active');
            const fill = item.querySelector('.sentician-sol-acc-bar-fill');
            if (fill) void fill.offsetWidth;
            item.classList.toggle('is-active', isMatch);
            const btn = item.querySelector('.sentician-sol-acc-trigger');
            if (btn) btn.setAttribute('aria-expanded', isMatch ? 'true' : 'false');
        });
        panes.forEach((pane) => {
            pane.classList.toggle('is-active', pane.dataset.solPane === String(targetIdx));
        });
    };

    const scheduleNext = () => {
        if (prefersReducedMotion) return;
        if (timerId) clearTimeout(timerId);
        timerId = setTimeout(() => {
            const nextItem = items[(currentIndex + 1) % items.length];
            if (nextItem) {
                activate(nextItem.dataset.solFeat);
                scheduleNext();
            }
        }, 5500);
    };

    items.forEach((item) => {
        item.addEventListener('click', () => {
            activate(item.dataset.solFeat);
            scheduleNext();
        });
    });

    scheduleNext();
}

/**
 * Interactive Use Cases pill tabs on AI Solution detail subpage
 */
function initSolutionUsecaseTabs() {
    const tabs = document.querySelectorAll('[data-sol-uctab]');
    const panes = document.querySelectorAll('[data-sol-ucpane]');
    if (!tabs.length || !panes.length) return;

    tabs.forEach((tab) => {
        tab.addEventListener('click', () => {
            const key = tab.dataset.solUctab;
            tabs.forEach((t) => {
                const active = t.dataset.solUctab === key;
                t.classList.toggle('is-active', active);
                t.setAttribute('aria-selected', active ? 'true' : 'false');
            });
            panes.forEach((p) => {
                p.classList.toggle('is-active', p.dataset.solUcpane === key);
            });
        });
    });
}

function initContactGlobalPresence() {
    const btns = document.querySelectorAll('.sentician-global-city-btn[data-office-idx]');
    const titleEl = document.getElementById('globalOfficeTitle');
    const descEl = document.getElementById('globalOfficeDesc');
    if (btns.length && titleEl && descEl) {
        btns.forEach((btn) => {
            btn.addEventListener('click', () => {
                btns.forEach((b) => {
                    const active = b === btn;
                    b.classList.toggle('is-active', active);
                    b.setAttribute('aria-selected', active ? 'true' : 'false');
                });
                titleEl.textContent = btn.dataset.officeTitle || '';
                descEl.textContent = btn.dataset.officeDesc || '';
            });
        });
    }

    const topicLinks = document.querySelectorAll('[data-contact-topic]');
    const topicSelect = document.getElementById('topic');
    const nameInput = document.getElementById('name');
    const formSection = document.getElementById('contact-form-section');
    if (topicLinks.length && formSection) {
        topicLinks.forEach((link) => {
            link.addEventListener('click', (event) => {
                event.preventDefault();
                const targetTopic = link.dataset.contactTopic;
                if (topicSelect && targetTopic) {
                    const match = Array.from(topicSelect.options).find((opt) => opt.value === targetTopic);
                    if (match) {
                        topicSelect.value = targetTopic;
                    }
                }
                formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                if (nameInput) {
                    setTimeout(() => nameInput.focus({ preventScroll: true }), 450);
                }
            });
        });
    }
}

/**
 * Blogs & Newsletter Article Reader Modal
 */
function initBlogArticleModal() {
    const modal = document.getElementById('blogArticleModal');
    const dataEl = document.getElementById('senticianBlogData');
    if (!modal || !dataEl) return;

    let articles = [];
    try {
        articles = JSON.parse(dataEl.textContent || '[]');
    } catch {
        return;
    }

    const articleMap = new Map(articles.map((item) => [item.id, item]));
    const catEl = document.getElementById('blogModalCategory');
    const metaEl = document.getElementById('blogModalMeta');
    const titleEl = document.getElementById('blogModalTitle');
    const authorEl = document.getElementById('blogModalAuthor');
    const imgEl = document.getElementById('blogModalImage');
    const takeawaysEl = document.getElementById('blogModalTakeaways');
    const bodyEl = document.getElementById('blogModalBody');

    const closeModal = () => {
        modal.hidden = true;
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    };

    const openModal = (id) => {
        const article = articleMap.get(id);
        if (!article) return;

        if (catEl) catEl.textContent = article.category || '';
        if (metaEl) metaEl.textContent = `${article.date || ''} • ${article.read_time || ''}`;
        if (titleEl) titleEl.textContent = article.title || '';
        if (authorEl) authorEl.textContent = `By ${article.author || 'Sentician Team'}`;
        if (imgEl) {
            imgEl.src = article.image || '';
            imgEl.alt = article.title || '';
        }

        if (takeawaysEl) {
            takeawaysEl.innerHTML = '';
            (article.takeaways || []).forEach((point) => {
                const li = document.createElement('li');
                li.textContent = point;
                takeawaysEl.appendChild(li);
            });
        }

        if (bodyEl) {
            bodyEl.innerHTML = '';
            (article.body || []).forEach((para) => {
                const p = document.createElement('p');
                p.textContent = para;
                bodyEl.appendChild(p);
            });
        }

        modal.hidden = false;
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    };

    document.querySelectorAll('[data-open-article]').forEach((trigger) => {
        trigger.addEventListener('click', () => {
            openModal(trigger.dataset.openArticle);
        });
    });

    modal.querySelectorAll('[data-close-article]').forEach((el) => {
        el.addEventListener('click', closeModal);
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && !modal.hidden) {
            closeModal();
        }
    });
}

/**
 * Pre-select role and smoothly scroll to application form on Join Us page
 */
function initCareerApplyLinks() {
    const roleLinks = document.querySelectorAll('[data-career-role]');
    const roleSelect = document.getElementById('career_role');
    const nameInput = document.getElementById('career_name');
    const applySection = document.getElementById('career-apply');
    if (!roleLinks.length || !applySection) return;

    roleLinks.forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetRole = link.dataset.careerRole;
            if (roleSelect && targetRole) {
                const match = Array.from(roleSelect.options).find((opt) => opt.value === targetRole);
                if (match) {
                    roleSelect.value = targetRole;
                }
            }
            applySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            if (nameInput) {
                setTimeout(() => nameInput.focus({ preventScroll: true }), 450);
            }
        });
    });
}

/**
 * Interactive cursor-tracking radial spotlight on Technology Domain cards
 */
function initDomainCardSpotlight() {
    const cards = document.querySelectorAll('.sentician-domain-card, .sentician-approach-card, .sentician-career-card, .sentician-contact-card, .sentician-int-card');
    if (!cards.length) return;

    cards.forEach((card) => {
        card.addEventListener('pointermove', (event) => {
            const rect = card.getBoundingClientRect();
            const x = ((event.clientX - rect.left) / rect.width) * 100;
            const y = ((event.clientY - rect.top) / rect.height) * 100;
            card.style.setProperty('--mx', `${x.toFixed(1)}%`);
            card.style.setProperty('--my', `${y.toFixed(1)}%`);
        });
    });
}

/**
 * Corporate Job Board Filters, Role Detail Tabs & Resume Dropzone
 */
function initCorporateCareers() {
    const rows = document.querySelectorAll('.sentician-jb-row');
    const searchInput = document.getElementById('jobSearchInput');
    const countEl = document.getElementById('jobBoardCount');
    const headingEl = document.getElementById('jobBoardHeading');
    const emptyEl = document.getElementById('jobBoardEmpty');
    const clearBtn = document.getElementById('jobFilterClear');
    const emptyResetBtn = document.getElementById('jobFilterEmptyReset');

    const deptLabels = {
        all: 'All Open Positions',
        'ai-ml': 'AI & ML',
        'robotics-vision': 'Robotics & Vision',
        'platform-infra': 'Platform & Infra',
        'product-design': 'Product & Design',
    };

    const applyJobFilters = () => {
        if (!rows.length) return;
        const dept = document.querySelector('input[name="jb_dept"]:checked')?.value || 'all';
        const mode = document.querySelector('input[name="jb_mode"]:checked')?.value || 'all';
        const query = (searchInput?.value || '').trim().toLowerCase();

        let visible = 0;
        rows.forEach((row) => {
            const matchDept = dept === 'all' || row.dataset.jbDept === dept;
            const matchMode = mode === 'all' || row.dataset.jbMode === mode;
            const matchSearch = !query || (row.dataset.jbSearch || '').includes(query);
            const show = matchDept && matchMode && matchSearch;
            row.classList.toggle('is-hidden', !show);
            if (show) visible += 1;
        });

        if (countEl) countEl.textContent = String(visible);
        if (headingEl) headingEl.textContent = deptLabels[dept] || 'Open Positions';
        if (emptyEl) emptyEl.hidden = visible > 0;
    };

    const resetJobFilters = () => {
        const allDept = document.querySelector('input[name="jb_dept"][value="all"]');
        const allMode = document.querySelector('input[name="jb_mode"][value="all"]');
        if (allDept) allDept.checked = true;
        if (allMode) allMode.checked = true;
        if (searchInput) searchInput.value = '';
        applyJobFilters();
    };

    document.querySelectorAll('input[name="jb_dept"], input[name="jb_mode"]').forEach((input) => {
        input.addEventListener('change', applyJobFilters);
    });
    if (searchInput) searchInput.addEventListener('input', applyJobFilters);
    if (clearBtn) clearBtn.addEventListener('click', resetJobFilters);
    if (emptyResetBtn) emptyResetBtn.addEventListener('click', resetJobFilters);

    // Role Detail Overview / Application Tab Switcher
    const roleTabs = document.querySelectorAll('[data-role-tab]');
    const rolePanes = document.querySelectorAll('[data-role-pane]');
    const switchRoleTab = (target) => {
        roleTabs.forEach((t) => {
            const active = t.dataset.roleTab === target;
            t.classList.toggle('is-active', active);
            t.setAttribute('aria-selected', active ? 'true' : 'false');
        });
        rolePanes.forEach((p) => {
            p.classList.toggle('is-active', p.dataset.rolePane === target);
        });
    };

    roleTabs.forEach((tab) => {
        tab.addEventListener('click', () => switchRoleTab(tab.dataset.roleTab));
    });
    const applySwitchBtn = document.querySelector('[data-switch-to-apply]');
    if (applySwitchBtn) {
        applySwitchBtn.addEventListener('click', () => {
            switchRoleTab('application');
            const nameEl = document.getElementById('app_name');
            if (nameEl) setTimeout(() => nameEl.focus(), 120);
        });
    }

    // Resume file name preview
    const resumeInput = document.getElementById('app_resume');
    const resumeLabel = document.getElementById('resumeFileName');
    if (resumeInput && resumeLabel) {
        resumeInput.addEventListener('change', () => {
            const file = resumeInput.files && resumeInput.files[0];
            resumeLabel.textContent = file ? file.name : 'or drag and drop your resume here';
        });
    }
}
