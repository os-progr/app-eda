fabBtn.addEventListener('click', () => {
    if (!isAuthReady || !userId) {
        showMessageModal("Debes iniciar sesión para agregar contenido.", "Advertencia");
        return;
    }

    // ... resto del código
});
