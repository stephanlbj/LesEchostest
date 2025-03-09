export interface Newsletter {
    id: string;
    image: string;
    description: string;
    title: string;
    site: string;
    subscriptions: string[];  
  }

  export type NewslettersResponse = {
    data: Newsletter[];
    currentPage: number;
    nextPage: number | null;
  };


  export interface MockImageProps {
    src: string;
    alt: string;
    width: number;
    height: number;
    fetchPriority?: "high" | "auto";
    loading?: "lazy" | "eager";
    style?: React.CSSProperties;
    sizes?: string;
}