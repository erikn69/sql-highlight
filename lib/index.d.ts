declare module 'sql-highlight' {
  export interface HighlightOptions {
    html?: boolean;
    classPrefix?: string;
    colors?: {
      keyword: string;
      function: string;
      number: string;
      string: string;
      special: string;
      bracket: string;
      clear: string;
    };
  }
  
  export function highlight(sqlString: string, options?: HighlightOptions): string;
}
