# HeroUI Complete Documentation

This comprehensive guide covers all HeroUI customization options and components.

## Table of Contents

- [🎨 Customization](#customization)
  - [Theme](#theme)
  - [Layout](#layout)
  - [Colors](#colors)
  - [Customize Theme](#customize-theme)
  - [Create Theme](#create-theme)
  - [Dark Mode](#dark-mode)
  - [Override Styles](#override-styles)
  - [Custom Variants](#custom-variants)

- [✨ Components](#components)
  - [Accordion](#accordion)
  - [Autocomplete](#autocomplete)
  - [Alert](#alert)
  - [Avatar](#avatar)
  - [Badge](#badge)
  - [Breadcrumbs](#breadcrumbs)
  - [Button](#button)
  - [Calendar](#calendar)
  - [Card](#card)
  - [Checkbox](#checkbox)
  - [Checkbox Group](#checkbox-group)
  - [Chip](#chip)
  - [Circular Progress](#circular-progress)
  - [Code](#code)
  - [Date Input](#date-input)
  - [Date Picker](#date-picker)
  - [Date Range Picker](#date-range-picker)
  - [Divider](#divider)
  - [Dropdown](#dropdown)
  - [Drawer](#drawer)
  - [Form](#form)
  - [Image](#image)
  - [Input](#input)
  - [Input OTP](#input-otp)
  - [Kbd](#kbd)
  - [Link](#link)
  - [Listbox](#listbox)
  - [Modal](#modal)
  - [Navbar](#navbar)
  - [Number Input](#number-input)
  - [Pagination](#pagination)
  - [Popover](#popover)
  - [Progress](#progress)
  - [Radio Group](#radio-group)
  - [Range Calendar](#range-calendar)
  - [Scroll Shadow](#scroll-shadow)
  - [Select](#select)
  - [Skeleton](#skeleton)
  - [Slider](#slider)
  - [Snippet](#snippet)
  - [Spacer](#spacer)
  - [Spinner](#spinner)
  - [Switch](#switch)
  - [Table](#table)
  - [Tabs](#tabs)
  - [Toast](#toast)
  - [Textarea](#textarea)
  - [Time Input](#time-input)
  - [Tooltip](#tooltip)
  - [User](#user)

---

# 🎨 Customization

## Theme

**What it is:**
Theming in HeroUI allows you to maintain a consistent look and feel across your application. HeroUI provides theme customization through a TailwindCSS plugin based on tw-colors, enabling you to easily customize your application's appearance.

**What it does:**
- Provides predefined sets of colors and layout attributes
- Ensures visual consistency across your application
- Simplifies managing and updating your app's appearance

**How to use:**

### Setup
Add the heroui plugin to your `tailwind.config.js` file:

```javascript
// tailwind.config.js
const { heroui } = require("@heroui/react");

module.exports = {
  plugins: [heroui()],
}
```

### Usage
Apply theme classes to your root element in `main.jsx` or `main.tsx`:

```jsx
<html className="light text-foreground bg-background">
  <body>{children}</body>
</html>
```

Available theme classes:
- `light` - for the light theme
- `dark` - for the dark theme
- `text-foreground` - sets the text color
- `bg-background` - sets the background color

### Nested Themes
HeroUI supports nested themes, allowing different themes for different sections:

```jsx
<div className="light">
  <Button>Light Button</Button>
  <div className="dark">
    <Button>Dark Button</Button>
  </div>
</div>
```

### Theme-based Variants
Apply TailwindCSS styles based on the active theme:

```jsx
<div className="light:bg-white dark:bg-black">
  Content adapts to theme
</div>
```

### API Reference

| Attribute | Type | Description | Default |
|-----------|------|-------------|---------|
| `prefix` | string | The prefix for the CSS variables | `heroui` |
| `addCommonColors` | boolean | If true, common heroui colors replace TailwindCSS defaults | `false` |
| `defaultTheme` | light \| dark | The default theme to use | `light` |
| `defaultExtendTheme` | light \| dark | The default theme to extend | `light` |
| `layout` | LayoutTheme | The layout definitions | - |
| `themes` | ConfigTheme | The theme definitions | - |

---

## Layout

**What it is:**
Layout configuration in HeroUI defines spacing, sizing, and structural properties that can be customized globally across your application.

**What it does:**
- Controls default spacing values (padding, margins)
- Defines breakpoints for responsive design
- Sets font sizes and line heights
- Manages border radius values
- Configures opacity levels

**How to use:**

### Setup
Configure layout in your `tailwind.config.js`:

```javascript
const { heroui } = require("@heroui/react");

module.exports = {
  plugins: [
    heroui({
      layout: {
        fontSize: {
          tiny: "0.75rem",
          small: "0.875rem",
          medium: "1rem",
          large: "1.125rem",
        },
        lineHeight: {
          tiny: "1rem",
          small: "1.25rem",
          medium: "1.5rem",
          large: "1.75rem",
        },
        radius: {
          small: "8px",
          medium: "12px",
          large: "14px",
        },
        borderWidth: {
          small: "1px",
          medium: "2px",
          large: "3px",
        },
      },
    }),
  ],
}
```

### Available Layout Properties
- **fontSize**: Text size presets
- **lineHeight**: Line height values
- **radius**: Border radius values
- **borderWidth**: Border thickness options
- **disabledOpacity**: Opacity for disabled elements
- **dividerWeight**: Thickness of divider elements
- **hoverOpacity**: Opacity on hover state

---

## Colors

**What it is:**
HeroUI provides a comprehensive color system that integrates seamlessly with TailwindCSS, offering semantic color tokens for consistent theming.

**What it does:**
- Provides semantic color tokens (primary, secondary, success, warning, danger)
- Supports color scales from 50 to 900
- Enables easy color customization per theme
- Offers foreground color variants for accessibility

**How to use:**

### Default Color Tokens
HeroUI provides these semantic colors:
- **primary**: Main brand color
- **secondary**: Secondary actions
- **success**: Successful operations
- **warning**: Warning states
- **danger**: Error states
- **default**: Default elements
- **foreground**: Text colors
- **background**: Background colors

### Using Colors

```jsx
// As component props
<Button color="primary">Primary Button</Button>
<Button color="secondary">Secondary Button</Button>
<Button color="success">Success Button</Button>

// As Tailwind classes
<div className="bg-primary text-primary-foreground">
  Primary background with contrasting text
</div>
```

### Custom Colors
Define custom colors in your theme:

```javascript
const { heroui } = require("@heroui/react");

module.exports = {
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            primary: {
              50: "#e6f1fe",
              100: "#cce3fd",
              200: "#99c7fb",
              300: "#66aaf9",
              400: "#338ef7",
              500: "#006FEE",
              600: "#005bc4",
              700: "#004493",
              800: "#002e62",
              900: "#001731",
              DEFAULT: "#006FEE",
              foreground: "#ffffff",
            },
          },
        },
      },
    }),
  ],
}
```

### Color Scale Usage

```jsx
<div className="bg-primary-100">Light primary</div>
<div className="bg-primary-500">Medium primary</div>
<div className="bg-primary-900">Dark primary</div>
```

---

## Customize Theme

**What it is:**
Theme customization allows you to modify existing HeroUI themes to match your brand identity while maintaining the system's design consistency.

**What it does:**
- Extends existing light or dark themes
- Allows selective color overrides
- Maintains theme structure while adding custom values
- Enables brand-specific styling

**How to use:**

### Extending Default Themes

```javascript
const { heroui } = require("@heroui/react");

module.exports = {
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: "#FF5722",
              foreground: "#ffffff",
            },
            secondary: {
              DEFAULT: "#9C27B0",
              foreground: "#ffffff",
            },
          },
        },
        dark: {
          colors: {
            primary: {
              DEFAULT: "#FF7043",
              foreground: "#000000",
            },
          },
        },
      },
    }),
  ],
}
```

### Selective Customization
You only need to override the properties you want to change:

```javascript
heroui({
  themes: {
    light: {
      colors: {
        background: "#f5f5f5",
        foreground: "#11181C",
        primary: {
          DEFAULT: "#006FEE",
          foreground: "#ffffff",
        },
      },
    },
  },
})
```

### Using Custom Properties
After customizing, use your colors normally:

```jsx
<Button color="primary">Uses your custom primary color</Button>
<Card className="bg-background">Uses your custom background</Card>
```

---

## Create Theme

**What it is:**
Create entirely new custom themes from scratch, giving you complete control over your application's appearance.

**What it does:**
- Creates brand-new theme configurations
- Supports multiple custom themes
- Allows complete color and layout control
- Enables theme switching between custom themes

**How to use:**

### Creating a New Theme

```javascript
const { heroui } = require("@heroui/react");

module.exports = {
  plugins: [
    heroui({
      themes: {
        "purple-dark": {
          extend: "dark",
          colors: {
            background: "#0D001A",
            foreground: "#ffffff",
            primary: {
              50: "#3B096C",
              100: "#520F83",
              200: "#7318A2",
              300: "#9823C2",
              400: "#c031e2",
              500: "#DD62ED",
              600: "#F182F6",
              700: "#FCADF9",
              800: "#FDD5F9",
              900: "#FEECFE",
              DEFAULT: "#DD62ED",
              foreground: "#ffffff",
            },
            focus: "#F182F6",
          },
        },
        "blue-light": {
          extend: "light",
          colors: {
            background: "#E6F7FF",
            foreground: "#001529",
            primary: {
              DEFAULT: "#1890FF",
              foreground: "#ffffff",
            },
            secondary: {
              DEFAULT: "#13C2C2",
              foreground: "#ffffff",
            },
          },
        },
      },
    }),
  ],
}
```

### Using Custom Themes

```jsx
<html className="purple-dark">
  <body>{children}</body>
</html>
```

### Complete Theme Structure

```javascript
{
  extend: "dark", // or "light"
  layout: {
    fontSize: { /* custom sizes */ },
    radius: { /* custom radius */ },
  },
  colors: {
    background: "#000",
    foreground: "#fff",
    primary: { /* color scale */ },
    secondary: { /* color scale */ },
    success: { /* color scale */ },
    warning: { /* color scale */ },
    danger: { /* color scale */ },
    default: { /* color scale */ },
    // ... other semantic colors
  },
}
```

---

## Dark Mode

**What it is:**
Dark mode support in HeroUI provides a seamless way to implement and toggle between light and dark themes in your application.

**What it does:**
- Provides built-in dark theme
- Enables theme switching
- Supports system preference detection
- Allows custom dark theme styling

**How to use:**

### Basic Dark Mode Setup

```jsx
// Set dark class on root element
<html className="dark">
  <body>{children}</body>
</html>
```

### Theme Toggle with next-themes

```bash
npm install next-themes
```

```jsx
// app/providers.tsx
import { ThemeProvider } from 'next-themes'

export function Providers({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      {children}
    </ThemeProvider>
  )
}
```

### Theme Switcher Component

```jsx
import { useTheme } from 'next-themes'
import { Switch } from '@heroui/react'

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()

  return (
    <Switch
      isSelected={theme === 'dark'}
      onValueChange={(checked) => setTheme(checked ? 'dark' : 'light')}
    >
      Dark Mode
    </Switch>
  )
}
```

### System Preference Detection

```jsx
<ThemeProvider attribute="class" defaultTheme="system">
  {children}
</ThemeProvider>
```

### Dark Mode Variants
Apply styles specific to dark mode:

```jsx
<div className="bg-white dark:bg-black text-black dark:text-white">
  Content that adapts to theme
</div>
```

### Customizing Dark Theme

```javascript
heroui({
  themes: {
    dark: {
      colors: {
        background: "#000000",
        foreground: "#ECEDEE",
        primary: {
          DEFAULT: "#006FEE",
          foreground: "#ffffff",
        },
      },
    },
  },
})
```

---

## Override Styles

**What it is:**
Style overriding in HeroUI allows you to customize component styles beyond default props, giving you fine-grained control over appearance.

**What it does:**
- Overrides default component styles
- Provides multiple override methods
- Supports Tailwind classes and CSS-in-JS
- Enables component-specific customization

**How to use:**

### Using className Prop

```jsx
<Button className="bg-gradient-to-r from-purple-500 to-pink-500">
  Gradient Button
</Button>
```

### Using classNames Prop (Slots)
Most components expose multiple slots for granular styling:

```jsx
<Button
  classNames={{
    base: "h-12 px-6",
    content: "text-lg font-bold",
  }}
>
  Custom Button
</Button>
```

### Common Component Slots

**Button:**
- `base`: Button wrapper
- `content`: Button text content

**Input:**
- `base`: Input wrapper
- `label`: Label element
- `inputWrapper`: Input container
- `input`: Input field
- `description`: Helper text
- `errorMessage`: Error text

**Card:**
- `base`: Card wrapper
- `header`: Card header
- `body`: Card body
- `footer`: Card footer

### Example: Complex Override

```jsx
<Input
  classNames={{
    base: "max-w-full",
    label: "text-black/50 dark:text-white/90",
    input: [
      "bg-transparent",
      "text-black/90 dark:text-white/90",
      "placeholder:text-default-700/50 dark:placeholder:text-white/60",
    ],
    inputWrapper: [
      "shadow-xl",
      "bg-default-200/50",
      "dark:bg-default/60",
      "backdrop-blur-xl",
      "backdrop-saturate-200",
      "hover:bg-default-200/70",
      "group-data-[focused=true]:bg-default-200/50",
      "!cursor-text",
    ],
  }}
  label="Search"
  placeholder="Type to search..."
/>
```

### Global Theme Overrides

```javascript
// tailwind.config.js
heroui({
  themes: {
    light: {
      layout: {},
      colors: {},
    },
  },
})
```

### Using Tailwind Variants

```jsx
<Button className="hover:scale-105 active:scale-95 transition-transform">
  Interactive Button
</Button>
```

---

## Custom Variants

**What it is:**
Custom variants allow you to create reusable style variations for HeroUI components using Tailwind Variants.

**What it does:**
- Creates reusable component variations
- Extends component styling system
- Enables consistent custom patterns
- Supports compound variants

**How to use:**

### Creating Custom Variants

```javascript
import { extendVariants, Button } from "@heroui/react";

export const MyButton = extendVariants(Button, {
  variants: {
    color: {
      olive: "text-[#000] bg-[#84cc16]",
      orange: "bg-[#ff8c00] text-[#fff]",
      violet: "bg-[#8b5cf6] text-[#fff]",
    },
    isDisabled: {
      true: "bg-[#eaeaea] text-[#000] opacity-50 cursor-not-allowed",
    },
    size: {
      xs: "px-2 min-w-12 h-6 text-tiny gap-1 rounded-small",
      md: "px-4 min-w-20 h-10 text-small gap-2 rounded-small",
      xl: "px-8 min-w-28 h-14 text-large gap-4 rounded-medium",
    },
  },
  defaultVariants: {
    color: "olive",
    size: "md",
  },
  compoundVariants: [
    {
      color: "olive",
      size: "xl",
      class: "bg-[#84cc16]/80 text-[#000] text-xl font-bold",
    },
  ],
});
```

### Using Custom Variants

```jsx
<MyButton color="olive">Olive Button</MyButton>
<MyButton color="orange" size="xl">Orange XL</MyButton>
<MyButton color="violet" isDisabled>Disabled Violet</MyButton>
```

### Extending Multiple Variants

```javascript
import { extendVariants, Card } from "@heroui/react";

export const MyCard = extendVariants(Card, {
  variants: {
    variant: {
      elevated: "shadow-xl",
      bordered: "border-2 border-primary",
      flat: "shadow-none",
    },
    padding: {
      none: "p-0",
      small: "p-2",
      medium: "p-4",
      large: "p-8",
    },
  },
  defaultVariants: {
    variant: "elevated",
    padding: "medium",
  },
});
```

### Compound Variants
Compound variants apply styles when multiple variant conditions are met:

```javascript
extendVariants(Button, {
  variants: {
    color: ["primary", "secondary"],
    size: ["sm", "lg"],
  },
  compoundVariants: [
    {
      color: "primary",
      size: "lg",
      class: "shadow-lg font-bold",
    },
  ],
});
```

---

# ✨ Components

HeroUI provides a comprehensive collection of React components designed for building modern, accessible, and beautiful user interfaces.

## Accordion

**What it is:**
A vertically stacked set of interactive headings that each reveal an associated section of content.

**What it does:**
- Displays collapsible content sections
- Supports single or multiple open items
- Provides smooth expand/collapse animations
- Maintains accessible keyboard navigation

**How to use:**

```jsx
import { Accordion, AccordionItem } from "@heroui/react";

function App() {
  return (
    <Accordion>
      <AccordionItem key="1" title="Accordion 1">
        Content for accordion 1
      </AccordionItem>
      <AccordionItem key="2" title="Accordion 2">
        Content for accordion 2
      </AccordionItem>
      <AccordionItem key="3" title="Accordion 3">
        Content for accordion 3
      </AccordionItem>
    </Accordion>
  );
}
```

### Key Props
- `variant`: "light" | "shadow" | "bordered" | "splitted"
- `selectionMode`: "single" | "multiple" 
- `defaultExpandedKeys`: Array of initially expanded keys
- `disabledKeys`: Array of disabled item keys

### Example: Multiple Selection

```jsx
<Accordion selectionMode="multiple">
  <AccordionItem key="1" title="Features">
    Multiple items can be open simultaneously
  </AccordionItem>
  <AccordionItem key="2" title="Benefits">
    Great for FAQ sections
  </AccordionItem>
</Accordion>
```

---

## Autocomplete

**What it is:**
An input component that provides suggested options as users type, combining text input with a dropdown menu.

**What it does:**
- Provides real-time suggestions while typing
- Filters options based on user input
- Supports keyboard navigation
- Handles custom rendering of options

**How to use:**

```jsx
import { Autocomplete, AutocompleteItem } from "@heroui/react";

const animals = [
  { label: "Cat", value: "cat" },
  { label: "Dog", value: "dog" },
  { label: "Elephant", value: "elephant" },
  { label: "Lion", value: "lion" },
];

function App() {
  return (
    <Autocomplete
      label="Select an animal"
      placeholder="Search an animal"
    >
      {animals.map((animal) => (
        <AutocompleteItem key={animal.value} value={animal.value}>
          {animal.label}
        </AutocompleteItem>
      ))}
    </Autocomplete>
  );
}
```

### Key Props
- `label`: Label text for the input
- `placeholder`: Placeholder text
- `onSelectionChange`: Callback when selection changes
- `isLoading`: Shows loading state
- `startContent` / `endContent`: Custom icons or elements

### Example: With Custom Filtering

```jsx
<Autocomplete
  label="Search users"
  onInputChange={(value) => filterUsers(value)}
>
  {filteredUsers.map((user) => (
    <AutocompleteItem key={user.id}>{user.name}</AutocompleteItem>
  ))}
</Autocomplete>
```

---

## Alert

**What it is:**
A feedback component that displays important messages to users in a prominent way.

**What it does:**
- Displays contextual information
- Supports different severity levels
- Can be dismissible
- Provides visual feedback with icons

**How to use:**

```jsx
import { Alert } from "@heroui/react";

function App() {
  return (
    <>
      <Alert color="success" title="Success!">
        Your changes have been saved successfully.
      </Alert>
      
      <Alert color="danger" title="Error">
        Something went wrong. Please try again.
      </Alert>
      
      <Alert color="warning" title="Warning">
        Your session will expire in 5 minutes.
      </Alert>
    </>
  );
}
```

### Key Props
- `color`: "default" | "primary" | "secondary" | "success" | "warning" | "danger"
- `variant`: "flat" | "solid" | "bordered" | "faded"
- `title`: Alert title
- `description`: Alert description
- `isClosable`: Makes alert dismissible

### Example: Dismissible Alert

```jsx
<Alert 
  color="primary" 
  title="New Feature" 
  isClosable
  onClose={() => console.log("Alert closed")}
>
  Check out our new dark mode feature!
</Alert>
```

---

## Avatar

**What it is:**
A component that displays user profile pictures or initials in a circular or rounded shape.

**What it does:**
- Displays user profile images
- Shows fallback initials when no image
- Supports different sizes
- Can show status indicators

**How to use:**

```jsx
import { Avatar } from "@heroui/react";

function App() {
  return (
    <>
      <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
      <Avatar name="John Doe" />
      <Avatar name="Jane Smith" size="lg" />
    </>
  );
}
```

### Key Props
- `src`: Image URL
- `name`: User name (for initials fallback)
- `size`: "sm" | "md" | "lg"
- `color`: Color variant
- `radius`: "none" | "sm" | "md" | "lg" | "full"
- `isBordered`: Adds border
- `showFallback`: Shows fallback icon when image fails

### Example: Avatar Group

```jsx
import { AvatarGroup, Avatar } from "@heroui/react";

<AvatarGroup max={3}>
  <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
  <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
  <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
  <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
</AvatarGroup>
```

---

## Badge

**What it is:**
A small visual indicator for numeric or status information, typically overlaid on another component.

**What it does:**
- Displays counts or status
- Overlays on other components
- Supports different colors and variants
- Can be positioned in different locations

**How to use:**

```jsx
import { Badge, Avatar } from "@heroui/react";

function App() {
  return (
    <Badge content="5" color="primary">
      <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
    </Badge>
  );
}
```

### Key Props
- `content`: Badge content (number or text)
- `color`: "default" | "primary" | "secondary" | "success" | "warning" | "danger"
- `variant`: "solid" | "flat" | "faded" | "shadow"
- `placement`: "top-right" | "top-left" | "bottom-right" | "bottom-left"
- `shape`: "circle" | "rectangle"
- `isInvisible`: Hides badge
- `showOutline`: Shows outline

### Example: Notification Badge

```jsx
<Badge content="99+" color="danger" shape="circle">
  <Button>Messages</Button>
</Badge>
```

---

## Breadcrumbs

**What it is:**
A navigation component that shows the current page's location within a hierarchical structure.

**What it does:**
- Shows navigation path
- Provides clickable links to parent pages
- Supports custom separators
- Handles overflow with ellipsis

**How to use:**

```jsx
import { Breadcrumbs, BreadcrumbItem } from "@heroui/react";

function App() {
  return (
    <Breadcrumbs>
      <BreadcrumbItem>Home</BreadcrumbItem>
      <BreadcrumbItem>Music</BreadcrumbItem>
      <BreadcrumbItem>Artist</BreadcrumbItem>
      <BreadcrumbItem>Album</BreadcrumbItem>
      <BreadcrumbItem>Song</BreadcrumbItem>
    </Breadcrumbs>
  );
}
```

### Key Props
- `separator`: Custom separator element
- `size`: "sm" | "md" | "lg"
- `variant`: "solid" | "bordered" | "light"
- `maxItems`: Max items to display before ellipsis

### Example: With Custom Separator

```jsx
<Breadcrumbs separator="›">
  <BreadcrumbItem href="/">Home</BreadcrumbItem>
  <BreadcrumbItem href="/products">Products</BreadcrumbItem>
  <BreadcrumbItem>Current Page</BreadcrumbItem>
</Breadcrumbs>
```

---

## Button

**What it is:**
An interactive element that triggers an action when clicked.

**What it does:**
- Triggers actions on click
- Supports various visual styles
- Can show loading states
- Supports icons and different sizes

**How to use:**

```jsx
import { Button } from "@heroui/react";

function App() {
  return (
    <>
      <Button>Default Button</Button>
      <Button color="primary">Primary</Button>
      <Button color="secondary">Secondary</Button>
      <Button variant="bordered">Bordered</Button>
      <Button isLoading>Loading</Button>
    </>
  );
}
```

### Key Props
- `color`: "default" | "primary" | "secondary" | "success" | "warning" | "danger"
- `variant`: "solid" | "bordered" | "light" | "flat" | "faded" | "shadow" | "ghost"
- `size`: "sm" | "md" | "lg"
- `radius`: "none" | "sm" | "md" | "lg" | "full"
- `isDisabled`: Disables button
- `isLoading`: Shows loading spinner
- `startContent` / `endContent`: Icons
- `fullWidth`: Makes button full width

### Example: With Icons

```jsx
<Button startContent={<MailIcon />}>
  Send Email
</Button>

<Button 
  color="danger" 
  variant="flat"
  onClick={() => handleDelete()}
>
  Delete
</Button>
```

---

## Calendar

**What it is:**
A date selection component that displays a calendar interface.

**What it does:**
- Displays calendar grid
- Allows date selection
- Supports date ranges
- Handles disabled dates
- Provides multiple locales

**How to use:**

```jsx
import { Calendar } from "@heroui/react";
import { parseDate } from "@internationalized/date";

function App() {
  return (
    <Calendar 
      aria-label="Date picker"
      defaultValue={parseDate("2024-01-01")}
    />
  );
}
```

### Key Props
- `value`: Selected date
- `onChange`: Date change callback
- `minValue` / `maxValue`: Date range limits
- `isDisabled`: Disables calendar
- `isReadOnly`: Makes calendar read-only
- `disabledDates`: Array or function for disabled dates

### Example: With Date Range

```jsx
import { Calendar } from "@heroui/react";

<Calendar
  minValue={parseDate("2024-01-01")}
  maxValue={parseDate("2024-12-31")}
  isDisabled={(date) => date.day === 0 || date.day === 6}
/>
```

---

## Card

**What it is:**
A flexible container component for grouping related content.

**What it does:**
- Groups related content
- Provides consistent styling
- Supports headers, bodies, and footers
- Can be interactive (clickable)

**How to use:**

```jsx
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/react";

function App() {
  return (
    <Card>
      <CardHeader>
        <h4>Card Title</h4>
      </CardHeader>
      <CardBody>
        <p>Card content goes here</p>
      </CardBody>
      <CardFooter>
        <Button>Action</Button>
      </CardFooter>
    </Card>
  );
}
```

### Key Props
- `shadow`: "none" | "sm" | "md" | "lg"
- `radius`: "none" | "sm" | "md" | "lg"
- `fullWidth`: Makes card full width
- `isPressable`: Makes card clickable
- `isHoverable`: Adds hover effect
- `isBlurred`: Adds blur background effect

### Example: Image Card

```jsx
<Card isPressable>
  <CardHeader className="absolute z-10 top-1 flex-col !items-start">
    <p className="text-tiny text-white/60 uppercase font-bold">New</p>
    <h4 className="text-white font-medium text-large">Acme camera</h4>
  </CardHeader>
  <Image
    removeWrapper
    alt="Card background"
    className="z-0 w-full h-full object-cover"
    src="/images/card-example.jpeg"
  />
</Card>
```

---

## Checkbox

**What it is:**
An input element that allows users to select one or more options from a set.

**What it does:**
- Allows multiple selections
- Shows checked/unchecked states
- Supports indeterminate state
- Provides custom icons

**How to use:**

```jsx
import { Checkbox } from "@heroui/react";

function App() {
  const [isSelected, setIsSelected] = React.useState(false);

  return (
    <Checkbox 
      isSelected={isSelected}
      onValueChange={setIsSelected}
    >
      Accept terms and conditions
    </Checkbox>
  );
}
```

### Key Props
- `isSelected`: Checked state
- `onValueChange`: Change callback
- `defaultSelected`: Default checked state
- `isIndeterminate`: Indeterminate state
- `isDisabled`: Disables checkbox
- `size`: "sm" | "md" | "lg"
- `color`: Color variant
- `radius`: Border radius

### Example: With Custom Icon

```jsx
<Checkbox
  icon={<CheckIcon />}
  color="success"
  defaultSelected
>
  Custom checkbox
</Checkbox>
```

---

## Checkbox Group

**What it is:**
A component that manages a group of related checkboxes.

**What it does:**
- Groups related checkboxes
- Manages multiple selections
- Provides group validation
- Supports horizontal/vertical layouts

**How to use:**

```jsx
import { CheckboxGroup, Checkbox } from "@heroui/react";

function App() {
  const [selected, setSelected] = React.useState([]);

  return (
    <CheckboxGroup
      label="Select cities"
      value={selected}
      onValueChange={setSelected}
    >
      <Checkbox value="buenos-aires">Buenos Aires</Checkbox>
      <Checkbox value="sydney">Sydney</Checkbox>
      <Checkbox value="san-francisco">San Francisco</Checkbox>
      <Checkbox value="london">London</Checkbox>
    </CheckboxGroup>
  );
}
```

### Key Props
- `value`: Array of selected values
- `onValueChange`: Change callback
- `label`: Group label
- `orientation`: "horizontal" | "vertical"
- `color`: Color for all checkboxes
- `isDisabled`: Disables all checkboxes

---

## Chip

**What it is:**
A compact element that represents an input, attribute, or action.

**What it does:**
- Displays tags or labels
- Can be closable
- Supports avatars/icons
- Interactive or static

**How to use:**

```jsx
import { Chip } from "@heroui/react";

function App() {
  return (
    <>
      <Chip>Default</Chip>
      <Chip color="primary">Primary</Chip>
      <Chip color="success" variant="dot">Success</Chip>
      <Chip onClose={() => console.log("closed")}>Closable</Chip>
    </>
  );
}
```

### Key Props
- `color`: Color variant
- `variant`: "solid" | "bordered" | "light" | "flat" | "faded" | "shadow" | "dot"
- `size`: "sm" | "md" | "lg"
- `radius`: Border radius
- `onClose`: Makes chip closable
- `startContent` / `endContent`: Custom content
- `avatar`: Avatar component

### Example: With Avatar

```jsx
<Chip
  variant="flat"
  avatar={<Avatar name="JW" />}
>
  Jane Williams
</Chip>
```

---

## Circular Progress

**What it is:**
A circular progress indicator that shows completion of a task.

**What it does:**
- Shows progress in circular form
- Supports determinate and indeterminate states
- Displays percentage values
- Customizable colors and sizes

**How to use:**

```jsx
import { CircularProgress } from "@heroui/react";

function App() {
  return (
    <>
      <CircularProgress value={70} />
      <CircularProgress 
        value={50} 
        color="success"
        showValueLabel
      />
      <CircularProgress 
        value={30}
        color="warning"
        strokeWidth={4}
      />
    </>
  );
}
```

### Key Props
- `value`: Progress value (0-100)
- `color`: Color variant
- `size`: "sm" | "md" | "lg"
- `strokeWidth`: Thickness of progress ring
- `showValueLabel`: Shows percentage
- `label`: Custom label
- `formatOptions`: Number format options

### Example: Indeterminate

```jsx
<CircularProgress 
  aria-label="Loading..."
  color="primary"
/>
```

---

## Code

**What it is:**
A component for displaying inline or block code snippets with syntax styling.

**What it does:**
- Displays code with monospace font
- Provides syntax highlighting
- Supports copy functionality
- Different visual variants

**How to use:**

```jsx
import { Code } from "@heroui/react";

function App() {
  return (
    <>
      <Code>npm install @heroui/react</Code>
      <Code color="primary">const value = 42;</Code>
    </>
  );
}
```

### Key Props
- `color`: Color variant
- `size`: "sm" | "md" | "lg"
- `radius`: Border radius

---

## Date Input

**What it is:**
An input component specifically designed for date entry.

**What it does:**
- Provides structured date input
- Validates date formats
- Supports keyboard navigation
- Handles various date formats

**How to use:**

```jsx
import { DateInput } from "@heroui/react";
import { parseDate } from "@internationalized/date";

function App() {
  return (
    <DateInput
      label="Birth date"
      defaultValue={parseDate("2024-01-01")}
    />
  );
}
```

### Key Props
- `label`: Input label
- `value`: Selected date
- `onChange`: Date change callback
- `placeholderValue`: Placeholder date
- `minValue` / `maxValue`: Date limits

---

## Date Picker

**What it is:**
A combination of input and calendar for selecting dates.

**What it does:**
- Provides date input with calendar popup
- Validates dates
- Supports date ranges
- Handles keyboard navigation

**How to use:**

```jsx
import { DatePicker } from "@heroui/react";

function App() {
  return (
    <DatePicker 
      label="Event date"
      className="max-w-md"
    />
  );
}
```

### Key Props
- `label`: Picker label
- `value`: Selected date
- `onChange`: Date change callback
- `minValue` / `maxValue`: Date range limits
- `granularity`: "day" | "hour" | "minute" | "second"

---

## Date Range Picker

**What it is:**
A date picker component that allows selection of date ranges.

**What it does:**
- Selects start and end dates
- Validates date ranges
- Provides calendar interface
- Supports keyboard navigation

**How to use:**

```jsx
import { DateRangePicker } from "@heroui/react";

function App() {
  return (
    <DateRangePicker 
      label="Event duration"
      className="max-w-md"
    />
  );
}
```

### Key Props
- `label`: Picker label
- `value`: Selected date range
- `onChange`: Range change callback
- `minValue` / `maxValue`: Date limits

---

## Divider

**What it is:**
A visual separator between content sections.

**What it does:**
- Separates content visually
- Supports horizontal and vertical orientations
- Customizable styling

**How to use:**

```jsx
import { Divider } from "@heroui/react";

function App() {
  return (
    <>
      <div>Content above</div>
      <Divider />
      <div>Content below</div>
    </>
  );
}
```

### Key Props
- `orientation`: "horizontal" | "vertical"

---

## Dropdown

**What it is:**
A menu component that displays a list of actions or options.

**What it does:**
- Displays contextual menus
- Supports nested menus
- Handles keyboard navigation
- Provides selection feedback

**How to use:**

```jsx
import { 
  Dropdown, 
  DropdownTrigger, 
  DropdownMenu, 
  DropdownItem,
  Button 
} from "@heroui/react";

function App() {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="bordered">
          Open Menu
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Actions">
        <DropdownItem key="new">New file</DropdownItem>
        <DropdownItem key="copy">Copy link</DropdownItem>
        <DropdownItem key="edit">Edit file</DropdownItem>
        <DropdownItem key="delete" color="danger">
          Delete file
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
```

### Key Props (DropdownMenu)
- `selectionMode`: "none" | "single" | "multiple"
- `selectedKeys`: Selected items
- `onAction`: Action callback
- `disabledKeys`: Disabled items

---

## Drawer

**What it is:**
A panel that slides in from the edge of the screen.

**What it does:**
- Displays temporary content
- Slides from screen edges
- Supports backdrop overlay
- Can be dismissible

**How to use:**

```jsx
import { Drawer, DrawerContent, Button } from "@heroui/react";
import { useDisclosure } from "@heroui/react";

function App() {
  const {isOpen, onOpen, onClose} = useDisclosure();

  return (
    <>
      <Button onPress={onOpen}>Open Drawer</Button>
      <Drawer isOpen={isOpen} onClose={onClose}>
        <DrawerContent>
          <h2>Drawer Title</h2>
          <p>Drawer content</p>
        </DrawerContent>
      </Drawer>
    </>
  );
}
```

### Key Props
- `placement`: "left" | "right" | "top" | "bottom"
- `size`: "xs" | "sm" | "md" | "lg" | "xl" | "full"
- `isOpen`: Controls visibility
- `onClose`: Close callback

---

## Form

**What it is:**
A component for building accessible forms with validation.

**What it does:**
- Manages form state
- Handles validation
- Provides error messages
- Supports submission

**How to use:**

```jsx
import { Form, Input, Button } from "@heroui/react";

function App() {
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Form onSubmit={onSubmit}>
      <Input
        name="email"
        type="email"
        label="Email"
        required
      />
      <Input
        name="password"
        type="password"
        label="Password"
        required
      />
      <Button type="submit">Submit</Button>
    </Form>
  );
}
```

---

## Image

**What it is:**
An enhanced image component with loading states and effects.

**What it does:**
- Displays images with lazy loading
- Provides loading skeleton
- Supports zoom effects
- Handles image errors

**How to use:**

```jsx
import { Image } from "@heroui/react";

function App() {
  return (
    <Image
      width={300}
      alt="NextUI hero"
      src="https://heroui.com/images/hero.png"
    />
  );
}
```

### Key Props
- `src`: Image source
- `alt`: Alternative text
- `width` / `height`: Dimensions
- `radius`: Border radius
- `isBlurred`: Blur effect
- `isZoomed`: Zoom on hover

---

## Input

**What it is:**
A text input component with enhanced styling and features.

**What it does:**
- Captures user text input
- Provides validation
- Supports different variants
- Can include icons and labels

**How to use:**

```jsx
import { Input } from "@heroui/react";

function App() {
  return (
    <>
      <Input
        type="email"
        label="Email"
        placeholder="Enter your email"
      />
      
      <Input
        type="password"
        label="Password"
        placeholder="Enter your password"
      />
    </>
  );
}
```

### Key Props
- `type`: Input type
- `label`: Input label
- `placeholder`: Placeholder text
- `value`: Input value
- `onChange`: Change callback
- `variant`: "flat" | "bordered" | "faded" | "underlined"
- `size`: "sm" | "md" | "lg"
- `startContent` / `endContent`: Icons or elements
- `errorMessage`: Error text
- `description`: Helper text

### Example: With Validation

```jsx
<Input
  type="email"
  label="Email"
  validate={(value) => {
    if (!value.includes("@")) {
      return "Please enter a valid email";
    }
  }}
  errorMessage="Please enter a valid email"
/>
```

---

## Input OTP

**What it is:**
A specialized input for one-time password or verification codes.

**What it does:**
- Captures OTP codes
- Provides individual digit inputs
- Auto-focuses next input
- Supports paste functionality

**How to use:**

```jsx
import { InputOTP } from "@heroui/react";

function App() {
  return (
    <InputOTP 
      length={6}
      onComplete={(value) => console.log(value)}
    />
  );
}
```

### Key Props
- `length`: Number of digits
- `onComplete`: Callback when all digits entered
- `value`: Current value
- `onChange`: Change callback

---

## Kbd

**What it is:**
A component for displaying keyboard shortcuts and keys.

**What it does:**
- Displays keyboard keys
- Provides consistent key styling
- Supports key combinations

**How to use:**

```jsx
import { Kbd } from "@heroui/react";

function App() {
  return (
    <div>
      Press <Kbd>Ctrl</Kbd> + <Kbd>C</Kbd> to copy
    </div>
  );
}
```

### Key Props
- `keys`: Array of key names

---

## Link

**What it is:**
An accessible hyperlink component.

**What it does:**
- Creates navigation links
- Supports external links
- Provides hover effects
- Can be styled as button

**How to use:**

```jsx
import { Link } from "@heroui/react";

function App() {
  return (
    <>
      <Link href="/about">About Us</Link>
      <Link href="https://heroui.com" isExternal>
        HeroUI Website
      </Link>
    </>
  );
}
```

### Key Props
- `href`: Link destination
- `isExternal`: Opens in new tab
- `color`: Color variant
- `underline`: "none" | "hover" | "always" | "active"
- `size`: Text size

---

## Listbox

**What it is:**
A list of selectable options, similar to a menu.

**What it does:**
- Displays selectable options
- Supports single/multiple selection
- Provides keyboard navigation
- Can include sections and dividers

**How to use:**

```jsx
import { Listbox, ListboxItem } from "@heroui/react";

function App() {
  return (
    <Listbox aria-label="Actions">
      <ListboxItem key="new">New file</ListboxItem>
      <ListboxItem key="copy">Copy link</ListboxItem>
      <ListboxItem key="edit">Edit file</ListboxItem>
      <ListboxItem key="delete" color="danger">
        Delete file
      </ListboxItem>
    </Listbox>
  );
}
```

### Key Props
- `selectionMode`: "none" | "single" | "multiple"
- `selectedKeys`: Selected items
- `onSelectionChange`: Selection callback
- `disabledKeys`: Disabled items
- `variant`: "solid" | "bordered" | "light" | "flat" | "faded"

---

## Modal

**What it is:**
An overlay dialog that requires user interaction before continuing.

**What it does:**
- Displays modal dialogs
- Locks background interaction
- Supports animations
- Can be dismissible

**How to use:**

```jsx
import { 
  Modal, 
  ModalContent, 
  ModalHeader, 
  ModalBody, 
  ModalFooter,
  Button,
  useDisclosure 
} from "@heroui/react";

function App() {
  const {isOpen, onOpen, onClose} = useDisclosure();

  return (
    <>
      <Button onPress={onOpen}>Open Modal</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalBody>
            <p>Modal content goes here</p>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="light" onPress={onClose}>
              Close
            </Button>
            <Button color="primary" onPress={onClose}>
              Action
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
```

### Key Props
- `isOpen`: Controls visibility
- `onClose`: Close callback
- `size`: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "full"
- `placement`: Modal position
- `backdrop`: "transparent" | "opaque" | "blur"
- `isDismissable`: Can close by clicking outside
- `scrollBehavior`: "inside" | "outside"

---

## Navbar

**What it is:**
A navigation bar component for app headers.

**What it does:**
- Provides app navigation
- Supports responsive layouts
- Can be sticky or fixed
- Handles menu collapse

**How to use:**

```jsx
import { 
  Navbar, 
  NavbarBrand, 
  NavbarContent, 
  NavbarItem, 
  Link 
} from "@heroui/react";

function App() {
  return (
    <Navbar>
      <NavbarBrand>
        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand>
      <NavbarContent>
        <NavbarItem>
          <Link href="/features">Features</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/customers">Customers</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/pricing">Pricing</Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
```

### Key Props
- `position`: "static" | "sticky"
- `maxWidth`: Maximum width
- `isBordered`: Adds bottom border
- `isBlurred`: Blur background effect

---

## Number Input

**What it is:**
An input component specifically for numeric values.

**What it does:**
- Accepts only numbers
- Provides increment/decrement buttons
- Supports min/max values
- Handles decimal places

**How to use:**

```jsx
import { NumberInput } from "@heroui/react";

function App() {
  return (
    <NumberInput
      label="Quantity"
      min={0}
      max={100}
      defaultValue={1}
    />
  );
}
```

### Key Props
- `min` / `max`: Value limits
- `step`: Increment step
- `formatOptions`: Number formatting
- `value`: Current value
- `onChange`: Change callback

---

## Pagination

**What it is:**
A component for navigating through paginated content.

**What it does:**
- Provides page navigation
- Shows current page
- Supports different variants
- Handles large page counts

**How to use:**

```jsx
import { Pagination } from "@heroui/react";

function App() {
  return (
    <Pagination 
      total={10} 
      initialPage={1}
      onChange={(page) => console.log(page)}
    />
  );
}
```

### Key Props
- `total`: Total pages
- `initialPage`: Initial page number
- `page`: Controlled page
- `onChange`: Page change callback
- `siblings`: Number of sibling pages to show
- `boundaries`: Number of boundary pages

---

## Popover

**What it is:**
A floating container that displays content relative to a trigger element.

**What it does:**
- Displays contextual content
- Positions relative to trigger
- Supports different placements
- Can be dismissible

**How to use:**

```jsx
import { Popover, PopoverTrigger, PopoverContent, Button } from "@heroui/react";

function App() {
  return (
    <Popover>
      <PopoverTrigger>
        <Button>Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="px-1 py-2">
          <div className="text-small font-bold">Popover Content</div>
          <div className="text-tiny">This is the popover content</div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
```

### Key Props
- `placement`: Position relative to trigger
- `offset`: Distance from trigger
- `isOpen`: Controlled open state
- `onOpenChange`: Open state callback
- `backdrop`: "transparent" | "opaque" | "blur"

---

## Progress

**What it is:**
A linear progress indicator showing task completion.

**What it does:**
- Shows linear progress
- Supports determinate/indeterminate states
- Displays labels
- Customizable colors

**How to use:**

```jsx
import { Progress } from "@heroui/react";

function App() {
  return (
    <>
      <Progress value={50} />
      <Progress 
        value={70} 
        color="success"
        label="Uploading..."
      />
    </>
  );
}
```

### Key Props
- `value`: Progress value (0-100)
- `color`: Color variant
- `size`: "sm" | "md" | "lg"
- `label`: Progress label
- `showValueLabel`: Shows percentage

---

## Radio Group

**What it is:**
A group of radio buttons for single selection.

**What it does:**
- Allows single selection
- Groups related options
- Provides accessible keyboard navigation
- Supports custom rendering

**How to use:**

```jsx
import { RadioGroup, Radio } from "@heroui/react";

function App() {
  return (
    <RadioGroup label="Select your favorite city">
      <Radio value="buenos-aires">Buenos Aires</Radio>
      <Radio value="sydney">Sydney</Radio>
      <Radio value="san-francisco">San Francisco</Radio>
      <Radio value="london">London</Radio>
    </RadioGroup>
  );
}
```

### Key Props
- `value`: Selected value
- `onValueChange`: Change callback
- `label`: Group label
- `orientation`: "horizontal" | "vertical"
- `color`: Color variant
- `isDisabled`: Disables all radios

---

## Range Calendar

**What it is:**
A calendar component for selecting date ranges.

**What it does:**
- Selects date ranges in calendar
- Validates range selections
- Supports min/max dates
- Handles disabled dates

**How to use:**

```jsx
import { RangeCalendar } from "@heroui/react";

function App() {
  return (
    <RangeCalendar 
      aria-label="Date range"
    />
  );
}
```

### Key Props
- `value`: Selected date range
- `onChange`: Range change callback
- `minValue` / `maxValue`: Date limits
- `isDisabled`: Disables calendar

---

## Scroll Shadow

**What it is:**
A component that adds shadow indicators when content is scrollable.

**What it does:**
- Shows scroll indicators
- Adds shadows at scroll edges
- Automatically detects scrollability
- Supports horizontal/vertical scrolling

**How to use:**

```jsx
import { ScrollShadow } from "@heroui/react";

function App() {
  return (
    <ScrollShadow className="h-[400px]">
      {/* Long scrollable content */}
    </ScrollShadow>
  );
}
```

### Key Props
- `orientation`: "horizontal" | "vertical"
- `hideScrollBar`: Hides scrollbar
- `size`: Shadow size

---

## Select

**What it is:**
A dropdown component for selecting from a list of options.

**What it does:**
- Displays selectable options
- Supports single/multiple selection
- Provides search functionality
- Handles large lists efficiently

**How to use:**

```jsx
import { Select, SelectItem } from "@heroui/react";

const animals = [
  {label: "Cat", value: "cat"},
  {label: "Dog", value: "dog"},
  {label: "Elephant", value: "elephant"},
];

function App() {
  return (
    <Select 
      label="Select an animal" 
      placeholder="Select an animal"
    >
      {animals.map((animal) => (
        <SelectItem key={animal.value} value={animal.value}>
          {animal.label}
        </SelectItem>
      ))}
    </Select>
  );
}
```

### Key Props
- `label`: Select label
- `placeholder`: Placeholder text
- `selectionMode`: "single" | "multiple"
- `selectedKeys`: Selected items
- `onSelectionChange`: Selection callback
- `isDisabled`: Disables select

---

## Skeleton

**What it is:**
A placeholder component that mimics content layout while loading.

**What it does:**
- Shows loading placeholders
- Mimics content shape
- Provides smooth transitions
- Improves perceived performance

**How to use:**

```jsx
import { Skeleton, Card } from "@heroui/react";

function App() {
  return (
    <Card className="space-y-5 p-4">
      <Skeleton className="rounded-lg">
        <div className="h-24 rounded-lg bg-default-300"></div>
      </Skeleton>
      <div className="space-y-3">
        <Skeleton className="w-3/5 rounded-lg">
          <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
        </Skeleton>
        <Skeleton className="w-4/5 rounded-lg">
          <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
        </Skeleton>
      </div>
    </Card>
  );
}
```

### Key Props
- `isLoaded`: Controls loading state
- `className`: Custom styles

---

## Slider

**What it is:**
An input component for selecting values from a range.

**What it does:**
- Selects numeric values
- Supports single/range selection
- Provides visual feedback
- Displays current value

**How to use:**

```jsx
import { Slider } from "@heroui/react";

function App() {
  return (
    <>
      <Slider 
        label="Volume" 
        defaultValue={50}
        minValue={0}
        maxValue={100}
      />
      
      <Slider 
        label="Price Range"
        step={10}
        minValue={0}
        maxValue={1000}
        defaultValue={[100, 500]}
      />
    </>
  );
}
```

### Key Props
- `value`: Current value
- `onChange`: Change callback
- `minValue` / `maxValue`: Range limits
- `step`: Increment step
- `label`: Slider label
- `showSteps`: Shows step marks
- `showTooltip`: Shows value tooltip

---

## Snippet

**What it is:**
A component for displaying copiable code snippets.

**What it does:**
- Displays code snippets
- Provides copy functionality
- Shows copy confirmation
- Supports multiple lines

**How to use:**

```jsx
import { Snippet } from "@heroui/react";

function App() {
  return (
    <>
      <Snippet>npm install @heroui/react</Snippet>
      
      <Snippet 
        color="primary"
        symbol="$"
      >
        yarn add @heroui/react
      </Snippet>
    </>
  );
}
```

### Key Props
- `symbol`: Command symbol
- `color`: Color variant
- `size`: Size variant
- `hideCopyButton`: Hides copy button
- `copyButtonProps`: Copy button props

---

## Spacer

**What it is:**
A flexible spacing component.

**What it does:**
- Creates flexible space
- Helps with layouts
- Responsive spacing

**How to use:**

```jsx
import { Spacer } from "@heroui/react";

function App() {
  return (
    <>
      <div>Item 1</div>
      <Spacer y={4} />
      <div>Item 2</div>
    </>
  );
}
```

### Key Props
- `x`: Horizontal spacing
- `y`: Vertical spacing

---

## Spinner

**What it is:**
A loading indicator component.

**What it does:**
- Shows loading state
- Provides visual feedback
- Customizable size and color
- Animated rotation

**How to use:**

```jsx
import { Spinner } from "@heroui/react";

function App() {
  return (
    <>
      <Spinner />
      <Spinner color="primary" />
      <Spinner size="lg" />
    </>
  );
}
```

### Key Props
- `color`: Color variant
- `size`: "sm" | "md" | "lg"
- `label`: Loading label

---

## Switch

**What it is:**
A toggle switch for binary choices.

**What it does:**
- Toggles between on/off states
- Provides visual feedback
- Supports different sizes
- Can include icons

**How to use:**

```jsx
import { Switch } from "@heroui/react";

function App() {
  const [isSelected, setIsSelected] = React.useState(false);

  return (
    <Switch
      isSelected={isSelected}
      onValueChange={setIsSelected}
    >
      Enable notifications
    </Switch>
  );
}
```

### Key Props
- `isSelected`: Switch state
- `onValueChange`: Change callback
- `defaultSelected`: Default state
- `size`: "sm" | "md" | "lg"
- `color`: Color variant
- `thumbIcon`: Custom thumb icon

---

## Table

**What it is:**
A component for displaying structured data in rows and columns.

**What it does:**
- Displays tabular data
- Supports sorting
- Handles pagination
- Allows row selection
- Supports custom cell rendering

**How to use:**

```jsx
import { 
  Table, 
  TableHeader, 
  TableColumn, 
  TableBody, 
  TableRow, 
  TableCell 
} from "@heroui/react";

function App() {
  return (
    <Table aria-label="Example table">
      <TableHeader>
        <TableColumn>NAME</TableColumn>
        <TableColumn>ROLE</TableColumn>
        <TableColumn>STATUS</TableColumn>
      </TableHeader>
      <TableBody>
        <TableRow key="1">
          <TableCell>Tony Reichert</TableCell>
          <TableCell>CEO</TableCell>
          <TableCell>Active</TableCell>
        </TableRow>
        <TableRow key="2">
          <TableCell>Zoey Lang</TableCell>
          <TableCell>Technical Lead</TableCell>
          <TableCell>Paused</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
```

### Key Props
- `selectionMode`: "none" | "single" | "multiple"
- `selectedKeys`: Selected rows
- `onSelectionChange`: Selection callback
- `sortDescriptor`: Sort configuration
- `onSortChange`: Sort callback

---

## Tabs

**What it is:**
A component for organizing content into switchable panels.

**What it does:**
- Organizes content into tabs
- Switches between panels
- Supports different variants
- Handles keyboard navigation

**How to use:**

```jsx
import { Tabs, Tab } from "@heroui/react";

function App() {
  return (
    <Tabs aria-label="Options">
      <Tab key="photos" title="Photos">
        Photos content
      </Tab>
      <Tab key="music" title="Music">
        Music content
      </Tab>
      <Tab key="videos" title="Videos">
        Videos content
      </Tab>
    </Tabs>
  );
}
```

### Key Props
- `variant`: "solid" | "underlined" | "bordered" | "light"
- `color`: Color variant
- `size`: "sm" | "md" | "lg"
- `selectedKey`: Controlled selected tab
- `onSelectionChange`: Selection callback
- `isDisabled`: Disables all tabs
- `disabledKeys`: Disabled specific tabs

---

## Toast

**What it is:**
A notification component that appears temporarily.

**What it does:**
- Shows temporary messages
- Provides feedback
- Auto-dismisses
- Supports different types

**How to use:**

```jsx
import { Button } from "@heroui/react";
import { toast } from "@heroui/react";

function App() {
  return (
    <Button onPress={() => toast.success("Success!")}>
      Show Toast
    </Button>
  );
}
```

### Toast Methods
```jsx
toast.success("Success message");
toast.error("Error message");
toast.warning("Warning message");
toast.info("Info message");
toast.loading("Loading...");
```

### Key Options
- `duration`: Auto-dismiss duration
- `position`: Toast position
- `description`: Additional text
- `action`: Action button

---

## Textarea

**What it is:**
A multi-line text input component.

**What it does:**
- Captures multi-line text
- Auto-resizes
- Supports validation
- Provides character count

**How to use:**

```jsx
import { Textarea } from "@heroui/react";

function App() {
  return (
    <Textarea
      label="Description"
      placeholder="Enter your description"
      className="max-w-xs"
    />
  );
}
```

### Key Props
- `label`: Textarea label
- `placeholder`: Placeholder text
- `value`: Textarea value
- `onChange`: Change callback
- `minRows` / `maxRows`: Row limits
- `description`: Helper text
- `errorMessage`: Error text

---

## Time Input

**What it is:**
An input component for time entry.

**What it does:**
- Captures time values
- Validates time format
- Supports keyboard navigation
- Handles different time formats

**How to use:**

```jsx
import { TimeInput } from "@heroui/react";
import { parseTime } from "@internationalized/date";

function App() {
  return (
    <TimeInput
      label="Event time"
      defaultValue={parseTime("11:45")}
    />
  );
}
```

### Key Props
- `label`: Input label
- `value`: Time value
- `onChange`: Change callback
- `granularity`: "hour" | "minute" | "second"
- `hourCycle`: 12 or 24 hour format

---

## Tooltip

**What it is:**
A small popup that displays additional information on hover.

**What it does:**
- Displays contextual information
- Shows on hover/focus
- Supports different placements
- Customizable content

**How to use:**

```jsx
import { Tooltip, Button } from "@heroui/react";

function App() {
  return (
    <Tooltip content="This is a tooltip">
      <Button>Hover me</Button>
    </Tooltip>
  );
}
```

### Key Props
- `content`: Tooltip content
- `placement`: Position relative to target
- `color`: Color variant
- `delay`: Show delay in ms
- `closeDelay`: Hide delay in ms
- `offset`: Distance from target
- `showArrow`: Shows arrow pointer

### Example: Rich Content

```jsx
<Tooltip 
  content={
    <div className="px-1 py-2">
      <div className="text-small font-bold">Custom Content</div>
      <div className="text-tiny">Additional information here</div>
    </div>
  }
>
  <Button>Hover for details</Button>
</Tooltip>
```

---

## User

**What it is:**
A component for displaying user information with avatar and details.

**What it does:**
- Shows user avatar
- Displays user name and description
- Combines avatar with text
- Provides consistent user representation

**How to use:**

```jsx
import { User } from "@heroui/react";

function App() {
  return (
    <User
      name="Jane Doe"
      description="Product Designer"
      avatarProps={{
        src: "https://i.pravatar.cc/150?u=a04258114e29026302d"
      }}
    />
  );
}
```

### Key Props
- `name`: User name
- `description`: User description
- `avatarProps`: Props for Avatar component

---

## Installation

To use HeroUI components, first install the package:

```bash
npm install @heroui/react framer-motion
```

Then wrap your app with the `HeroUIProvider`:

```jsx
import { HeroUIProvider } from "@heroui/react";

function App() {
  return (
    <HeroUIProvider>
      {/* Your app */}
    </HeroUIProvider>
  );
}
```

## Additional Resources

- **Official Documentation**: https://www.heroui.com/docs
- **GitHub Repository**: https://github.com/heroui-inc/heroui
- **Discord Community**: Join for support and discussions
- **Examples**: Check the official docs for more examples

---

*This documentation was compiled from HeroUI official documentation. For the most up-to-date information and detailed API references, please visit the official HeroUI documentation website.*


