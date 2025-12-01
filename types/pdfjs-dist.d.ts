declare module 'pdfjs-dist' {
  export const version: string;
  
  export interface GlobalWorkerOptions {
    workerSrc: string;
  }
  
  export const GlobalWorkerOptions: GlobalWorkerOptions;
  
  export interface PDFDocumentLoadingTask {
    promise: Promise<PDFDocumentProxy>;
  }
  
  export interface PDFDocumentProxy {
    numPages: number;
    getPage(pageNumber: number): Promise<PDFPageProxy>;
  }
  
  export interface PDFPageProxy {
    getTextContent(): Promise<TextContent>;
    getViewport(params: { scale: number }): PageViewport;
    render(params: RenderParameters): RenderTask;
  }
  
  export interface PageViewport {
    width: number;
    height: number;
    scale: number;
  }
  
  export interface RenderParameters {
    canvasContext: CanvasRenderingContext2D;
    viewport: PageViewport;
  }
  
  export interface RenderTask {
    promise: Promise<void>;
  }
  
  export interface TextContent {
    items: TextItem[];
  }
  
  export interface TextItem {
    str: string;
    [key: string]: any;
  }
  
  export function getDocument(src: { data: ArrayBuffer } | string): PDFDocumentLoadingTask;
}

