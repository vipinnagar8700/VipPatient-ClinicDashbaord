export const preventDefault = () => {
    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', e => e.preventDefault());
    });
    document.querySelectorAll('a[href="#"]').forEach(a => {
        a.addEventListener('click', e => e.preventDefault());
    });
}

export function generateAlphabet() {
    return [...Array(26)].map((_, i) => String.fromCharCode(i + 97));
}