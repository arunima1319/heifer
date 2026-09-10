if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
) {
    document.body.classList.add("dark-mode");
}
if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: light)").matches
) {
    document.body.classList.add("light-mode");
}