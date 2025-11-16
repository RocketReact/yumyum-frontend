import Hero from '@/components/Hero/Hero';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { SearchParams } from '@/constants';
import { buildUrl, toText } from '@/utils/url';
import { getAllRecipes } from '@/lib/api/clientApi';
import { RecipesListWithData } from '@/components/RecipesList/withRecipesData';

export type SearchParamsMap = Partial<Record<SearchParams, string | string[]>>;

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<SearchParamsMap>;
}) {
  const params = await searchParams;

  const search = params[SearchParams.Search];
  const category = params[SearchParams.Category];
  const ingredient = params[SearchParams.Ingredient];

  const filters: string[] = [];

  if (search) filters.push(`Search: ${toText(search)}`);
  if (category) filters.push(`Category: ${toText(category)}`);
  if (ingredient) filters.push(`Ingredient: ${toText(ingredient)}`);

  const title =
    filters.length > 0
      ? `YumYum Recipes • ${filters.join(' • ')}`
      : `YumYum Recipes`;

  const description =
    filters.length > 0
      ? `Browse YumYum recipes filtered by ${filters.join(', ')}.`
      : `Browse thousands of delicious YumYum recipes — filter by category, ingredient, or keyword.`;

  const url = buildUrl(params);

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      images: [
        {
          url: '/assets/hero-tablet.jpg',
          width: 1200,
          height: 630,
          alt: 'YumYum Recipes',
        },
      ],
    },
  };
}

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<SearchParamsMap>;
}) {
  const parsedSearchParams: Record<string, string | string[]> =
    await searchParams;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['recipes'],
    queryFn: () => {
      return getAllRecipes(parsedSearchParams);
    },
  });

  return (
    <>
      <Hero />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <RecipesListWithData />
      </HydrationBoundary>
    </>
  );
}
