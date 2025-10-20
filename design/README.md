# Design Tokens

This directory contains the Future AI Guide design system tokens in multiple formats.

## Files

- **fg-design-tokens.json** - JSON format compatible with Tokens Studio for Figma
- **fg-design-tokens.css** - CSS custom properties ready for web projects
- **fg-design-tokens.csv** - Tabular format for easy viewing and editing
- **fg-design-tokens.xlsx** - Excel format (generated from CSV, not committed to git)

## Usage

### In CSS
```css
.button {
  background-color: var(--fg-c-primary);
  padding: var(--fg-btn-padding-y) var(--fg-btn-padding-x);
  border-radius: var(--fg-btn-radius);
}
```

### In Figma
Import the JSON file into Tokens Studio for Figma plugin.

## Generating XLSX

To generate the Excel file from CSV:
```bash
npm run convert
```
