# Design System - Bricks Builder Tokenized

Absolutely! Here’s your prompt refined specifically for “Future AI Guide”, using the fg- prefix for all custom tokens, and designed for use with OxyProps inside Bricks Builder.

You are a world-class web designer and token system architect, specializing in scalable, maintainable websites built with Bricks Builder and the OxyProps design token framework. You have been hired to create the complete, future-proof design system for “Future AI Guide”—the internet’s most comprehensive AI tools and resource directory.

Your job:

Build a tokenized design system leveraging OxyProps, but use the prefix fg- for all custom tokens to ensure clear namespace separation and future compatibility.

The design system should be: scalable, accessible, visually futuristic (dark-mode by default with neon orange accents), and perfectly suited for a large, dynamic directory/resource platform.

For each section, provide:

OxyProps token references and custom fg- tokens (e.g., --fg-c-primary, --op-c-bg, --fg-f-size-h1)

Usage guidelines for every token category

Bricks Builder–specific implementation tips

## 1. Website Overview

$website_description

(Describe “Future AI Guide”—the world’s premier AI tools/resource hub for enthusiasts, professionals, and businesses. Emphasize a dark, high-tech, neon-accented aesthetic, seamless navigation, and comprehensive content.)

## 2. Design System Objectives

$design_system_goals

(Priorities: Consistency, scalability, maintainability, accessibility, light/dark mode, rapid prototyping, dynamic content, and strong brand identity.)

## 3. Color Palette (OxyProps + fg- Tokens)

$color_palette_tokens

List all core colors (primary, secondary, accent, backgrounds, surfaces, borders, text) as OxyProps and custom fg- tokens.

Example:

--fg-c-primary: #FF8800;

--fg-c-accent: #AE0001;

--fg-c-bg: #111318;

--fg-c-bg-alt: #191B21;

--fg-c-surface: #23242A;

--fg-c-text: #F4F4F7;

--fg-c-text-muted: #9496A3;

--fg-c-border: #24252E;

--fg-c-success: #37FF8B;

--fg-c-warning: #FFC700;

--fg-c-error: #FF4060;

--op-c-neutral-900: #111318;



Include both light and dark mode tokens as needed.

### 3a. Color Usage Guidelines

$color_usage_guidelines

(Describe use for each color—backgrounds, text, buttons, tags, links, hover/focus states, navigation, cards, etc. Ensure sufficient contrast and highlight how neon accent colors are used for calls-to-action and highlights.)

## 4. Typography Tokens (OxyProps + fg-)

$typography_tokens

Reference OxyProps and custom fg- font tokens:

Font families (preferably a futuristic, readable sans-serif), weights, responsive font sizes, line heights, letter spacing.

Example:

--fg-f-family-base: 'Inter', 'Segoe UI', 'Arial', sans-serif;

--fg-f-size-h1: 2.5rem;

--fg-f-size-h2: 2rem;

--fg-f-size-h3: 1.5rem;

--fg-f-size-base: 1rem;

--fg-f-size-small: 0.875rem;

--fg-f-weight-bold: 700;

--fg-f-weight-medium: 500;

--fg-f-weight-regular: 400;



Include tokens for headings, body, nav, captions, UI elements.

### 4a. Typography Usage Guidelines

$typography_usage_guidelines

(Specify which tokens are used for main titles, tool names, descriptions, footers, taglines, buttons, navigation, etc. Emphasize clear hierarchy, readability, and modern/futuristic tone.)

## 5. Spacing & Sizing Tokens (OxyProps + fg-)

$spacing_tokens

Use a modular scale, leveraging OxyProps and custom fg- spacing tokens:

Example:

--fg-s-xxs: 2px;

--fg-s-xs: 4px;

--fg-s-sm: 8px;

--fg-s-md: 16px;

--fg-s-lg: 32px;

--fg-s-xl: 64px;

--fg-container-max: 1280px;



Include container widths, section paddings, card gaps, etc.

### 5a. Spacing Usage Guidelines

$spacing_usage_guidelines

(Explain how spacing tokens create structure—use for section spacing, padding, cards, grids, lists, nav, etc. Maintain rhythm and alignment.)

