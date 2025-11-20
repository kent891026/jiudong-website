// ===============================
// Modal references
// ===============================
const modal = document.getElementById("productModal");
const mImg = document.getElementById("m-img");
const mCat = document.getElementById("m-cat");
const mTitle = document.getElementById("m-title");
const mDesc = document.getElementById("m-desc");
const mExtra = document.getElementById("m-extra");
const mPrimary = document.getElementById("m-primary");
const mTag = document.getElementById("m-tag");

// ===============================
// Open & Close Modal
// ===============================
function openModal(card) {
    const img = card.dataset.img;
    const titleZh = card.dataset.titleZh;
    const titleEn = card.dataset.titleEn;
    const catZh = card.dataset.categoryZh;
    const catEn = card.dataset.categoryEn;
    const descZh = card.dataset.descZh;
    const descEn = card.dataset.descEn;
    const extraZh = card.dataset.extraZh;
    const extraEn = card.dataset.extraEn;
    const primaryZh = card.dataset.primaryZh;
    const primaryEn = card.dataset.primaryEn;
    const tagZh = card.dataset.tagZh;
    const tagEn = card.dataset.tagEn;

    mImg.src = img;
    mTitle.dataset.zh = titleZh || "";
    mTitle.dataset.en = titleEn || "";

    mCat.dataset.zh = catZh || "";
    mCat.dataset.en = catEn || "";

    mDesc.dataset.zh = descZh || "";
    mDesc.dataset.en = descEn || "";

    if (extraZh || extraEn) {
        mExtra.style.display = "block";
        mExtra.dataset.zh = extraZh || "";
        mExtra.dataset.en = extraEn || "";
    } else {
        mExtra.style.display = "none";
    }

    mPrimary.dataset.zh = primaryZh || "";
    mPrimary.dataset.en = primaryEn || "";

    if (tagZh || tagEn) {
        mTag.style.display = "inline-block";
        mTag.dataset.zh = tagZh;
        mTag.dataset.en = tagEn;
    } else {
        mTag.style.display = "none";
    }

    applyLanguage();

    modal.classList.add("active");
}

function closeModal() {
    modal.classList.remove("active");
}

// 點擊黑幕關閉 modal
modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
});

// ===============================
// 點擊卡片 → 開啟 Modal
// ===============================
const productCards = document.querySelectorAll(".product-card");

productCards.forEach((card) => {
    card.addEventListener("click", () => {
        openModal(card);
    });
});

// ===============================
// Showcase Filter
// ===============================
const filterBtns = document.querySelectorAll(".filter-btn");
const showcaseCards = document.querySelectorAll(".card-showcase");

filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        const category = btn.dataset.filter;

        filterBtns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");

        showcaseCards.forEach((card) => {
            const cardCat = card.dataset.filterCategory;

            if (category === "all" || category === cardCat) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});

// ===============================
// 語言切換（中 / EN）
// ===============================
let currentLang = "zh";

function toggleLanguage() {
    currentLang = currentLang === "zh" ? "en" : "zh";
    applyLanguage();
}

function applyLanguage() {
    const langItems = document.querySelectorAll(".lang-text");

    langItems.forEach((item) => {
        const zh = item.dataset.zh;
        const en = item.dataset.en;

        if (currentLang === "zh") {
            item.textContent = zh || item.textContent;
        } else {
            item.textContent = en || item.textContent;
        }
    });

    document.getElementById("l-zh").classList.toggle("active", currentLang === "zh");
    document.getElementById("l-en").classList.toggle("active", currentLang === "en");
}

// ===============================
// GSAP 動畫
// ===============================
gsap.from(".hero-bottle", {
    y: 40,
    opacity: 0,
    duration: 1,
    delay: 0.2
});

gsap.from(".hero-title", {
    y: 20,
    opacity: 0,
    duration: 1,
    delay: 0.5
});
