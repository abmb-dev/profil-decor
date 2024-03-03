import { cva as _cva, type VariantProps as _variantProps } from 'class-variance-authority';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

type CvaParameters<T> = Parameters<typeof _cva<T>>;
type CvaReturnType<T> = ReturnType<typeof _cva<T>>;

export const cva = <T>(base?: CvaParameters<T>[0], config?: CvaParameters<T>[1]): CvaReturnType<T> => {
  return _cva<T>(base, config);
};

export const cn = (...inputs: ClassValue[]): string => {
  return twMerge(clsx(inputs));
}

export type VariantProps<T extends (...args: any) => any> = _variantProps<T>;

export type styleVariant = 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link' | null | undefined;
export type styleSize = 'default' | 'sm' | 'lg' | 'icon';