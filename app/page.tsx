import Image from 'next/image';
import styles from './page.module.css';
import RecipesList from '@/components/RecipesList/RecipesList';

export default function Home() {
  return (
    <>
      <div className={styles.page}>Main page</div>
      <RecipesList />
    </>
  );
}
