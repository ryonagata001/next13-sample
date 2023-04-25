import Link from 'next/link';

export default function NotFound () {
    return (
        <div>
            <div>お探しの記事が見つかりませんでした。</div>
            <div>
                <Link href="/">トップへ戻る</Link>
            </div>
        </div>
    )
}