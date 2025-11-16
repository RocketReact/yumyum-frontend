import Image from 'next/image';
import css from './NotFound.module.css';
import Link from 'next/link';

const NotFound = () => {
  return (
    <div className={css.сontainerNotFound}>
      <picture>
        <source
          srcSet="/not-found/not-found-tablet-desktop.webp"
          media="(min-width: 768px)"
        />
        <Image
          src="/not-found/not-found-mobile.webp"
          alt="Not-found"
          width={361}
          height={267}
          priority
          className={css.notFoundImg}
        />
      </picture>
      <h1 className={css.notFoundTitle}>404</h1>
      <p className={css.notFoundDescription}>Recipe not found</p>
      <Link href="/" className={css.notFoundBackButton}>
        <svg stroke="var(--white)" width="24" height="24">
          <use href="/sprite.svg#icon-Arrowsleft-short"></use>
        </svg>
        <p className={css.notFoundButtonDescription}>Back to Home</p>
      </Link>
    </div>
  );
};

export default NotFound;
