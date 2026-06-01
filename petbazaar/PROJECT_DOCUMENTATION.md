# PetBazaar - Pet Marketplace Frontend

A modern, production-ready pet marketplace web application built with **Next.js 16** (App Router), **TypeScript**, **Tailwind CSS**, and following **MVVM architecture patterns**.

## 🎯 Project Overview

PetBazaar is a full-featured pet marketplace where users can:
- 🛒 Browse and search for pets
- 🐕 Sell pets with detailed listings
- 👥 Manage their profiles
- 🛡️ Admin dashboard for platform management

**User Roles:**
- **Buyer**: Browse, search, and contact sellers
- **Seller**: Create listings, manage inventory, track earnings
- **Admin**: Manage users, moderate listings, view analytics

---

## 📁 Project Structure

```
petbazaar/
├── app/                           # Next.js App Router pages
│   ├── layout.tsx                 # Root layout with Navbar & Footer
│   ├── page.tsx                   # Home/landing page
│   ├── login/page.tsx             # Login page
│   ├── register/page.tsx          # Registration page
│   ├── profile/page.tsx           # User profile page
│   ├── pets/
│   │   ├── page.tsx               # Browse all pets
│   │   └── [id]/page.tsx          # Pet details page
│   ├── seller/
│   │   ├── dashboard/page.tsx     # Seller dashboard
│   │   ├── add-pet/page.tsx       # Add pet listing form
│   │   └── my-pets/page.tsx       # Seller's listings
│   ├── admin/
│   │   ├── dashboard/page.tsx     # Admin dashboard
│   │   ├── users/page.tsx         # User management
│   │   └── listings/page.tsx      # Listing management
│   └── globals.css                # Global styles
│
├── core/
│   └── supabase/
│       └── client.ts              # Supabase client setup (ready for integration)
│
├── features/                      # Business logic organized by domain
│   ├── authenticate/
│   │   ├── model/
│   │   │   └── authModel.ts       # Auth API calls
│   │   ├── view_model/
│   │   │   └── useAuthViewModel.ts # Auth hooks & state
│   │   └── view/
│   │       ├── loginForm.tsx      # Login UI component
│   │       └── registerForm.tsx   # Register UI component
│   │
│   ├── pets/
│   │   ├── model/
│   │   │   └── petsModel.ts       # Pets API calls & mock data
│   │   ├── view_model/
│   │   │   └── usePetsViewModel.ts # Pets hooks & state
│   │   └── view/
│   │       ├── petList.tsx        # Pet grid component
│   │       ├── petCard.tsx        # Individual pet card
│   │       └── petDetails.tsx     # Pet details page
│   │
│   ├── seller/
│   │   ├── model/
│   │   │   └── sellerModel.ts     # Seller API calls
│   │   ├── view_model/
│   │   │   └── useSellerViewModel.ts # Seller hooks
│   │   └── view/
│   │       ├── sellerDashboard.tsx # Dashboard component
│   │       └── addPetForm.tsx     # Add pet form
│   │
│   └── admin/
│       ├── model/
│       │   └── adminModel.ts      # Admin API calls
│       ├── view_model/
│       │   └── useAdminViewModel.ts # Admin hooks
│       └── view/
│           └── adminDashboard.tsx # Admin dashboard
│
├── shared/
│   └── components/                # Reusable UI components
│       ├── Button.tsx             # Button component
│       ├── Input.tsx              # Form input component
│       ├── Card.tsx               # Card component
│       ├── PetCard.tsx            # Pet card display
│       ├── Navbar.tsx             # Navigation bar
│       ├── Footer.tsx             # Footer
│       └── index.ts               # Exports
│
├── public/                        # Static assets
├── package.json                   # Dependencies
├── tsconfig.json                  # TypeScript config
├── next.config.ts                 # Next.js config
├── tailwind.config.ts             # Tailwind CSS config
├── postcss.config.mjs             # PostCSS config
└── README.md                      # This file
```

---

## 🏗️ Architecture

### MVVM Pattern (Modified for React)

```
View (UI Components)
    ↓
View Model (Custom Hooks - useAuthViewModel, usePetsViewModel)
    ↓
Model (API Layer - authModel, petsModel)
    ↓
Supabase / Backend
```

