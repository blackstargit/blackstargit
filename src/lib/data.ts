import profileData from "@/data/profile.json";
import skillGroupsData from "@/data/skills.json";
import projectsData from "@/data/projects.json";
import moreProjectsData from "@/data/more-projects.json";
import experienceData from "@/data/experience.json";
import educationData from "@/data/education.json";
import navLinksData from "@/data/nav-links.json";

export type Accent = "cyan" | "violet" | "amber";

export type SkillGroup = {
  label: string;
  accent: Accent;
  items: string[];
};

export type Project = {
  slug: string;
  name: string;
  descriptor: string; // official professional wording
  tags: string[];
  status: string;
  accent: Accent;
  card: string; // short summary for the grid
  featured: boolean;
  hasDetail: boolean;
  links?: { label: string; href: string }[];
  stack: string[];
  overview?: string[];
  highlights?: { title: string; body: string }[];
};

export type MoreProject = {
	name: string;
	blurb: string;
	tags: string[];
};

export type Job = {
	role: string;
	org: string;
	period: string;
	location: string;
	current?: boolean;
	points: string[];
};

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export const profile = profileData;

export const projects = projectsData as Project[];

export const featuredProjects = projects.filter((p) => p.featured);
export const detailProjects = projects.filter((p) => p.hasDetail);

export const skillGroups = skillGroupsData as SkillGroup[];
export const moreProjects = moreProjectsData as MoreProject[];
export const experience = experienceData as Job[];
export const education = educationData;
export const navLinks = navLinksData;
