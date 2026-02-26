interface product {
    id: string;
    title: string;
    price: number;
    description: string;
    slug:string
    images: string[];
    phone: number;

}
/* 
quiero poner phone con numeros aleatorios a todo mi archivo */

export const Mocking: product [] = [ 
    // --- Snacks y Comida ---
    {
        id: '3',
        title: 'Brownies Caseros',
        description: 'Brownies de chocolate con nueces, perfectos para el bajón entre clases.',
        images: [
            'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&q=80',
            'https://images.unsplash.com/photo-1589375462afa-d8a6a9d3b0b9?w=400&q=80',
            'https://images.unsplash.com/photo-1564355808539-22fda35bed7e?w=400&q=80',
        ],
        slug: 'brownies-caseros-extra',
        price: 3500,
        phone: 3001234567,
    },
    {
        id: '4',
        title: 'Café Tinto Termo',
        description: 'Café recién colado, 8oz. ¡Para sobrevivir a la clase de las 7 am!',
        images: [
            'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&q=80',
            'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80',
            'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&q=80',
        ],
        slug: 'cafe-tinto-caliente',
        price: 1500,
        phone: 3009876543,
    },
    {
        id: '5',
        title: 'Sandwich de Jamón y Queso',
        description: 'Hechos hoy mismo. Incluye salsa de la casa.',
        images: [
            'https://images.unsplash.com/photo-1539252554453-80ab65ce3586?w=400&q=80',
            'https://images.unsplash.com/photo-1553909489-cd47e0907980?w=400&q=80',
            'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80',
        ],
        slug: 'sandwich-fresco-estudiante',
        price: 5000,
        phone: 3002345678,
    },
    {
        id: '6',
        title: 'Empanadas de Carne',
        description: 'Empanadas fritas crujientes con ají casero.',
        images: [
            'https://images.unsplash.com/photo-1604467794349-0b74285de7e7?w=400&q=80',
            'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&q=80',
            'https://images.unsplash.com/photo-1574484284002-952d92456975?w=400&q=80',
        ],
        slug: 'empanadas-carne-crujientes',
        price: 2500,
        phone: 3003456789,
    },
    {
        id: '7',
        title: 'Ensalada de Frutas',
        description: 'Mix de frutas de temporada: mango, papaya y banano.',
        images: [
            'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=400&q=80',
            'https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=400&q=80',
            'https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7?w=400&q=80',
        ],
        slug: 'ensalada-frutas-saludable',
        price: 4500,
        phone: 3004567890,
    },

    // --- Material Académico ---
    {
        id: '8',
        title: 'Calculadora Científica Casio',
        description: 'Modelo FX-991, perfecto para ingeniería y cálculo avanzado.',
        images: [
            'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&q=80',
            'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&q=80',
            'https://images.unsplash.com/photo-1587145820266-a5951ee6f620?w=400&q=80',
        ],
        slug: 'calculadora-cientifica-casio',
        price: 85000,
        phone: 3005678901,
    },
    {
        id: '9',
        title: 'Cuaderno Argollado 5 Materias',
        description: 'Hojas cuadriculadas, pasta dura. Nuevo.',
        images: [
            'https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=400&q=80',
            'https://images.unsplash.com/photo-1544816155-12df9643f363?w=400&q=80',
            'https://images.unsplash.com/photo-1517971053567-8bde93bc6a58?w=400&q=80',
        ],
        slug: 'cuaderno-5-materias-nuevo',
        price: 12000,
        phone: 3006789012,
    },
    {
        id: '10',
        title: 'Kit de Rápido-grafos',
        description: 'Set de 3 grosores (0.1, 0.3, 0.5) para dibujo técnico.',
        images: [
            'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&q=80',
            'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&q=80',
            'https://images.unsplash.com/photo-1564069114553-7215e1ff1890?w=400&q=80',
        ],
        slug: 'kit-dibujo-tecnico',
        price: 45000,
        phone: 3007890123,
    },
    {
        id: '11',
        title: 'Bata de Laboratorio M',
        description: 'Bata blanca de algodón, talla mediana. Poco uso.',
        images: [
            'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=400&q=80',
            'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&q=80',
            'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400&q=80',
        ],
        slug: 'bata-laboratorio-quimica',
        price: 30000,
        phone: 3008901234,
    },
    {
        id: '12',
        title: 'Libro: Cálculo de Stewart',
        description: 'Séptima edición, estado 8/10. Ideal para semestre 1 y 2.',
        images: [
            'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&q=80',
            'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&q=80',
            'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&q=80',
        ],
        slug: 'libro-stewart-calculo',
        price: 60000,
        phone: 3009012345,
    },

    // --- Tecnología y Gadgets ---
    {
        id: '13',
        title: 'Mouse Inalámbrico Logitech',
        description: 'Ergonómico y silencioso. Incluye batería AA.',
        images: [
            'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&q=80',
            'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=400&q=80',
            'https://images.unsplash.com/photo-1586473219010-2ffc57b0d282?w=400&q=80',
        ],
        slug: 'mouse-logitech-inalambrico',
        price: 45000,
        phone: 3000123456,
    },
    {
        id: '14',
        title: 'Power Bank 10000mAh',
        description: 'Carga rápida, ideal para no quedarte sin batería en el campus.',
        images: [
            'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&q=80',
            'https://images.unsplash.com/photo-1585338447937-7082f8fc763d?w=400&q=80',
            'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&q=80',
        ],
        slug: 'cargador-portatil-powerbank',
        price: 75000,
        phone: 3001230987,
    },

    {
        id: '15',
        title: 'Audífonos Bluetooth JBL',
        description: 'Cancelación de ruido para estudiar en la biblioteca.',
        images: [
            'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80',
            'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&q=80',
            'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&q=80',
        ],
        slug: 'audifonos-jbl-bluetooth',
        price: 120000,
        phone: 3002345670,
    },
    {
        id: '16',
        title: 'Memoria USB 64GB',
        description: 'USB 3.0 de alta velocidad para tus proyectos pesados.',
        images: [
            'https://images.unsplash.com/photo-1618410320928-25228d811631?w=400&q=80',
            'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=400&q=80',
            'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&q=80',
        ],
        slug: 'usb-64gb-kingston',
        price: 25000,
        phone: 3003456701,
    },
    {
        id: '17',
        title: 'Adaptador HDMI a VGA',
        description: 'Para conectar tu laptop a los proyectores viejos de los salones.',
        images: [
            'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80',
            'https://images.unsplash.com/photo-1601524909162-ae8725290836?w=400&q=80',
            'https://images.unsplash.com/photo-1625837874856-21bba1845af0?w=400&q=80',
        ],
        slug: 'adaptador-hdmi-vga',
        price: 18000,
        phone: 3004567012,
    },

    // --- Servicios y Tutorías ---
    {
        id: '18',
        title: 'Tutoría de Álgebra Lineal',
        description: 'Sesión de 1 hora. Resolución de talleres y preparación parcial.',
        images: [
            'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&q=80',
            'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&q=80',
            'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&q=80',
        ],
        slug: 'tutoria-algebra-lineal',
        price: 20000,
        phone: 3005670123,
    },
    {
        id: '19',
        title: 'Impresiones Láser B/N',
        description: 'Precio por hoja. Entrega rápida en el bloque C.',
        images: [
            'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=400&q=80',
            'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80',
            'https://images.unsplash.com/photo-1568667256549-094cd1531f3e?w=400&q=80',
        ],
        slug: 'servicio-impresiones-laser',
        price: 200,
        phone: 3006780123,
    },
    {
        id: '20',
        title: 'Curso Rápido de Excel',
        description: 'Aprende tablas dinámicas y macros en 3 sesiones.',
        images: [
            'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?w=400&q=80',
            'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80',
            'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80',
        ],
        slug: 'curso-excel-estudiantes',
        price: 50000,
        phone: 3007890123,
    },

    // --- Otros ---
    {
        id: '21',
        title: 'Sombrilla Compacta',
        description: 'Para que no te mojes caminando entre bloques.',
        images: [
            'https://images.unsplash.com/photo-1558618047-f4fd3cd4a8b6?w=400&q=80',
            'https://images.unsplash.com/photo-1523772721666-22ad3c3b6f90?w=400&q=80',
            'https://images.unsplash.com/photo-1501999635878-71cb5379c2d8?w=400&q=80',
        ],
        slug: 'sombrilla-portatil-negra',
        price: 15000,
        phone: 3008901230,
    },
    {
        id: '22',
        title: 'Termo de Agua 1L',
        description: 'Libre de BPA, mantiene el agua fría.',
        images: [
            'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80',
            'https://images.unsplash.com/photo-1570831739435-6601aa3fa4fb?w=400&q=80',
            'https://images.unsplash.com/photo-1610824352934-c10d87b700cc?w=400&q=80',
        ],
        slug: 'termo-agua-deportes',
        price: 22000,
        phone: 3009012301,
    },
    {
        id: '23',
        title: 'Resaltadores Pastel',
        description: 'Set de 6 colores marca Stabilo.',
        images: [
            'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=400&q=80',
            'https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?w=400&q=80',
            'https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=400&q=80',
        ],
        slug: 'resaltadores-stabilo-pastel',
        price: 18000,
        phone: 3000123012,
    },
    {
        id: '24',
        title: 'Organizador de Escritorio',
        description: 'De madera, hecho a mano. 3 compartimentos.',
        images: [
            'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400&q=80',
            'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&q=80',
            'https://images.unsplash.com/photo-1486946255434-2466348c2166?w=400&q=80',
        ],
        slug: 'organizador-escritorio-madera',
        price: 35000,
        phone: 3001230123,
    },
    {
        id: '25',
        title: 'Gomas de Eucalipto',
        description: 'Para la garganta después de exponer.',
        images: [
            'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=400&q=80',
            'https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=400&q=80',
            'https://images.unsplash.com/photo-1621077936052-fcc2a5ade9e3?w=400&q=80',
        ],
        slug: 'gomas-eucalipto-menta',
        price: 2000,
        phone: 3002340123,
    },
    {
        id: '26',
        title: 'Mochila Antirrobo',
        description: 'Compartimento para laptop de 15 pulgadas y puerto USB.',
        images: [
            'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80',
            'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=400&q=80',
            'https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?w=400&q=80',
        ],
        slug: 'mochila-antirrobo-gris',
        price: 95000,
        phone: 3003450123,
    },
    {
        id: '27',
        title: 'Tablero Borrable Pequeño',
        description: 'Incluye marcador y borrador. Ideal para estudiar en casa.',
        images: [
            'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&q=80',
            'https://images.unsplash.com/photo-1596496181871-9681eacf9764?w=400&q=80',
            'https://images.unsplash.com/photo-1503676382389-4809596d5290?w=400&q=80',
        ],
        slug: 'tablero-acrilico-pequeno',
        price: 28000,
        phone: 3004560123,
    },
    {
        id: '28',
        title: 'Lámpara de Escritorio LED',
        description: 'Tres niveles de intensidad. Conexión USB.',
        images: [
            'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&q=80',
            'https://images.unsplash.com/photo-1513506003901-1e6a35f3d5bf?w=400&q=80',
            'https://images.unsplash.com/photo-1595079676339-1534801ad6cf?w=400&q=80',
        ],
        slug: 'lampara-escritorio-led',
        price: 40000,
        phone: 3005670123,
    },
    {
        id: '29',
        title: 'Diccionario Inglés-Español',
        description: 'Oxford Pocket. Muy buen estado.',
        images: [
            'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&q=80',
            'https://images.unsplash.com/photo-1474932430478-367dbb6832c1?w=400&q=80',
            'https://images.unsplash.com/photo-1592431913823-7af6b323da9b?w=400&q=80',
        ],
        slug: 'diccionario-ingles-oxford',
        price: 15000,
        phone: 3006780123,
    },
    {
        id: '30',
        title: 'Post-its de Colores',
        description: '4 bloques de notas adhesivas neón.',
        images: [
            'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80',
            'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&q=80',
            'https://images.unsplash.com/photo-1602532305019-3dbbd482dae9?w=400&q=80',
        ],
        slug: 'notas-adhesivas-postit',
        price: 8000,
        phone: 3007890123,
    }
];