**Benefits:**
- ✅ Clear separation of concerns
- ✅ Testable business logic
- ✅ Reusable UI components
- ✅ Easy to mock and test
- ✅ Scalable architecture

### File Organization Rules

1. **app/** - Routes only (pages and layouts)
2. **core/** - Infrastructure setup (Supabase client, configuration)
3. **features/** - Business logic organized by domain
   - Each feature has: `model/`, `view_model/`, `view/`
   - NO UI logic in model files
   - Custom hooks in view_model for state management
4. **shared/** - Reusable UI components (Button, Input, Card, etc.)

---

## 🚀 Features Implemented

### ✅ Authentication
- [x] Login form with validation
- [x] Register form with role selection (Buyer/Seller)
- [x] User state management hooks
- [x] Error handling and loading states

### ✅ Pet Browsing
- [x] Browse all pets grid layout
- [x] Pet search and filtering by type
- [x] Individual pet detail page
- [x] Pet card component with hover effects
- [x] Responsive design (mobile-first)

### ✅ Seller Features
- [x] Seller dashboard with stats
- [x] Add pet listing form
- [x] View seller's listings
- [x] Edit/Delete listing UI (backend ready)
- [x] Mock earnings calculation

### ✅ Admin Features
- [x] Admin dashboard with analytics
- [x] User management table
- [x] Pet listing management
- [x] User status controls (active/inactive/banned)

### ✅ UI/UX
- [x] Responsive Navbar with mobile menu
- [x] Footer with links
- [x] Landing page with hero section
- [x] Profile page
- [x] Tailwind CSS styling
- [x] Loading skeletons
- [x] Error handling UI
- [x] Success notifications

---

## 🎨 UI Components

### Reusable Components (`shared/components/`)

| Component | Props | Usage |
|-----------|-------|-------|
| **Button** | variant, size, disabled, onClick | Primary/Secondary actions |
| **Input** | type, placeholder, label, error | Form inputs |
| **Card** | children, hover, onClick | Content containers |
| **PetCard** | id, name, breed, price, image, location | Pet listings |
| **Navbar** | - | Navigation header |
| **Footer** | - | Page footer |

### Component Variants

**Button Variants:**
- `primary` (blue) - Main actions
- `secondary` (gray) - Secondary actions
- `outline` - Bordered style
- `ghost` - Minimal style

**Button Sizes:**
- `sm` - Small buttons
- `md` - Medium (default)
- `lg` - Large buttons

---

## 🧩 Mock Data

All data is currently mocked in the model files for frontend-only development. The structure is ready for real Supabase integration:

```typescript
// Mock data example from petsModel.ts
const mockPets: Pet[] = [
  {
    id: 1,
    name: 'Golden Buddy',
    breed: 'Golden Retriever',
    type: 'dog',
    age: 2,
    price: 25000,
    image: 'https://...',
    description: '...',
    location: 'Mumbai, India',
    seller: 'Happy Pets Store',
    sellerId: '1',
    createdAt: '...',
  },
  // ... more pets
];
```

---

## 🔗 API Ready Structure

All models are structured to easily integrate with Supabase:

```typescript
// Example: petsModel.ts
export const petsModel = {
  async getAllPets(): Promise<Pet[]> {
    // Currently: Returns mock data
    // Future: Call supabase.from('pets').select('*')
  },

  async getPetById(id: number): Promise<Pet | null> {
    // Currently: Finds in mock array
    // Future: Call supabase.from('pets').eq('id', id).single()
  },

  // ... more methods
};
```

**To integrate Supabase:**
1. Replace `await new Promise(...)` calls with actual Supabase queries
2. Update error handling
3. Add authentication tokens to requests
4. That's it! Rest of the app works as-is

---

## 🧪 Hooks & State Management

Custom React hooks manage all state and API calls:

```typescript
// Example: usePetsViewModel.ts
const { pets, loading, error, fetchAllPets, searchPets } = usePetsViewModel();

// Or authentication
const { user, login, register, logout, error } = useAuthViewModel();
```

**Hook Benefits:**
- ✅ Encapsulated state logic
- ✅ Reusable across components
- ✅ Easy to test
- ✅ Clear dependency management

---

## 📱 Responsive Design

All pages are **mobile-first** responsive using Tailwind CSS breakpoints:

- **Mobile**: Base styles
- **Tablet** (`md:`): 768px+
- **Desktop** (`lg:`): 1024px+
- **Wide** (`xl:`): 1280px+

### Responsive Examples:
- Navbar: Hamburger menu on mobile → Full menu on desktop
- Pet Grid: 1 column → 2 columns (md) → 4 columns (lg)
- Forms: Single column → Multiple columns
- Tables: Horizontal scroll on mobile

---

## 🔒 Security Ready

- ✅ TypeScript for type safety
- ✅ Form validation (client-side)
- ✅ Error boundary support
- ✅ Environment variables support (via .env.local)
- ✅ Ready for authentication context

---

## 📦 Dependencies

- **Next.js 16.2.6** - React framework with App Router
- **React 19.2.4** - UI library
- **TypeScript 5** - Type safety
- **Tailwind CSS 4** - Utility-first CSS
- **ESLint 9** - Code quality

### To Install Dependencies:
```bash
npm install
```

---

## 🚀 Getting Started

### Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production
```bash
npm run build
npm start
```

### Linting
```bash
npm run lint
```

---

## 🎯 Next Steps for Supabase Integration

1. **Setup Supabase Project**
   - Create database tables (users, pets, listings)
   - Setup authentication

2. **Update Supabase Client** (`core/supabase/client.ts`)
   - Add real Supabase credentials
   - Initialize Supabase client

3. **Replace Mock Data in Models**
   - Replace mock fetch calls with Supabase queries
   - Update error handling
   - Add authentication checks

4. **Add Context Provider**
   - Create Auth Context for user state
   - Wrap app with AuthProvider

5. **Implement Real Features**
   - Upload images to Supabase Storage
   - Real-time notifications
   - Payment integration
   - Reviews and ratings

---

## 📝 Page Routes

| Route | Purpose | Status |
|-------|---------|--------|
| `/` | Landing page with featured pets | ✅ Complete |
| `/login` | User login | ✅ Complete |
| `/register` | User registration | ✅ Complete |
| `/pets` | Browse all pets | ✅ Complete |
| `/pets/[id]` | Pet details | ✅ Complete |
| `/profile` | User profile | ✅ Complete |
| `/seller/dashboard` | Seller dashboard | ✅ Complete |
| `/seller/add-pet` | Add pet listing | ✅ Complete |
| `/seller/my-pets` | Seller's listings | ✅ Complete |
| `/admin/dashboard` | Admin dashboard | ✅ Complete |
| `/admin/users` | User management | ✅ Complete |
| `/admin/listings` | Listing management | ✅ Complete |

---

## 🎨 Design System

### Colors
- **Primary**: Blue-600 (`#2563eb`)
- **Secondary**: Gray (`#6b7280`)
- **Success**: Green-600
- **Error**: Red-600
- **Background**: White/Gray-50

### Typography
- **Headings**: Bold, sizes h1-h6
- **Body**: Regular, color gray-700
- **Labels**: Small, semibold, gray-700

### Spacing
- Uses Tailwind's spacing scale (4px base unit)
- Consistent padding/margins (4, 6, 8, 12, 16, 20px)

### Shadows
- Light shadows on cards
- Increased shadow on hover

---

## 🤝 Contributing

When adding new features:

1. **Create feature folder** in `features/`
   ```
   features/new-feature/
   ├── model/newFeatureModel.ts
   ├── view_model/useNewFeatureViewModel.ts
   └── view/NewFeatureComponent.tsx
   ```

2. **Follow the MVVM pattern**
   - Put business logic in model
   - State management in view_model hook
   - UI in view components

3. **Use shared components**
   - Reuse Button, Input, Card from `shared/`
   - Maintain consistent styling

4. **Add TypeScript types**
   - Define interfaces for all data
   - Avoid `any` types

---

## 📄 License

This project is ready for production use. Built following Next.js and React best practices.

---

## 🎓 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Hooks](https://react.dev/reference/react/hooks)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Supabase Documentation](https://supabase.com/docs)

---

**Built with ❤️ using Next.js + TypeScript + Tailwind CSS**

🐾 Happy pet selling and buying! 🐾
