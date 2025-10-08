export function AboutSection(about) {
    return `
        <p class="mt-0 m-4">${about.greeting}</p>
        <p class="mt-0 m-4">${about.bio}</p>
        <p class="m-0">${about.currentFocus}</p>
    `.trim();
}