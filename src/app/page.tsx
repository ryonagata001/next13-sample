import { Inter } from 'next/font/google';
import Link from 'next/link';

import { Article } from './types';

const inter = Inter({ subsets: ['latin'] })

async function getArticles() {
  const res = await fetch('http://localhost:3000/api/articles', { cache: 'no-store' });

  if (!res.ok) {
    throw new Error('Failed to fetch articles');
  }

  const data = await res.json();
  return data.articles as Article[];
}

export default async function Home() {
  const articles = await getArticles();

  return (
    <div className='py-4 px-3'>
      <h1 className='text-4xl font-semibold'>新着記事</h1>
      <ul>
        {articles.map((article) => (
          <div key={article.id}>
            <Link key={article.id} href={`/articles/${article.slug}`}>{article.title}</Link>
          </div>
        ))}
      </ul>
    </div>
  )
}
