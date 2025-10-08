import { ArrowIcon } from './icons.js';
import { ExternalLink } from './ExternalLink.js';

export function ProjectList(projects) {
    return projects.map(project => `
        <li class="px-2">
            ${ExternalLink({
                href: project.url,
                text: project.name,
                classes: 'link-arrow inline-flex items-center justify-center ps-4 text-link no-underline',
                children: ArrowIcon()
            })}
        </li>
    `).join('').trim();
}