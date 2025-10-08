import config from '../data/config.json';
import experience from '../data/experience.json';
import skills from '../data/skills.json';
import projects from '../data/projects.json';
import { SocialLinksList } from './components/SocialLinksList.js';
import { ExperienceList } from './components/ExperienceList.js';
import { AboutSection } from './components/AboutSection.js';
import { BeachIcon } from './components/icons.js';
import { SkillsSection } from './components/SkillsSection.js';
import { ProjectList } from './components/ProjectList.js';
import { ContactSection } from './components/ContactSection.js';

// Render dynamic content
document.querySelector('#links').innerHTML = SocialLinksList(config.socialLinks);
document.querySelector('#experience').innerHTML = ExperienceList(experience);
document.querySelector('#about').innerHTML = AboutSection(config.about);
document.querySelector('#illustration').innerHTML = BeachIcon();
document.querySelector('#skills-list').innerHTML = SkillsSection(skills);
document.querySelector('#work-list').innerHTML = ProjectList(projects);
document.querySelector('#contact').innerHTML = ContactSection(config.contact);

// Display current year in footer
document.querySelector('.js-year').innerHTML = new Date().getFullYear();
