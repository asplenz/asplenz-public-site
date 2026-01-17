import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import gfm from 'remark-gfm';
import { PageContent, Language } from './types';

const contentDirectory = path.join(process.cwd(), 'content', 'foundations');

/**
 * Parse bilingual markdown file and extract content for specific language
 */
export function parseMarkdownByLanguage(
  fileContent: string,
  lang: Language
): { title: string; content: string; rawContent: string } {
  // Split by language sections
  const sections = fileContent.split(/###\s+(English Version|Version Française)/);
  
  // Find the relevant section based on language
  const sectionIndex = lang === 'en' 
    ? sections.findIndex(s => s.trim() === 'English Version')
    : sections.findIndex(s => s.trim() === 'Version Française');
  
  if (sectionIndex === -1 || sectionIndex + 1 >= sections.length) {
    throw new Error(`Language section not found for ${lang}`);
  }
  
  const rawContent = sections[sectionIndex + 1].trim();
  
  // Extract title (first # heading)
  const titleMatch = rawContent.match(/^#\s+(.+)$/m);
  const title = titleMatch ? titleMatch[1] : '';
  
  return {
    title,
    rawContent,
    content: rawContent,
  };
}

/**
 * Convert markdown to HTML
 */
export async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark()
    .use(gfm)
    .use(html, { sanitize: false })
    .process(markdown);
  
  return result.toString();
}

/**
 * Get all markdown files
 */
export function getAllContentFiles(): string[] {
  const files = fs.readdirSync(contentDirectory);
  return files.filter(file => file.endsWith('.md')).sort();
}

/**
 * Get content by slug and language
 */
export async function getContentBySlug(
  slug: string,
  lang: Language
): Promise<PageContent | null> {
  try {
    const files = getAllContentFiles();
    const file = files.find(f => {
      const fileSlug = f.replace(/^\d+-/, '').replace(/\.md$/, '');
      return fileSlug === slug;
    });
    
    if (!file) {
      return null;
    }
    
    const fullPath = path.join(contentDirectory, file);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    
    const { title, rawContent } = parseMarkdownByLanguage(fileContents, lang);
    const content = await markdownToHtml(rawContent);
    
    return {
      slug,
      title,
      content,
      rawContent,
    };
  } catch (error) {
    console.error(`Error reading content for slug: ${slug}`, error);
    return null;
  }
}

/**
 * Get all available slugs
 */
export function getAllSlugs(): string[] {
  const files = getAllContentFiles();
  return files.map(file => file.replace(/^\d+-/, '').replace(/\.md$/, ''));
}
