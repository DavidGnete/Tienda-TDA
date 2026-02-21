interface products {
    id: string;
    title: string;
    price: number;
    description: string;
    slug:string
    images: string[];

}

export const Mocking : products[] = [
    {
        id: '1',
        title: 'Limones',
        description: 'Los mejores limones de la ciudad',
        images:['coco.jpg'],
        slug: "slug_222",
        price: 1000,
    },
    {
        id: '2',
        title:'Dulces coco',
        description: 'Venta de dulce de coco',
        images: ['limon.jpg'],
        slug: 'slug_limon_222',
        price: 20000,
    }
]