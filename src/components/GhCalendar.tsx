// src/components/GhCalendar.tsx
import React from 'react';
import GitHubCalendar from 'react-github-calendar';
import type { ThemeInput } from 'react-activity-calendar';



const minimalTheme: ThemeInput = {
  light: [
    "hsl(0, 0%, 100%)",
    "#2337ff"
  ],
  dark: [
    "hsl(0, 0%, 22%)",
    "hsl(225,92%,77%)"
  ]
}

export default function GhCalendar(props: React.ComponentProps<typeof GitHubCalendar>) {
  return (
    <GitHubCalendar
      {...props}
      theme={minimalTheme}
      colorScheme='light'
    />
  );}
