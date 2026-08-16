document.addEventListener("DOMContentLoaded", () => {

    "use strict";


    /* =====================================================
       HELPERS
    ====================================================== */

    const $ = (selector) =>
        document.querySelector(selector);


    const $$ = (selector) =>
        document.querySelectorAll(selector);


    function setText(
        selector,
        value
    ) {

        const element =
            $(selector);

        if (!element) {
            return;
        }

        element.textContent =
            value ?? "";

    }


    function setHTML(
        selector,
        value
    ) {

        const element =
            $(selector);

        if (!element) {
            return;
        }

        element.innerHTML =
            value ?? "";

    }


    /* =====================================================
       CONTENT
    ====================================================== */

    const fallback = {

        step1: {
            eyebrow:
                "the sea is quiet tonight",

            title:
                "Touch the water.",

            description:
                "I left something for you<br>somewhere between the moon and the tide.",

            button:
                "touch the water",

            buttonArrow:
                "↓",

            note:
                "best experienced with sound"
        },

        step2: {
            eyebrow:
                "ALONG THE SHORELINE",

            title:
                "I left a little <em>something</em> here.",

            description:
                "It wasn't meant to be found<br>by just anyone.",

            button:
                "follow the tide",

            buttonArrow:
                "→"
        },

        step3: {
            eyebrow:
                "THINGS THE TIDE CARRIED",

            title:
                "Three little things<br><em>found their way here.</em>",

            description:
                "Touch one.",

            hint:
                "touch what the tide left behind",

            objects: {

                shell:
                    "A little piece of the shore. Simple, quiet, and beautiful.",

                star:
                    "You remind me of quiet nights — the kind that make you want to stay a little longer.",

                bottle:
                    "And this one carried something I couldn't say out loud yet."

            },

            button:
                "keep walking",

            buttonArrow:
                "→"
        },

        step4: {

            eyebrow:
                "A QUESTION FROM THE SEA",

            title:
                "Which one would<br>you keep?",

            description:
                "Don't think too much.<br>Just pick the one you like.",

            choices: {

                moon:
                    "moon shell",

                pearl:
                    "pearl shell",

                tide:
                    "tide shell"

            },

            replyPrefix:
                "You chose",

            replySuffix:
                "I think I'd have chosen it too.",

            button:
                "keep going",

            buttonArrow:
                "→"
        },

        step5: {

            eyebrow:
                "SOMETHING LEFT BY THE TIDE",

            script:
                "I almost left this unsaid...",

            title:
                "But maybe<br><em>you should know.</em>",

            reveal1:
                "Some people arrive quietly.",

            reveal2:
                "And somehow, they make the whole sea feel different.",

            button:
                "I want to ask you something",

            buttonArrow:
                "→"
        },

        step6: {

            eyebrow:
                "ONE LITTLE QUESTION",

            script:
                "before we go any further...",

            title:
                "Do you think<br><em>we could be something?</em>",

            description:
                "No pressure.<br>Just the feeling in your heart.",

            hint:
                "the tide will carry your answer",

            choices: {

                maybe: {

                    icon:
                        "≋",

                    label:
                        "maybe",

                    reply:
                        "Maybe is still a beautiful answer. Some things are worth letting grow slowly."

                },

                yes: {

                    icon:
                        "♡",

                    label:
                        "I think so",

                    reply:
                        "Then maybe the tide brought us here for a reason."

                },

                notyet: {

                    icon:
                        "◌",

                    label:
                        "let me think",

                    reply:
                        "That's okay. Some waves need a little more time before they reach the shore."

                }

            }

        },

        step7: {

            eyebrow:
                "ONE LAST THING",

            script:
                "the tide has one more thing to say...",

            title:
                "Some feelings<br><em>don't need many words.</em>",

            description:
                "Touch the little heart<br>and let the water carry the rest.",

            reveal1:
                "Maybe the sea brought you here for a reason.",

            reveal2:
                "And maybe you already know what I want to ask.",

            button:
                "one more step",

            buttonArrow:
                "→"

        },

        step8: {

            eyebrow:
                "THE QUESTION I REALLY WANTED TO ASK",

            script:
                "after all these little waves...",

            title:
                "Will you be<br><em>my Valentine?</em>",

            description:
                "No perfect answer.<br>Just tell me what your heart says.",

            yesButton:
                "yes ♡",

            notYetButton:
                "not yet",

            yesSubtext:
                "I'd love that.",

            notYetSubtext:
                "That's okay. I'll leave the light on.",

            finalEyebrow:
                "A LITTLE NOTE FROM THE SHORE",

            finalTitle:
                "Thank you for<br><em>being here.</em>",

            finalMessage:
                "Some people become memories.<br>Some become stories.<br>And some simply make the ocean feel a little more beautiful.",

            closing:
                "with a little ocean in my heart ♡"

        },

        footer: {

            prefix:
                "crafted with care by",

            name:
                "Ben",

            separator:
                "•",

            ecosystem:
                "Omni-Net"

        },

        music: {

            title:
                "Ocean Eyes",

            artist:
                "Billie Eilish"

        }

    };


    const C =
        typeof CONTENT !== "undefined"
            ? CONTENT
            : fallback;


    /* =====================================================
       APPLY CONTENT
    ====================================================== */

    function applyContent() {

        setText(
            "#step1Eyebrow",
            C.step1.eyebrow
        );

        setHTML(
            "#step1Title",
            C.step1.title
        );

        setHTML(
            "#step1Description",
            C.step1.description
        );

        setText(
            "#step1Button",
            C.step1.button
        );

        setText(
            "#step1Arrow",
            C.step1.buttonArrow
        );

        setText(
            "#step1Note",
            C.step1.note
        );


        setText(
            "#step2Eyebrow",
            C.step2.eyebrow
        );

        setHTML(
            "#step2Title",
            C.step2.title
        );

        setHTML(
            "#step2Description",
            C.step2.description
        );

        setText(
            "#step2Button",
            C.step2.button
        );

        setText(
            "#step2Arrow",
            C.step2.buttonArrow
        );


        setText(
            "#step3Eyebrow",
            C.step3.eyebrow
        );

        setHTML(
            "#step3Title",
            C.step3.title
        );

        setHTML(
            "#step3Description",
            C.step3.description
        );

        setText(
            "#step3Hint",
            C.step3.hint
        );

        setText(
            "#step3Button",
            C.step3.button
        );

        setText(
            "#step3Arrow",
            C.step3.buttonArrow
        );


        $$(".tide-object")
            .forEach(
                object => {

                    const key =
                        object.dataset.object;

                    object.dataset.message =
                        C.step3.objects?.[key]
                        || "";

                }
            );


        setText(
            "#step4Eyebrow",
            C.step4.eyebrow
        );

        setHTML(
            "#step4Title",
            C.step4.title
        );

        setHTML(
            "#step4Description",
            C.step4.description
        );

        setText(
            "#moonLabel",
            C.step4.choices.moon
        );

        setText(
            "#pearlLabel",
            C.step4.choices.pearl
        );

        setText(
            "#tideLabel",
            C.step4.choices.tide
        );

        setText(
            "#step4Button",
            C.step4.button
        );

        setText(
            "#step4Arrow",
            C.step4.buttonArrow
        );


        setText(
            "#step5Eyebrow",
            C.step5.eyebrow
        );

        setHTML(
            "#step5Script",
            C.step5.script
        );

        setHTML(
            "#step5Title",
            C.step5.title
        );

        setText(
            "#step5Reveal1",
            C.step5.reveal1
        );

        setText(
            "#step5Reveal2",
            C.step5.reveal2
        );

        setText(
            "#step5Button",
            C.step5.button
        );

        setText(
            "#step5Arrow",
            C.step5.buttonArrow
        );


        setText(
            "#step6Eyebrow",
            C.step6.eyebrow
        );

        setHTML(
            "#step6Script",
            C.step6.script
        );

        setHTML(
            "#step6Title",
            C.step6.title
        );

        setHTML(
            "#step6Description",
            C.step6.description
        );

        setText(
            "#step6Hint",
            C.step6.hint
        );

        setText(
            "#maybeIcon",
            C.step6.choices.maybe.icon
        );

        setText(
            "#maybeLabel",
            C.step6.choices.maybe.label
        );

        setText(
            "#yesIcon",
            C.step6.choices.yes.icon
        );

        setText(
            "#yesLabel",
            C.step6.choices.yes.label
        );

        setText(
            "#notyetIcon",
            C.step6.choices.notyet.icon
        );

        setText(
            "#notyetLabel",
            C.step6.choices.notyet.label
        );


        setText(
            "#step7Eyebrow",
            C.step7.eyebrow
        );

        setHTML(
            "#step7Script",
            C.step7.script
        );

        setHTML(
            "#step7Title",
            C.step7.title
        );

        setHTML(
            "#step7Description",
            C.step7.description
        );

        setText(
            "#step7Reveal1",
            C.step7.reveal1
        );

        setText(
            "#step7Reveal2",
            C.step7.reveal2
        );

        setText(
            "#step7Button",
            C.step7.button
        );

        setText(
            "#step7Arrow",
            C.step7.buttonArrow
        );


        setText(
            "#step8Eyebrow",
            C.step8.eyebrow
        );

        setHTML(
            "#step8Script",
            C.step8.script
        );

        setHTML(
            "#step8Title",
            C.step8.title
        );

        setHTML(
            "#step8Description",
            C.step8.description
        );

        setText(
            "#finalYesText",
            C.step8.yesButton
        );

        setText(
            "#finalYesSubtext",
            C.step8.yesSubtext
        );

        setText(
            "#finalNotYetText",
            C.step8.notYetButton
        );

        setText(
            "#finalNotYetSubtext",
            C.step8.notYetSubtext
        );

        setHTML(
            "#finalEyebrow",
            C.step8.finalEyebrow
        );

        setHTML(
            "#finalTitle",
            C.step8.finalTitle
        );

        setHTML(
            "#finalMessage",
            C.step8.finalMessage
        );

        setHTML(
            "#finalClosing",
            C.step8.closing
        );


        setText(
            "#footerPrefix",
            C.footer.prefix
        );

        setText(
            "#footerBen",
            C.footer.name
        );

        setText(
            "#footerSeparator",
            C.footer.separator
        );

        setText(
            "#footerOmni",
            C.footer.ecosystem
        );

        setText(
            "#finalBen",
            C.footer.name
        );

        setText(
            "#finalOmni",
            C.footer.ecosystem
        );


        setText(
            "#musicTitle",
            C.music.title
        );

        setText(
            "#musicArtist",
            C.music.artist
        );

    }


    applyContent();


    /* =====================================================
       CORE ELEMENTS
    ====================================================== */

    const ocean =
        $("#ocean");

    const step1 =
        $("#step1");

    const step2 =
        $("#step2");

    const page3 =
        $("#page3");

    const page4 =
        $("#page4");

    const page5 =
        $("#page5");

    const page6 =
        $("#page6");

    const page7 =
        $("#page7");

    const page8 =
        $("#page8");


    /*
       Index:
       0 = Step 1
       1 = Step 2
       2 = Step 3
       3 = Step 4
       4 = Step 5
       5 = Step 6
       6 = Step 7
       7 = Step 8
    */

    const pages = [
        step1,
        step2,
        page3,
        page4,
        page5,
        page6,
        page7,
        page8
    ];


    let currentPage = 0;

    let isTransitioning = false;


    /* =====================================================
       HARD RESET
       This is the important part.
    ====================================================== */

    function resetDiveState() {

        /*
         * Remove all dive-related state.
         */

        ocean.classList.remove(
            "dive-mode"
        );


        /*
         * Reset Step 1 to normal.
         */

        step1.style.opacity = "";
        step1.style.visibility = "";
        step1.style.pointerEvents = "";
        step1.style.transform = "";
        step1.style.filter = "";


        /*
         * Reset Step 2.
         */

        step2.style.opacity = "";
        step2.style.visibility = "";
        step2.style.pointerEvents = "";
        step2.style.transform = "";
        step2.style.filter = "";

    }


    /* =====================================================
       SIMPLE FADE PAGE SWITCH
       Used from Step 2 → Step 8.
    ====================================================== */

    function fadeToPage(
        targetIndex
    ) {

        if (
            targetIndex < 0 ||
            targetIndex >= pages.length
        ) {
            return;
        }


        if (
            targetIndex === currentPage
        ) {
            return;
        }


        if (isTransitioning) {
            return;
        }


        isTransitioning = true;


        /*
         * Remove dive mode BEFORE
         * starting any later page.
         *
         * This is essential.
         */

        resetDiveState();


        /*
         * Current page fades out.
         */

        const oldPage =
            pages[currentPage];


        if (oldPage) {

            oldPage.classList.remove(
                "active"
            );

        }


        /*
         * Small gap in between:
         * old ocean disappears,
         * new page fades in.
         */

        setTimeout(
            () => {

                pages.forEach(
                    page => {

                        if (!page) {
                            return;
                        }


                        page.classList.remove(
                            "active"
                        );

                    }
                );


                const nextPage =
                    pages[targetIndex];


                if (nextPage) {

                    nextPage.classList.add(
                        "active"
                    );

                }


                currentPage =
                    targetIndex;


                setTimeout(
                    () => {

                        isTransitioning =
                            false;

                    },
                    760
                );

            },
            180
        );

    }


    /* =====================================================
       INITIAL PAGE
    ====================================================== */

    pages.forEach(
        page => {

            page?.classList.remove(
                "active"
            );

        }
    );


    resetDiveState();


    step1.classList.add(
        "active"
    );


    currentPage =
        0;


    /* =====================================================
       AUDIO
    ====================================================== */

    const bgmAudio =
        $("#bgmAudio");

    const clickAudio =
        $("#clickAudio");

    const transitionAudio =
        $("#transitionAudio");

    const heartbeatAudio =
        $("#heartbeatAudio");

    const successAudio =
        $("#successAudio");

    const miniPlay =
        $("#miniPlay");

    const seekBar =
        $("#seekBar");

    const volumeBar =
        $("#volumeBar");

    const currentTime =
        $("#currentTime");

    const duration =
        $("#duration");

    const muteBtn =
        $("#muteBtn");

    const restartBtn =
        $("#restartBtn");


    let muted = false;

    let lastVolume =
        Number(
            volumeBar?.value || 0.35
        );


    if (bgmAudio) {

        bgmAudio.volume =
            lastVolume;

    }


    function playAudio(
        audio,
        volume
    ) {

        if (!audio) {
            return;
        }


        try {

            audio.pause();

            audio.currentTime =
                0;

            audio.volume =
                volume;

            audio.play()?.catch(
                () => {}
            );

        } catch {
            /* no-op */
        }

    }


    function clickSound() {

        playAudio(
            clickAudio,
            0.42
        );

    }


    function transitionSound() {

        playAudio(
            transitionAudio,
            0.72
        );

    }


    function heartbeatSound() {

        playAudio(
            heartbeatAudio,
            0.55
        );

    }


    function successSound() {

        playAudio(
            successAudio,
            0.65
        );

    }


    function formatTime(
        seconds
    ) {

        if (
            !Number.isFinite(
                seconds
            )
        ) {
            return "0:00";
        }


        const min =
            Math.floor(
                seconds / 60
            );


        const sec =
            Math.floor(
                seconds % 60
            );


        return (
            min +
            ":" +
            String(sec).padStart(
                2,
                "0"
            )
        );

    }


    function updatePlayer() {

        if (
            !miniPlay ||
            !bgmAudio
        ) {
            return;
        }


        miniPlay.textContent =
            bgmAudio.paused
                ? "▶"
                : "Ⅱ";

    }


    function startBGM() {

        if (!bgmAudio) {
            return;
        }


        bgmAudio
            .play()
            ?.catch(
                () => {}
            );


        updatePlayer();

    }


    miniPlay?.addEventListener(
        "click",
        () => {

            clickSound();


            if (
                bgmAudio.paused
            ) {

                bgmAudio
                    .play()
                    ?.catch(
                        () => {}
                    );

            } else {

                bgmAudio.pause();

            }


            updatePlayer();

        }
    );


    restartBtn?.addEventListener(
        "click",
        () => {

            clickSound();


            if (bgmAudio) {

                bgmAudio.currentTime =
                    0;

            }

        }
    );


    muteBtn?.addEventListener(
        "click",
        () => {

            clickSound();


            if (!bgmAudio) {
                return;
            }


            if (muted) {

                bgmAudio.volume =
                    lastVolume;

                if (volumeBar) {

                    volumeBar.value =
                        lastVolume;

                }

                muted =
                    false;

                muteBtn.textContent =
                    "♪";

            } else {

                lastVolume =
                    bgmAudio.volume;

                bgmAudio.volume =
                    0;

                if (volumeBar) {

                    volumeBar.value =
                        0;

                }

                muted =
                    true;

                muteBtn.textContent =
                    "×";

            }

        }
    );


    volumeBar?.addEventListener(
        "input",
        () => {

            const value =
                Number(
                    volumeBar.value
                );


            if (bgmAudio) {

                bgmAudio.volume =
                    value;

            }


            if (value > 0) {

                muted =
                    false;

                if (muteBtn) {

                    muteBtn.textContent =
                        "♪";

                }

            }

        }
    );


    seekBar?.addEventListener(
        "input",
        () => {

            if (
                !bgmAudio ||
                !bgmAudio.duration
            ) {
                return;
            }


            bgmAudio.currentTime =
                (
                    Number(
                        seekBar.value
                    ) /
                    100
                ) *
                bgmAudio.duration;

        }
    );


    bgmAudio?.addEventListener(
        "timeupdate",
        () => {

            if (currentTime) {

                currentTime.textContent =
                    formatTime(
                        bgmAudio.currentTime
                    );

            }


            if (duration) {

                duration.textContent =
                    formatTime(
                        bgmAudio.duration
                    );

            }


            if (
                seekBar &&
                bgmAudio.duration
            ) {

                seekBar.value =
                    (
                        bgmAudio.currentTime /
                        bgmAudio.duration
                    ) *
                    100;

            }

        }
    );


    bgmAudio?.addEventListener(
        "loadedmetadata",
        () => {

            if (duration) {

                duration.textContent =
                    formatTime(
                        bgmAudio.duration
                    );

            }

        }
    );


    /* =====================================================
       WATER EFFECTS
    ====================================================== */

    function createRipple(
        button,
        event
    ) {

        if (
            !button ||
            !event
        ) {
            return;
        }


        const rect =
            button.getBoundingClientRect();


        const ripple =
            document.createElement(
                "span"
            );


        ripple.className =
            "water-ripple";


        ripple.style.left =
            `${event.clientX - rect.left}px`;


        ripple.style.top =
            `${event.clientY - rect.top}px`;


        button.appendChild(
            ripple
        );


        setTimeout(
            () => {

                ripple.remove();

            },
            1100
        );

    }


    function createWaterDrops(
        x,
        y,
        count = 12
    ) {

        for (
            let i = 0;
            i < count;
            i++
        ) {

            const drop =
                document.createElement(
                    "span"
                );


            drop.className =
                "water-drop-click";


            drop.style.left =
                `${x}px`;


            drop.style.top =
                `${y}px`;


            drop.style.setProperty(
                "--x",
                `${
                    Math.random() * 180 -
                    90
                }px`
            );


            drop.style.setProperty(
                "--y",
                `${
                    Math.random() * 120 -
                    25
                }px`
            );


            drop.style.animationDelay =
                `${
                    Math.random() * .15
                }s`;


            document.body.appendChild(
                drop
            );


            setTimeout(
                () => {

                    drop.remove();

                },
                1300
            );

        }

    }


    function buttonFX(
        button,
        event,
        drops = 14
    ) {

        clickSound();


        if (
            button &&
            event
        ) {

            createRipple(
                button,
                event
            );


            createWaterDrops(
                event.clientX,
                event.clientY,
                drops
            );

        }

    }


    /* =====================================================
       UNDERWATER PARTICLES
    ====================================================== */

    function createBubbles(
        container,
        count
    ) {

        if (!container) {
            return;
        }


        for (
            let i = 0;
            i < count;
            i++
        ) {

            const bubble =
                document.createElement(
                    "span"
                );


            bubble.className =
                "under-bubble";


            const size =
                4 +
                Math.random() * 23;


            bubble.style.width =
                `${size}px`;


            bubble.style.height =
                `${size}px`;


            bubble.style.left =
                `${Math.random() * 100}%`;


            bubble.style.setProperty(
                "--duration",
                `${
                    6 +
                    Math.random() * 10
                }s`
            );


            bubble.style.setProperty(
                "--drift",
                `${
                    Math.random() * 180 -
                    90
                }px`
            );


            bubble.style.animationDelay =
                `${
                    -Math.random() * 12
                }s`;


            container.appendChild(
                bubble
            );

        }

    }


    function createFish(
        count
    ) {

        const fishSchool =
            $("#fishSchool");


        if (!fishSchool) {
            return;
        }


        for (
            let i = 0;
            i < count;
            i++
        ) {

            const fish =
                document.createElement(
                    "span"
                );


            fish.className =
                "fish";


            const eye =
                document.createElement(
                    "span"
                );


            eye.className =
                "fish-eye";


            fish.appendChild(
                eye
            );


            fish.style.top =
                `${
                    10 +
                    Math.random() * 55
                }%`;


            fish.style.left =
                `${
                    -15 +
                    Math.random() * 25
                }%`;


            const swimDuration =
                10 +
                Math.random() * 12;


            fish.style.setProperty(
                "--duration",
                `${swimDuration}s`
            );


            fish.style.animationDelay =
                `${
                    -Math.random() *
                    swimDuration
                }s`;


            const scale =
                .55 +
                Math.random() * .7;


            fish.style.width =
                `${46 * scale}px`;


            fish.style.height =
                `${26 * scale}px`;


            fishSchool.appendChild(
                fish
            );

        }

    }


    /* =====================================================
       STEP 1 → STEP 2
       ONLY DIVE
    ====================================================== */

    let diving =
        false;


    $("#diveButton")
        ?.addEventListener(
            "click",
            event => {

                if (
                    diving ||
                    currentPage !== 0
                ) {
                    return;
                }


                diving =
                    true;


                buttonFX(
                    $("#diveButton"),
                    event,
                    22
                );


                /*
                 * Start BGM from a user gesture.
                 */

                startBGM();


                /*
                 * ONLY this transition
                 * gets transition.mp3.
                 */

                transitionSound();


                /*
                 * Start dive mode.
                 */

                ocean.classList.add(
                    "dive-mode"
                );


                /*
                 * Step 2 appears during
                 * the dive.
                 */

                setTimeout(
                    () => {

                        step1.classList.remove(
                            "active"
                        );


                        step2.classList.add(
                            "active"
                        );


                        currentPage =
                            1;

                    },
                    560
                );


                setTimeout(
                    () => {

                        diving =
                            false;

                    },
                    1950
                );

            }
        );


    /* =====================================================
       STEP 2 → STEP 3
       FADE ONLY
    ====================================================== */

    $("#page2Button")
        ?.addEventListener(
            "click",
            event => {

                if (
                    currentPage !== 1
                ) {
                    return;
                }


                const button =
                    $("#page2Button");


                buttonFX(
                    button,
                    event,
                    18
                );


                /*
                 * IMPORTANT:
                 *
                 * Turn off dive BEFORE
                 * normal fade.
                 */

                ocean.classList.remove(
                    "dive-mode"
                );


                /*
                 * The underwater scene
                 * fades away normally.
                 */

                fadeToPage(
                    2
                );

            }
        );


    /* =====================================================
       STEP 3
    ====================================================== */

    const tideMessage =
        $("#tideMessage");


    const tideMessageText =
        $("#tideMessageText");


    $$(".tide-object")
        .forEach(
            object => {

                object.addEventListener(
                    "click",
                    event => {

                        buttonFX(
                            object,
                            event,
                            12
                        );


                        if (
                            tideMessageText
                        ) {

                            tideMessageText.textContent =
                                object.dataset.message
                                || "";

                        }


                        tideMessage?.classList.add(
                            "visible"
                        );

                    }
                );

            }
        );


    $("#closeTideMessage")
        ?.addEventListener(
            "click",
            () => {

                clickSound();


                tideMessage?.classList.remove(
                    "visible"
                );

            }
        );


    $("#page3Button")
        ?.addEventListener(
            "click",
            event => {

                buttonFX(
                    $("#page3Button"),
                    event,
                    15
                );


                fadeToPage(
                    3
                );

            }
        );


    /* =====================================================
       STEP 4
    ====================================================== */

    $$(".choice-shell")
        .forEach(
            button => {

                button.addEventListener(
                    "click",
                    event => {

                        buttonFX(
                            button,
                            event,
                            14
                        );


                        $$(".choice-shell")
                            .forEach(
                                item => {

                                    item.classList.remove(
                                        "selected"
                                    );

                                }
                            );


                        button.classList.add(
                            "selected"
                        );


                        const choice =
                            button.dataset.choice;


                        const choiceText =
                            C.step4
                                .choices?.[
                                    choice
                                ]
                                || "";


                        const answerReveal =
                            $("#answerReveal");


                        if (
                            answerReveal
                        ) {

                            answerReveal.textContent =
                                `${C.step4.replyPrefix} ${choiceText}. ${C.step4.replySuffix}`;

                            answerReveal.classList.add(
                                "visible"
                            );

                        }


                        $("#page4Continue")
                            ?.classList.add(
                                "show"
                            );

                    }
                );

            }
        );


    $("#page4Continue")
        ?.addEventListener(
            "click",
            event => {

                buttonFX(
                    $("#page4Continue"),
                    event,
                    15
                );


                fadeToPage(
                    4
                );

            }
        );


    /* =====================================================
       STEP 5
    ====================================================== */

    $("#bottleLetter")
        ?.addEventListener(
            "click",
            event => {

                buttonFX(
                    $("#bottleLetter"),
                    event,
                    16
                );


                $("#page5Reveal")
                    ?.classList.add(
                        "visible"
                    );


                $("#page5Continue")
                    ?.classList.add(
                        "show"
                    );

            }
        );


    $("#page5Continue")
        ?.addEventListener(
            "click",
            event => {

                buttonFX(
                    $("#page5Continue"),
                    event,
                    15
                );


                fadeToPage(
                    5
                );

            }
        );


    /* =====================================================
       STEP 6
    ====================================================== */

    let answerLocked =
        false;


    $$(".question-button")
        .forEach(
            button => {

                button.addEventListener(
                    "click",
                    event => {

                        if (
                            answerLocked
                        ) {
                            return;
                        }


                        answerLocked =
                            true;


                        buttonFX(
                            button,
                            event,
                            16
                        );


                        $$(".question-button")
                            .forEach(
                                item => {

                                    item.classList.remove(
                                        "selected"
                                    );

                                }
                            );


                        button.classList.add(
                            "selected"
                        );


                        const key =
                            button.dataset.answer;


                        const result =
                            C.step6
                                .choices?.[
                                    key
                                ];


                        const reply =
                            $("#questionReply");


                        if (
                            result &&
                            reply
                        ) {

                            reply.textContent =
                                result.reply;

                            reply.classList.add(
                                "visible"
                            );

                        }


                        /*
                         * Old style:
                         * after answer, fade to Step 7.
                         */

                        setTimeout(
                            () => {

                                fadeToPage(
                                    6
                                );


                                answerLocked =
                                    false;

                            },
                            1100
                        );

                    }
                );

            }
        );


    /* =====================================================
       STEP 7
    ====================================================== */

    $("#tideHeart")
        ?.addEventListener(
            "click",
            event => {

                buttonFX(
                    $("#tideHeart"),
                    event,
                    18
                );


                $("#tideHeart")
                    ?.classList.add(
                        "opened"
                    );


                const heartRipple =
                    $("#heartRipple");


                if (
                    heartRipple
                ) {

                    heartRipple.classList.remove(
                        "animate"
                    );


                    void heartRipple.offsetWidth;


                    heartRipple.classList.add(
                        "animate"
                    );

                }


                $("#page7Reveal")
                    ?.classList.add(
                        "visible"
                    );


                $("#page7Continue")
                    ?.classList.add(
                        "show"
                    );

            }
        );


    $("#page7Continue")
        ?.addEventListener(
            "click",
            event => {

                buttonFX(
                    $("#page7Continue"),
                    event,
                    15
                );


                fadeToPage(
                    7
                );

            }
        );


    /* =====================================================
       STEP 8
    ====================================================== */

    let finalLocked =
        false;


    function finishFinal(
        type,
        button,
        event
    ) {

        if (
            finalLocked
        ) {
            return;
        }


        finalLocked =
            true;


        buttonFX(
            button,
            event,
            type === "yes"
                ? 28
                : 18
        );


        if (
            type === "yes"
        ) {

            heartbeatSound();


            setTimeout(
                () => {

                    successSound();

                },
                650
            );

        }


        $("#step8Normal")
            ?.classList.add(
                "step8-complete"
            );


        setTimeout(
            () => {

                page8
                    ?.classList.add(
                        type === "yes"
                            ? "accepted"
                            : "not-yet"
                    );


                $("#finalReveal")
                    ?.classList.add(
                        "visible"
                    );


                finalLocked =
                    false;

            },
            400
        );

    }


    $("#finalYes")
        ?.addEventListener(
            "click",
            event => {

                finishFinal(
                    "yes",
                    $("#finalYes"),
                    event
                );

            }
        );


    $("#finalNotYet")
        ?.addEventListener(
            "click",
            event => {

                finishFinal(
                    "notyet",
                    $("#finalNotYet"),
                    event
                );

            }
        );


    /* =====================================================
       BACKGROUND PARTICLES
    ====================================================== */

    function createStars() {

        const stars =
            $("#stars");


        if (!stars) {
            return;
        }


        for (
            let i = 0;
            i < 30;
            i++
        ) {

            const star =
                document.createElement(
                    "span"
                );


            star.className =
                "star";


            star.textContent =
                i % 3 === 0
                    ? "✦"
                    : "✧";


            star.style.left =
                `${Math.random() * 100}%`;


            star.style.top =
                `${Math.random() * 100}%`;


            star.style.animationDelay =
                `${Math.random() * 4}s`;


            stars.appendChild(
                star
            );

        }

    }


    createStars();


    createBubbles(
        $("#backgroundBubbles"),
        18
    );


    createBubbles(
        $("#underwaterBubbles"),
        52
    );


    createFish(
        10
    );


    updatePlayer();

});