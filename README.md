# Future AI Guide Design System Tokens

A comprehensive, extensible, and ACSS-compatible design token library using the `-fg` prefix for every token. This system supports both light and dark themes, includes responsive breakpoints, and is optimized for UI component reuse, accessibility, and global scalability.

## Overview

This design token system follows Automatic.css (ACSS) principles and BEM naming best practices with a strict `-fg` prefix namespace. It's ideal for use across Figma, Bricks Builder, and advanced UI/UX workflows.

## Token Categories

### 1. Color Tokens (light/dark variants)
- `--fg-c-primary`, `--fg-c-accent`, `--fg-c-text`, `--fg-c-text-muted`, `--fg-c-bg`, `--fg-c-surface`, `--fg-c-border`, `--fg-c-success`, `--fg-c-error`, `--fg-c-warning`
- Includes hover and focus states (e.g., `--fg-c-btn-hover`)
- Usage: UI backgrounds, text, borders, cards, buttons, alerts

### 2. Typography Tokens
- Font families: `--fg-f-family-base`, `--fg-f-family-alt`
- Font sizes: `--fg-f-size-xs` → `--fg-f-size-6xl`
- Weights: `--fg-f-weight-light` to `--fg-f-weight-bold`
- Styles: `--fg-f-style-normal`, `--fg-f-style-italic`
- Line heights: `--fg-lh-tight`, `--fg-lh-base`, `--fg-lh-loose`
- Letter spacing: `--fg-ls-tight`, `--fg-ls-normal`, `--fg-ls-wide`

### 3. Spacing & Sizing Tokens
- `--fg-s-xxs` → `--fg-s-5xl` (consistent modular scale)
- `--fg-p-section`, `--fg-p-card`, `--fg-m-block`, `--fg-gap-grid`
- Units: px/rem (automatic scaling)
- Used for layout, grids, cards, padding, and margin utilities

### 4. Border Radius Tokens
- `--fg-r-xs`, `--fg-r-sm`, `--fg-r-md`, `--fg-r-lg`, `--fg-r-xl`, `--fg-r-2xl`, `--fg-r-full`
- Apply to buttons, cards, inputs, avatars
- Match modern soft-rounded UI trends

### 5. Shadow Tokens
- `--fg-shadow-xs` → `--fg-shadow-2xl`
- Include tokenized box-shadow glow effects (for hover, modals, overlays)
- Used for elevation and futuristic visual depth

### 6. Border Tokens
- Border width: `--fg-bw-thin`, `--fg-bw-base`, `--fg-bw-thick`
- Border style: `--fg-bs-solid`, `--fg-bs-dashed`, `--fg-bs-none`
- Border color (referenced via color tokens)

### 7. Component Tokens
- `--fg-btn-padding-x`, `--fg-btn-padding-y`, `--fg-btn-radius`, `--fg-btn-shadow-hover`
- `--fg-card-padding`, `--fg-card-radius`
- `--fg-input-border`, `--fg-nav-height`
- Apply ACSS var() support and BEM-compatible class patterns

### 8. Breakpoints (Responsive Tokens)
- `--fg-bp-xs`: 480px
- `--fg-bp-sm`: 768px
- `--fg-bp-md`: 1024px
- `--fg-bp-lg`: 1280px
- `--fg-bp-xl`: 1536px

### 9. Utility Tokens
- `--fg-container-max`: 1280px
- `--fg-z-index-nav`: 100
- `--fg-transition-fast`, `--fg-transition-base`, `--fg-easing-standard`

## File Formats

This design system is available in multiple formats:

1. **JSON** (`fg-design-tokens.json`): Compatible with Tokens Studio for Figma
2. **CSS** (`fg-design-tokens.css`): Ready to use in web projects with CSS variables
3. **CSV** (`fg-design-tokens.csv`): Tabular format for easy viewing and editing
4. **XLSX** (`fg-design-tokens.xlsx`): Excel format for stakeholder presentations

## Usage

### In CSS

```css
.button {
  background-color: var(--fg-c-primary);
  padding: var(--fg-btn-padding-y) var(--fg-btn-padding-x);
  border-radius: var(--fg-btn-radius);
  font-family: var(--fg-f-family-base);
  font-size: var(--fg-f-size-base);
  font-weight: var(--fg-f-weight-medium);
  box-shadow: var(--fg-btn-shadow);
  transition: all var(--fg-transition-fast) var(--fg-easing-standard);
}

.button:hover {
  background-color: var(--fg-c-btn-hover);
  box-shadow: var(--fg-btn-shadow-hover);
}
```

### Dark Mode Support

The system automatically supports dark mode through:

1. **Media Query**: Using `@media (prefers-color-scheme: dark)`
2. **Class Toggle**: Using the `.theme-dark` class for manual theme switching

## Converting CSV to XLSX

To convert the CSV file to XLSX format:

1. Install dependencies:
   ```
   npm install
   ```

2. Run the conversion script:
   ```
   npm run convert
   ```

## Integration with Design Tools

- **Figma**: Import the JSON file into Tokens Studio for Figma
- **Bricks Builder**: Use the CSS variables directly in your styles
- **Other Tools**: Import the appropriate format based on your workflow

## License

MIT
