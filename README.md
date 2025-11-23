# 🍽️ YumYum Frontend

YumYum Frontend is a modern Next.js application for browsing, searching, and filtering recipes.  
It integrates with the YumYum Backend API, uses React Query for data fetching, Zustand for state management, and Radix for custom dropdowns and popovers.

---

## ✨ Features

- Home page with hero section and pre-fetched recipes (SSR + hydration)
- Search recipes by keyword
- Filter by:
  - Category
  - Ingredient
- Combined global filters (Zustand) + search box
- Custom dropdowns built on **Radix Popover** (scroll-friendly, no scroll lock)
- Responsive filter behavior:
  - Desktop: inline dropdown filters
  - Mobile: toggled filters panel
- Paginated recipe list with smooth scroll reset
- Recipe cards grid with truncated titles/descriptions
- “No results” state with a dedicated component
- Toast notifications (iziToast)
- Form handling and validation with Formik + Yup
- SEO-friendly metadata via `generateMetadata` (Next.js App Router)

---

## 🧱 Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **UI:** React 19, CSS Modules, modern-normalize
- **State management:** Zustand
- **Data fetching & caching:** @tanstack/react-query
- **UI primitives:** Radix UI (Popover + Select, later migrated)
- **Forms & validation:** Formik + Yup
- **Notifications:** iziToast
- **Pagination:** react-paginate

---

## 📦 Key Dependencies

These are the main packages that will be installed via `npm install`:

### Runtime dependencies

| Package                   | Version | Purpose                                                         |
| ------------------------- | ------- | --------------------------------------------------------------- |
| `@radix-ui/react-popover` | ^1.1.15 | Accessible popover primitive used for custom select dropdowns   |
| `@radix-ui/react-select`  | ^2.2.6  | Radix Select (initially used, parts may be replaced by Popover) |
| `@tanstack/react-query`   | ^5.90.7 | Data fetching, caching, and server-state management             |
| `axios`                   | ^1.13.2 | HTTP client for calling the YumYum backend API                  |
| `cookie`                  | ^1.0.2  | Parsing and serializing cookies on the client                   |
| `cookies`                 | ^0.9.1  | Additional cookie utilities (SSR and server-side use)           |
| `formik`                  | ^2.4.9  | Form state management (e.g., auth forms, inputs)                |
| `izitoast`                | ^1.4.0  | Toast notifications (success, errors, info)                     |
| `modern-normalize`        | ^3.0.1  | Opinionated CSS reset for consistent styling                    |
| `next`                    | 16.0.1  | React framework (App Router, routing, SSR, etc.)                |
| `react`                   | 19.2.0  | UI library                                                      |
| `react-dom`               | 19.2.0  | React DOM renderer                                              |
| `react-paginate`          | ^8.3.0  | Pagination UI component for recipes list                        |
| `yup`                     | ^1.7.1  | Schema-based validation (used with Formik)                      |
| `zustand`                 | ^5.0.8  | Lightweight global state (filters store, search store, etc.)    |

### Dev dependencies

| Package                          | Version | Purpose                                              |
| -------------------------------- | ------- | ---------------------------------------------------- |
| `@tanstack/react-query-devtools` | ^5.90.2 | Devtools overlay for React Query debugging           |
| `@types/node`                    | ^20     | TypeScript types for Node.js                         |
| `@types/react`                   | ^19     | TypeScript types for React                           |
| `@types/react-dom`               | ^19     | TypeScript types for ReactDOM                        |
| `babel-plugin-react-compiler`    | 1.0.0   | React Compiler plugin (performance / DX)             |
| `eslint`                         | ^9      | Linting                                              |
| `eslint-config-next`             | 16.0.1  | Next.js ESLint rules                                 |
| `eslint-config-prettier`         | ^10.1.8 | Disable formatting rules that conflict with Prettier |
| `prettier`                       | ^3.6.2  | Code formatter                                       |
| `typescript`                     | ^5      | TypeScript compiler and typings                      |

---

## 📂 Project Structure

Example high-level structure:

```bash
yumyum-frontend/
  app/
    page.tsx
    # other routes
  components/
    Hero/
    RecipesList/
    Filters/
    FiltersForm/
    CustomSelect/
    NoResults/
    Pagination/
    RecipeCard/
    Container/
    # ...
  lib/
    api/
      clientApi.ts      # axios-based API client
    store/
      useFiltersStore.ts
      useSearchStore.ts
    # ...
  public/
    Sprite-new.svg
    hero/
  styles/
    globals.css
  README.md
  package.json
```
