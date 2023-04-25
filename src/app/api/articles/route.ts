// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from 'fs';

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export async function GET(_req: Request) {
    await delay(1500);
    const articles = JSON.parse(fs.readFileSync('articles.json', 'utf8'));
    articles.articles.sort((a: any, b: any) => {
        return new Date(b.createdAt).valueOf() - new Date(a.createdAt).valueOf();
    });
    return new Response(JSON.stringify(articles));
}
