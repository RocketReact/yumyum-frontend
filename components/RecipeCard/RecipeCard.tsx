import Image from 'next/image';
import css from './RecipeCard.module.css';
import Link from 'next/link';
import { Recipe } from '@/types/recipe';

interface RecipeCardProps {
  recipe: Recipe;
}

export default function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <div className={css.cardWrapper}>
      <Image
        src={recipe.thumb}
        alt={recipe.title}
        width={264}
        height={178}
        className={css.img}
      />

      <div className={css.titleWrapper}>
        <h2 className={css.title}>{recipe.title}</h2>
        <div className={css.timeWrapper}>
          <Image
            src="/icons/clock.svg"
            alt="Time"
            width={15}
            height={15}
            className={css.timeIcon}
          />
          <span className={css.recipeTime}>{recipe.time}</span>
        </div>
      </div>

      <div className={css.descriptionWrapper}>
        <p className={css.description}>{recipe.description}</p>
        <p className={css.description}>~{recipe.cals} cals</p>
      </div>

      <div className={css.buttonWrapper}>
        <Link href={'/'} className={css.button}>
          Learn more
        </Link>

        <Image
          src={'/icons/favorites.svg'}
          alt="Favorite"
          width={16}
          height={16}
          className={css.favoriteIcon}
        />
      </div>
    </div>
  );
}
