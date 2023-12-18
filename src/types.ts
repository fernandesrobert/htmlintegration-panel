type SeriesSize = 'sm' | 'md' | 'lg';

export interface SimpleOptions {
  text: string;
  htmlCode: string;
  cssCode: string;
  showSeriesCount: boolean;
  seriesCountSize: SeriesSize;
}
