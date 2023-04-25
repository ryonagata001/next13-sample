import Link from 'next/link';

const Header = () => {
    return (
        <header className='px-3 flex gap-3 py-6 w-[100vw] bg-slate-600'>
          <h1>
            <Link href="/">ブログ</Link>
          </h1>
          <Link href="articles/new">記事を書く</Link>
        </header>
    )
}

export default Header;