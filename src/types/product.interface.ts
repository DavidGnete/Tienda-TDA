export interface Product {
    id: string,
    description: string;
    images?: string[];
    slug: string;
    title:string;
    price: number;
    phone?:number;
}

export interface ProductImage {
    src?: string,
    alt: string,
    className:React.StyleHTMLAttributes<HTMLImageElement>['className'];
    style?: React.StyleHTMLAttributes<HTMLImageElement>['style'];
    width: number;
    height: number;
    unoptimized?: boolean;
    onMouseEnter?:React.MouseEventHandler<HTMLImageElement>;
    onMouseLeave?:React.MouseEventHandler<HTMLImageElement>;
}