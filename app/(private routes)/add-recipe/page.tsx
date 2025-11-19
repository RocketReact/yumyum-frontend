import Image from 'next/image';
import css from './page.module.css';
import { RecipeForm } from '@/components/AddRecipeForm/AddRecipeForm';
import Container from '@/components/Container/Container';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Create Recipe',
  description: 'Create a new recipe in YumYum',
  openGraph: {
    title: 'Create Recipe',
    description: 'Create a new recipe in YumYum',
    url: 'http://localhost:3000/add-recipe',
    images: [
      {
        url: '/public/logo.svg',
        width: 1200,
        height: 630,
        alt: 'Create Recipe',
      },
    ],
  },
};

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
