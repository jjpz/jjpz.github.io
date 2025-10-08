export function SkillsSection(skills) {
    return `<p>${skills.join(', ')}</p>`.trim();
}