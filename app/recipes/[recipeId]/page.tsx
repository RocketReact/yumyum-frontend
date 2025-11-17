import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { getRecipeById } from '@/lib/api/clientApi';
import RecipeDetailsClient from './RecipeDetails.client';

interface RecipeDetailsProps {
  params: Promise<{ id: string }>;
}

// export const generateMetadata = async ({
//   params,
// }: RecipeDetailsProps): Promise<Metadata> => {
//   const { id } = await params;
//   const note = await fetchNoteById(id);
//   return {
//     title: note.title,
//     description: note.content.slice(0, 15) + '..',
//     openGraph: {
//       title: note.title,
//       description: note.content.slice(0, 15) + '..',
//       url: `https://09-auth-five-theta.vercel.app/notes/${id}`,
//       images: [
//         {
//           url: 'https://ac.goit.global/fullstack/react/notehub-og-meta.jpg',
//           width: 1200,
//           height: 630,
//           alt: note.title,
//         },
//       ],
//     },
//   };
// };

const RecipeDetailsPage = async ({ params }: RecipeDetailsProps) => {
  const { id } = await params;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['recipe', id],
    queryFn: () => getRecipeById(id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <RecipeDetailsClient />
    </HydrationBoundary>
  );
};

export default RecipeDetailsPage;
