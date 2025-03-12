declare module '@hooks/useResizeObserver' {
  import { RefObject } from 'react';
  
  export default function useResizeObserver<T extends HTMLElement>(ref: RefObject<T>): { width: number; height: number };
}
