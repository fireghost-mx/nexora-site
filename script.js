// =========================================
// NEXORA — JAVASCRIPT
// =========================================


// =========================================
// ANO AUTOMÁTICO NO FOOTER
// =========================================

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// =========================================
// FORMULÁRIO DE CONTATO
// =========================================

const contactForm = document.getElementById("contactForm");

const formContent = document.getElementById("form-content");

const successMessage = document.getElementById("success-message");


if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        // Impede o recarregamento da página
        event.preventDefault();


        // =========================================
        // COLETA DOS DADOS
        // =========================================

        const name = document.getElementById("name").value.trim();

        const company = document.getElementById("company").value.trim();

        const email = document.getElementById("email").value.trim();

        const phone = document.getElementById("phone").value.trim();

        const interest = document.getElementById("interest").value;

        const message = document.getElementById("message").value.trim();


        // =========================================
        // VALIDAÇÃO SIMPLES
        // =========================================

        if (
            !name ||
            !company ||
            !email ||
            !phone ||
            !message
        ) {

            alert(
                "Por favor, preencha todos os campos antes de continuar."
            );

            return;
        }


        // =========================================
        // MENSAGEM PARA O WHATSAPP
        // =========================================

        const whatsappMessage =
`Olá, Gabriel! 👋

Recebi um novo contato através do site da Nexora.

━━━━━━━━━━━━━━━━━━

👤 NOME:
${name}

🏢 EMPRESA:
${company}

📧 E-MAIL:
${email}

📱 TELEFONE:
${phone}

🎯 INTERESSE:
${interest}

💬 SOBRE A OPERAÇÃO:
${message}

━━━━━━━━━━━━━━━━━━

Origem: Site Nexora
Data: ${new Date().toLocaleDateString("pt-BR")}`;


        // =========================================
        // SEU NÚMERO DE WHATSAPP
        // =========================================

        const whatsappNumber = "5547996743413";


        // Codifica a mensagem para URL
        const encodedMessage =
            encodeURIComponent(whatsappMessage);


        // Cria o link do WhatsApp
        const whatsappURL =
            `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;


        // =========================================
        // MOSTRA A MENSAGEM DE SUCESSO
        // =========================================

        if (formContent && successMessage) {

            formContent.style.display = "none";

            successMessage.style.display = "flex";

        }


        // =========================================
        // ABRE O WHATSAPP
        // =========================================

        setTimeout(function () {

            window.open(
                whatsappURL,
                "_blank"
            );

        }, 500);

    });

}


// =========================================
// ANIMAÇÃO SUAVE DOS LINKS INTERNOS
// =========================================

const internalLinks =
    document.querySelectorAll('a[href^="#"]');


internalLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId =
            this.getAttribute("href");


        if (
            targetId === "#" ||
            !targetId
        ) {
            return;
        }


        const target =
            document.querySelector(targetId);


        if (target) {

            event.preventDefault();


            target.scrollIntoView({

                behavior: "smooth",

                block: "start"

            });

        }

    });

});


// =========================================
// HEADER COM SOMBRA AO ROLAR
// =========================================

const header =
    document.querySelector(".header");


window.addEventListener("scroll", function () {

    if (!header) {
        return;
    }


    if (window.scrollY > 30) {

        header.style.boxShadow =
            "0 8px 30px rgba(6, 27, 53, 0.08)";

    } else {

        header.style.boxShadow =
            "none";

    }

});


// =========================================
// ANIMAÇÃO DE ENTRADA DOS CARDS
// =========================================

const animatedElements =
    document.querySelectorAll(
        ".process-card, .benefit-item, .solution-card"
    );


const observerOptions = {

    threshold: 0.12,

    rootMargin: "0px 0px -40px 0px"

};


const observer =
    new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        observerOptions
    );


// Prepara os elementos
animatedElements.forEach(function (element) {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(20px)";

    element.style.transition =
        "opacity 0.6s ease, transform 0.6s ease";


    observer.observe(element);

});