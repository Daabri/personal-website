import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const blogDir = path.join(process.cwd(), 'public', 'blog');
  const files = fs.readdirSync(blogDir);
  
  const posts = files
    .filter(file => path.extname(file) === '.html')
    .map(file => ({
      file,
      title: file.replace(/-/g, ' ').replace('.html', '').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    }));

  res.status(200).json(posts);
}