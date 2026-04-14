# Redesign Plan: Fone2Cash Frontend

## Objective
Redesign the Fone2Cash frontend to a **Professional Corporate** style, focusing on trust, clarity, and ease of use. The redesign will improve typography, color harmony, layout structure, and mobile responsiveness.

## Design Direction: Professional Corporate
- **Vibe:** Trustworthy, established, clean, and efficient.
- **Color Palette:**
  - **Primary (Navy):** `#0F172A` (Deep, professional base)
  - **Secondary (Slate):** `#334155` (Subtle UI elements)
  - **Accent (Trust Blue):** `#0284C7` (Primary CTA and highlights)
  - **Background (Soft White/Grey):** `#F8FAFC`
  - **Text (Slate 900):** `#0F172A` for headings, `#334155` for body.
- **Typography:**
  - **Headings:** `Poppins` (Bold, geometric, modern)
  - **Body:** `Inter` (Highly legible, professional)

## Key Changes

### 1. Typography & Colors
- Replace current dark-gradient theme with a clean light theme (Professional Corporate default).
- Implement the Navy/Blue/Slate color palette.
- Standardize font sizes and line heights (1.6 for body text).

### 2. Layout & Structure
- **Hero Section:** More spacious, with a clear value proposition and a prominent "Get a Quote" CTA.
- **How It Works:** Use a clean grid with well-defined cards and professional icons.
- **Trust Elements:** Add sections for testimonials, "Why Choose Us", and security badges.
- **Footer:** A more robust, multi-column footer with quick links and company info.

### 3. Animations & Interactions
- **Page Transitions:** Subtle fade-in animations on scroll.
- **Button Effects:** Smooth transitions on hover (color shift, slight scale).
- **Navigation:** Sticky header with a backdrop blur and a thin border for a premium feel.

### 4. Mobile Responsiveness
- Ensure all sections stack correctly on small screens.
- Implement a mobile-friendly menu (hamburger menu if needed, though simple nav might suffice).
- Optimize touch targets (min 44x44px).

## Implementation Strategy
1. **Global Styles:** Update `styles.css` with new variables, typography, and base styles.
2. **Component Updates:**
   - Redesign the Header and Footer components.
   - Refactor the Hero and "How It Works" sections.
3. **Page Updates:** Apply the new design language across `index.html`, `sell.html`, `home.html`, etc.
4. **Interactions:** Add CSS transitions and small JS snippets for animations.
5. **Validation:** Test on various screen sizes and ensure accessibility (contrast, labels).

## Next Steps
- [ ] Update `styles.css` with the new design tokens.
- [ ] Refactor `index.html` structure.
- [ ] Apply changes to other pages (`sell.html`, `about.html`, etc.).