## 6. Border Radius Tokens (OxyProps + fg-)

$border_radius_tokens

Provide OxyProps and fg- border radius tokens for different components:

Example:

--fg-r-xs: 4px;

--fg-r-sm: 8px;

--fg-r-md: 16px;

--fg-r-full: 999px;



Specify for buttons, cards, badges, avatars, inputs.

### 6a. Border Radius Usage Guidelines

$border_radius_usage_guidelines

(Explain which tokens to use for which elements—emphasize subtle roundness for modern feel, larger radii for avatars/buttons.)

## 7. Shadow & Elevation Tokens (OxyProps + fg-)

$shadow_tokens

Reference OxyProps and add custom tokens for shadows/elevations:

Example:

--fg-shadow-xs: 0 1px 2px rgba(0,0,0,0.08);

--fg-shadow-sm: 0 2px 8px rgba(20,20,40,0.15);

--fg-shadow-lg: 0 8px 24px rgba(0,0,0,0.20);

--op-elevation-2: 0 4px 16px rgba(0,0,0,0.10);

### 7a. Shadow Usage Guidelines

$shadow_usage_guidelines

(State where to use for cards, menus, sticky nav, modals—aim for a “floating,” futuristic look but avoid clutter.)

## 8. Breakpoint Tokens (OxyProps + fg-)

$breakpoint_tokens

List all breakpoints for responsive design using OxyProps and/or custom fg- tokens:

Example:

--fg-bp-xs: 480px;

--fg-bp-sm: 768px;

--fg-bp-md: 1024px;

--fg-bp-lg: 1280px;

--fg-bp-xl: 1536px;

--op-bp-md: 768px;

### 8a. Breakpoint Usage Guidelines

$breakpoint_usage_guidelines

(Explain how to use tokens for fluid responsive layouts in Bricks, including font scaling, padding, grid columns, menu breakpoints, etc.)

## 9. Accessibility & Contrast Guidelines

$accessibility_guidelines

Specify how your token system ensures WCAG AA/AAA contrast and accessibility, especially for neon-on-dark.

Recommend minimum sizes, focus states, keyboard navigation.

Highlight how to use fg- tokens to maintain accessibility in dynamic UIs.

## 10. Example Components (Using Tokens)

$component_examples

Provide CSS or Bricks class examples for buttons, cards, tool listings, nav, and forms—using only OxyProps and fg- tokens (e.g., background: var(--fg-c-surface); color: var(--fg-c-primary); border-radius: var(--fg-r-md);)

Show how to assign tokens in Bricks Builder’s custom CSS, classes, and style panels.

## 11. Implementation Notes for Bricks Builder + OxyProps (Future AI Guide)

$implementation_notes

Step-by-step:

How to load/import OxyProps in Bricks (custom code, plugin, etc.).

Where and how to define and register custom fg- tokens (theme custom code, child theme, or OxyProps custom config).

How to reference tokens in Bricks classes, components, and global styles.

Best practices for making reusable, scalable Bricks templates and elements with tokens for easy updates.

## 12. (Optional) Advanced:

$advanced_tips

How to sync or extend OxyProps with future “Future AI Guide” design requirements (e.g., new color schemes, branding updates, advanced theme switching, etc.).

Pro tips for using tokens with JetEngine, JetSmartFilters, and custom dynamic content.

Your output must be detailed, actionable, and ready for direct implementation in Bricks Builder for “Future AI Guide.” Every design token should use OxyProps conventions or a clearly-namespaced fg- prefix for scalability.

### The challenge:

Generate a world-class, OxyProps- and fg--powered design token system for the “Future AI Guide”—a futuristic, neon-accented, dark-themed AI resource platform. Your system must be elegant, accessible, scalable, and optimized for Bricks Builder and rapid growth.

Let me know if you want a complete output/example for “Future AI Guide” using this prompt!

# RESOURCES

- Design System Tokenizer

- Oxyprops for Bricks Builder Docs

- Bricks Ultimate

- NextBricks (BricksCore)

- Winden

- VSC Coding Agent

`

