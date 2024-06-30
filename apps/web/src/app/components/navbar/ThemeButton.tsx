'use client';

import React from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { useMounted } from '@/lib/hooks';
import { useTheme } from 'next-themes';

enum Theme {
  System = 'system',
  Dark = 'dark',
  Light = 'light',
}

function isDark(theme?: string, systemTheme?: string) {
  const currentTheme = theme === Theme.System ? systemTheme : theme;
  return currentTheme === Theme.Dark;
}

export function ThemeButton() {
  const { systemTheme, theme, setTheme } = useTheme();
  const mounted = useMounted();

  const dark = isDark(theme, systemTheme);
  const Icon = dark ? SunIcon : MoonIcon;

  const toggleMode = () => {
    const nextDark = !dark;
    setTheme(nextDark ? Theme.Dark : Theme.Light);
  };

  return (
    <button onClick={toggleMode} className="w-10 h-10 p-2.5 rounded-full">
      {mounted ? <Icon /> : null}
    </button>
  );
}
