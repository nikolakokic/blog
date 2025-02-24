# Blog Application

## My Approach

I developed this blog application using Next.js, focusing on a mobile-first responsive design. The key aspects of my implementation include:

- Built a responsive grid layout using pure SCSS
- Implemented a JSON server for mock API data management
- Created reusable React components for blog cards and layouts
- Focused on accessibility with semantic HTML and proper ARIA attributes
- Used TypeScript for better code maintainability and type safety
- Included dark mode support with SCSS variables and React state management
- Added subtle animations for better user experience
- Implemented dynamic reading time calculation and view counter
- Created dynamic single post pages (/posts/[id]) for detailed blog content

## Design
Used https://www.figma.com/design/rbst5SJZBctLABDgf9swAI/Free-Blog-Template--%7C-Modern-%26-Creative-design-(Community)?node-id=1-2&p=f&t=SvtEVYHtFcuFDaLz-0 as inspiration for the blog layout and styling. Note that the final implementation may vary slightly from the design based on the dynamic content and data structure used

## Setup
1. `npm install`
2. `npm run mock-api`   # Start JSON server on port 3001
3. `npm run dev`        # Start Next.js on port 3000