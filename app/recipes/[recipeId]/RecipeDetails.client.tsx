'use client';
import RecipeDetails from '@/components/RecipeDetails/RecipeDetails';
import { getRecipeById } from '@/lib/api/clientApi';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';

const RecipeDetailsClient = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, error } = useQuery({
    queryKey: ['recipe', id],
    queryFn: () => getRecipeById(id),
    refetchOnMount: false,
  });

  return (
    <>
      {data && <RecipeDetails recipe={data} />}
      {isLoading && <p>Loading, please wait...</p>}
      {!data && error && <p>Something went wrong.</p>}
    </>
  );
};

export default RecipeDetailsClient;
