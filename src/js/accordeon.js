// Récupération de l'accordéon
const accordeon = document.querySelector(".faq__question");

// Fermer tous les details au départ
accordeon.querySelectorAll("details").forEach((det) => (det.open = false));

// Ajouter un événement à chaque details
accordeon.querySelectorAll("details").forEach((det) => {
    det.addEventListener("toggle", () => {
        if (det.open) {
            // Fermer tous les autres details
            accordeon.querySelectorAll("details").forEach((other) => {
                if (other !== det) {
                    other.open = false;
                }
            });
        }
    });
});
