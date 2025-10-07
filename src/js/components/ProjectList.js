import { ArrowIcon } from './icons.js';

export function ProjectList(projects) {
    return projects.map(project => `
        <li class="px-2">
            <a
                class="link-arrow inline-flex items-center justify-center ps-4 text-link no-underline"
                href="${project.url}"
                target="_blank"
            >
                <span>${project.name}</span>
                ${ArrowIcon()}
            </a>
        </li>
    `).join('');
}