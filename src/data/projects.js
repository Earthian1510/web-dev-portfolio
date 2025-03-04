export const projects_data = [
    {
        id: 1,
        title: 'Gavran',
        subTitle: 'E-commerce App',
        techStack: {
            frontend: ["React", "React Router", "Axios", "Redux", "Bootstrap", "CSS", "Bootstrap Icons"],
            backend: ["MongoDB", "Node.js", "Express", "Mongoose", "Cloudinary", "CORS"]
        },
        githubUrl: {
            frontend: 'https://github.com/Earthian1510/gavran-client',
            backend: 'https://github.com/Earthian1510/gavran-server'
        },
        hostedUrl: 'https://gavran-client.vercel.app',
        keyFeatures: [
            'Authentication', 'Filters', 'Product Search', 'Cart Management', 
            'Address Management', 'Order Management', 'Wishlist Management', 
            'User Profile', 'Products Management'
        ],
        description: 'Built a platform where farmers can sell their products directly to consumers. Users can sign up, browse products by category, or search with filters like price range and sorting options. They can add items to their cart or wishlist, manage quantities, and place orders with saved or new addresses. The app also includes order history, invoices, and profile management with editable details and profile pictures.',
        coverImage: '',
        youtubeLink: ''
    },
    {
        id: 2,
        title: 'Taj Mahal',
        subTitle: 'Ticket Booking Web App',
        techStack: {
            frontend: ["React", "Next.js", "Tailwind CSS", "Redux", "Axios"],
            backend: ["Node.js", "Express", "MongoDB", "JWT", "Nodemailer"]
        },
        githubUrl: {
            frontend: 'https://github.com/yourusername/tajmahal-client',
            backend: 'https://github.com/yourusername/tajmahal-server'
        },
        hostedUrl: 'https://tajmahal-booking.vercel.app',
        keyFeatures: [
            'User Authentication', 'Online Ticket Booking', 'Email Ticket Delivery',
            'Visitor Limit Management', 'Responsive UI', 'Historical Information Section'
        ],
        description: 'Redesigned the official Taj Mahal website with a more user-friendly and aesthetic interface. Added an online ticket booking system with a cap of 500 tickets per day. Users can register, book tickets, and receive their e-tickets via email. The system ensures smooth user authentication and secure transactions.',
        coverImage: '',
        youtubeLink: ''
    },
    {
        id: 3,
        title: 'Maharashtra Bhavan',
        subTitle: 'Accommodation Booking App',
        techStack: {
            frontend: ["React", "Bootstrap", "Redux", "CSS"],
            backend: ["Node.js", "Express", "MongoDB", "Deep Learning Model (Python)", "Nodemailer"]
        },
        githubUrl: {
            frontend: 'https://github.com/yourusername/maharashtra-bhavan-client',
            backend: 'https://github.com/yourusername/maharashtra-bhavan-server'
        },
        hostedUrl: 'https://maharashtra-bhavan.vercel.app',
        keyFeatures: [
            'User Authentication', 'Room Availability Management', 'Booking Form', 
            'Admin Panel', 'Document Authenticity Verification (AI-based)', 'Secure Payments'
        ],
        description: 'Redesigned the Maharashtra Sadan website for easier room booking for Maharashtra residents visiting Delhi. Added authentication for users and an admin panel to manage room availability. Integrated a document authenticity checker using deep learning to verify letters submitted for room requests. Users can book rooms, receive confirmation emails, and manage their reservations efficiently.',
        coverImage: '',
        youtubeLink: ''
    }
];


