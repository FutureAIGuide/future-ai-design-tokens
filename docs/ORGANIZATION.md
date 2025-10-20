# Repository Organization Guide

This document explains the organized layout of the Future AI Guide Design Tokens repository.

## Overview

The repository follows a **single organized layout** where design, branding, content, code, infra, and docs live together in a clear, maintainable structure.

## Directory Structure

```
future-ai-design-tokens/
├── design/          # Design tokens in multiple formats
├── branding/        # Brand guidelines and design system docs
├── content/         # Content strategy and structure
├── code/            # Source code and scripts
├── infra/           # Infrastructure and configuration
├── docs/            # General documentation
├── .gitignore       # Git ignore rules
├── package.json     # Node.js project configuration
└── README.md        # Main project documentation
```

## Directory Details

### design/
**Purpose:** Design tokens for use across platforms

**Contains:**
- `fg-design-tokens.json` - Tokens Studio for Figma format
- `fg-design-tokens.css` - CSS custom properties
- `fg-design-tokens.csv` - Source tokens in CSV format
- `fg-design-tokens.xlsx` - Generated Excel format (not committed)
- `README.md` - Usage guide

**Intended for:** Designers, developers, and stakeholders working with design tokens

### branding/
**Purpose:** Brand guidelines and design system documentation

**Contains:**
- `DesignSystem_Bricks_2025.md` - Complete design system specification
- `UI_UX_Rules_and_Prompts.md` - UI/UX principles and guidelines
- `README.md` - Directory overview

**Intended for:** Designers, brand managers, and UX teams

### content/
**Purpose:** Content strategy and website structure planning

**Contains:**
- `Purpose_And_Structure.md` - Website purpose and feature documentation
- `README.md` - Directory overview

**Intended for:** Content strategists, product managers, and stakeholders

### code/
**Purpose:** Source code and utility scripts

**Contains:**
- `csv-to-xlsx.js` - Conversion script for design tokens
- `README.md` - Developer documentation

**Intended for:** Developers and contributors

### infra/
**Purpose:** Infrastructure configuration and project management

**Contains:**
- `export-config.sh` - Export configuration script
- `plugin-list.txt` - WordPress plugin inventory
- `Ultimate_Task_List.xlsx` - Project task tracking
- `README.md` - Infrastructure documentation

**Intended for:** DevOps, system administrators, and project managers

### docs/
**Purpose:** General documentation and guides

**Contains:**
- `README.md` - Documentation directory overview

**Intended for:** All team members and external contributors

## Build & Development

### Install Dependencies
```bash
npm install
```

### Convert Design Tokens
```bash
npm run convert
```

This generates `design/fg-design-tokens.xlsx` from the CSV source.

## Benefits of This Organization

1. **Clear Separation of Concerns**: Each directory has a specific purpose
2. **Easy Navigation**: Team members can quickly find relevant files
3. **Scalability**: New files and features fit naturally into the structure
4. **Maintainability**: Updates are isolated to relevant directories
5. **Collaboration**: Different teams can work in their respective areas
6. **Documentation**: Each directory includes its own README

## File Exclusions

The following are excluded from version control (via `.gitignore`):
- `node_modules/` - NPM dependencies
- `*.xlsx` - Generated Excel files
- Build artifacts and temporary files

## Contributing

When adding new files:
1. Identify the appropriate directory based on the file's purpose
2. Update the directory's README if needed
3. Ensure the main README reflects any structural changes
4. Test that all build scripts still work

## Migration Notes

Files were reorganized from a flat structure to this organized layout. All paths in scripts and configuration files have been updated accordingly.
