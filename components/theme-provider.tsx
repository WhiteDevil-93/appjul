'use client';

import { ThemeProvider as NextThemesProvider, useTheme } from 'next-themes';
import { Theme } from '@radix-ui/themes';
import type { ComponentProps } from 'react';

type ThemeProviderProps = ComponentProps<typeof NextThemesProvider>;

function RadixThemeWrapper({ children }: { children: React.ReactNode }) {
  const { resolvedTheme } = useTheme();

  return (
    <Theme accentColor="purple" appearance={resolvedTheme as 'light' | 'dark'}>
      {children}
    </Theme>
  );
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      <RadixThemeWrapper>{children}</RadixThemeWrapper>
    </NextThemesProvider>
  );
}
