import { Article } from '@/app/types';
import fs from 'fs';

export async function GET(req: Request) {
    const slug = req.url.split('/').pop();
    const articles = JSON.parse(fs.readFileSync('articles.json', 'utf8'));
    const article = articles.articles.find((article: Article) => article.slug === slug) || null;
    if (article) {
        return new Response(JSON.stringify({ article }));
    } else {
        return new Response(null, { status: 404 });
    }
}
