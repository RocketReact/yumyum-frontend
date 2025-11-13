import css from '../Header/Header.module.css';
export default function HamburgerMenu() {
  return (
    <div className={css.burger}>
      <svg stroke="var(--white)" width={32} height={32}>
        <use href="/sprite.svg#Genericburger" />
      </svg>
    </div>
  );
}
