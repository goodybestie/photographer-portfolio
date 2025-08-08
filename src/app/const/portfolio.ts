export interface PortfolioItem {
    id:string;
    title: string;
    description: string;
    imageUrl: string;
    category: string;
}

export const portfolioItems: PortfolioItem[] = [
    {
        id: '1',
        title: 'Golden Hour Portrait',
        description: 'Captured during the perfect golden hour lighting.',
        imageUrl: '/portfolio-1.jpg',
        category: 'Portrait'
    },
    {
        id: '2',
        title: 'Mountain Landscape',
        description: 'CBreathtaking mountain vista at sunrise.',
        imageUrl: '/portfolio-2.jpg',
        category: 'Landscape'
    },
    {
        id: '3',
        title: 'Urban Architecture',
        description: 'Modern architectural photography.',
        imageUrl: '/portfolio-3.jpg',
        category: 'Architecture'
    },
    {
        id: '4',
        title: 'Wedding Ceremony',
        description: 'Intimate wedding moment captured.',
        imageUrl: '/portfolio-4.jpg',
        category: 'Wedding'
    },
     {
        id: '5',
        title: 'Nature Close-up',
        description: 'Detailed macro photography of nature',
        imageUrl: '/portfolio-5.jpg',
        category: 'Nature'
     },
        {
            id: '6',
            title: 'City Skyline',
            description: 'Urban landscape photography',
            imageUrl: '/portfolio-6.jpg',
            category: 'landscape'
        }
];