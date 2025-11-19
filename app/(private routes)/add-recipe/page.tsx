import Image from 'next/image';
import css from './page.module.css';
import { RecipeForm } from '@/components/AddRecipeForm/AddRecipeForm';
import Container from '@/components/Container/Container';

export default function AddRecipe() {
  return (
    <Container>
      <div className={css.addRecipeMain}>
        <div className={css.addRecipeForm}>
          <RecipeForm />
        </div>
      </div>
    </Container>
  );
}
