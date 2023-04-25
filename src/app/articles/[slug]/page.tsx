import { Article } from '@/app/types';
import { notFound } from 'next/navigation';

async function getArticle(slug: string) {
    const res = await fetch(`http://localhost:3000/api/articles/${slug}`, { cache: 'no-store' });

    if (res.status === 404) {
        notFound()
    }

    if (!res.ok) {
        throw new Error('Failed to fetch article');
    }

    const data = await res.json();
    return data.article as Article;
}

const ArticleDetail = async ({params}: { params: {slug: string} }) => {
    const article = await getArticle(params.slug);
    return (
        <div>
            <h1 className='py-3 border-b'>記事の詳細</h1>
            <p className='py-3 border-b'>記事のスラッグ: {params.slug}</p>
            <p className='py-3'>{article.content}</p>
        </div>
    )
}

export default ArticleDetail;