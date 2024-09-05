import { readdir } from 'fs/promises';
import { join } from 'path';

export default async function handler(req, res) {
  try {
    const blogDir = join(process.cwd(), 'public', 'blog');
    const files = await readdir(blogDir);
    
    const posts = files
      .filter(file => file.endsWith('.html'))
      .map(file => ({
        file,
        title: file.replace(/-/g, ' ').replace('.html', '')
          .split(' ')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ')
      }));

    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(posts);
  } catch (error) {
    console.error('Error reading blog posts:', error);
    res.status(500).json({ error: 'Unable to read blog posts' });
  }
}