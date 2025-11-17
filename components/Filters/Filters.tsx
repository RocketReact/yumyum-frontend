'use client';

//ToDo:
//! Reset filter do not clear search query

import { useState } from 'react';
import css from './Filters.module.css';
import type { Option } from '@/types/filter';
import { FiltersForm } from '../FiltersForm/FiltersForm';
import { FiltersModal } from '../FiltersModal/FiltersModal';
import { useQuery } from '@tanstack/react-query';
import { getCategories, getIngredients } from '@/lib/api/clientApi';

export default function Filters({ totalRecipes }: { totalRecipes: number }) {
  const { data: categoriesJson, isLoading: catLoading } = useQuery({
    queryKey: ['categories'],
    queryFn: getCategories,
  });

  const { data: ingredientsJson, isLoading: ingLoading } = useQuery({
    queryKey: ['ingredients'],
    queryFn: getIngredients,
  });

  // Map to <option>[]
  const categoriesOptions: Option[] =
    categoriesJson?.map((item) => ({
      value: item.name,
      label: item.name,
    })) ?? [];

  const ingredientsOptions: Option[] =
    ingredientsJson?.map((item) => ({
      value: item._id,
      label: item.name,
    })) ?? [];

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <section className={css.filtersSection}>
      <div className={css.filtersWrapper}>
        <p className={css.totalRecipes}>{totalRecipes} recipes</p>

        {/* mobile toggle */}
        <button
          className={css.filtersToggle}
          type="button"
          onClick={handleToggle}
        >
          <span>Filters</span>
          <svg width="24" height="24">
            {!isOpen ? (
              <use href="/Sprite.svg#icon-Mailfilter" />
            ) : (
              <use href="/Sprite.svg#icon-Notificationserror" />
            )}
          </svg>
        </button>
        {/* desktop inline form */}
        <div className={css.desktopFiltersPanel}>
          <FiltersForm
            categories={categoriesOptions}
            ingredients={ingredientsOptions}
          />
        </div>
      </div>

      {/* mobile modal */}
      <FiltersModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        categories={categoriesOptions}
        ingredients={ingredientsOptions}
      />
    </section>
  );
}
