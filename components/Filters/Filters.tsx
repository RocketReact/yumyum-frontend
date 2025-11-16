'use client';

import { useState } from 'react';
import Container from '../Container/Container';
import css from './Filters.module.css';
import type { Option } from '@/types/filter';
import { FiltersForm } from '../FiltersForm/FiltersForm';
import { FiltersModal } from '../FiltersModal/FiltersModal';

type FiltersProps = {
  totalRecipes: number;
  categories: Option[];
  ingredients: Option[];
};

export default function Filters({
  totalRecipes,
  categories,
  ingredients,
}: FiltersProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className={css.filtersSection}>
      <Container>
        <div className={css.filtersWrapper}>
          <p className={css.amountRecipes}>{totalRecipes} recipes</p>

          {/* mobile toggle */}
          <button
            className={css.filtersToggle}
            type="button"
            onClick={() => setIsOpen(true)}
          >
            <span>Filters</span>
            <svg width="24" height="24">
              <use href="/Sprite.svg#icon-Mailfilter" />
            </svg>
          </button>
        </div>

        {/* desktop inline form */}
        <div className={css.desktopFiltersPanel}>
          <FiltersForm categories={categories} ingredients={ingredients} />
        </div>
      </Container>

      {/* mobile modal */}
      <FiltersModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        categories={categories}
        ingredients={ingredients}
      />
    </section>
  );
}
