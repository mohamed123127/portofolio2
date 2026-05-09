export interface Project {
    title: string;
    descreption: string;
    imageUrls: string[];
    githubUrl: string;
    pageUrl?: string;
    tags: string[];
    types: ProjectsTypes[];
    date: string;
}

export enum ProjectsTypes{
    WEB = 0,
    DESKTOP = 1
}

export const Projects: Project[] = [
    // {
    //     title: "Inventory and Sales Management System",
    //     descreption: "Inventory and Sales Management System is a lightweight application designed to manage stock and sales efficiently. It features support for product variants and includes most essential functionalities such as inventory tracking, sales processing, and basic reporting",
    //     imageUrls: [
    //         "/images/projects/desktop/SalesManagement/0-Primary.png",
    //         "/images/projects/desktop/SalesManagement/1-Login.png",
    //         "/images/projects/desktop/SalesManagement/2-Main.png",
    //         "/images/projects/desktop/SalesManagement/3-Products.png",
    //         "/images/projects/desktop/SalesManagement/4-AddProduct.png",
    //         "/images/projects/desktop/SalesManagement/5-ProductsVariants.png",
    //         "/images/projects/desktop/SalesManagement/6-FiltredProductsVariants.png",
    //         "/images/projects/desktop/SalesManagement/7-Sale.png",
    //         "/images/projects/desktop/SalesManagement/8-Bill.png",
    //         "/images/projects/desktop/SalesManagement/9-Sales.png",
    //         "/images/projects/desktop/SalesManagement/10-SaleDetailles.png",
    //         "/images/projects/desktop/SalesManagement/11-Safe.png",
    //         "/images/projects/desktop/SalesManagement/12-GeneraleSettings.png",
    //         "/images/projects/desktop/SalesManagement/13-StoreInformationSettings.png",
    //         "/images/projects/desktop/SalesManagement/14-DatabaseSettings.png",
    //         "/images/projects/desktop/SalesManagement/15-OurInformation.png",
    //     ],
    //     githubUrl: "-",
    //     pageUrl: "/Projects/InventoryAndSalesManagementSystem",
    //     tags: ["WinForms","C#","SQL Server"],
    //     types: [ProjectsTypes.DESKTOP],
    //     date: "March 2023"
    // },
    {
        title: "University Request Management System",
        descreption: "University Request Management System is a digital platform that streamlines student requests and improves administrative processing. It supports multilingual access, notifications, PDF request delivery, and includes complaint handling with admin statistics",
        imageUrls: [
            "/images/projects/web/UnivversityRequestManagementSystem/0-Primary.png",
            "/images/projects/web/UnivversityRequestManagementSystem/1-Login.png",
            '/images/projects/web/UnivversityRequestManagementSystem/2-SingUp.png',
            "/images/projects/web/UnivversityRequestManagementSystem/3-DashboardSimpleStudent(StudentSide).png",
            "/images/projects/web/UnivversityRequestManagementSystem/4-DashboardDeleguiteStudentAndNotification(StudentSide).png",
            "/images/projects/web/UnivversityRequestManagementSystem/5-DocumentRequest(StudentSide).png",
            "/images/projects/web/UnivversityRequestManagementSystem/6-DocumentRequestPdfView(StudentSide).png",
            "/images/projects/web/UnivversityRequestManagementSystem/7-VisualRequest(StudentSide).png",
            "/images/projects/web/UnivversityRequestManagementSystem/8-ReportProblem(StudentSide).png",
            "/images/projects/web/UnivversityRequestManagementSystem/9-ManageAccount(StudentSide).png",
            "/images/projects/web/UnivversityRequestManagementSystem/10-Student(AdminSide).png",
            "/images/projects/web/UnivversityRequestManagementSystem/11-DocumentRequest(AdminSide).png",
            "/images/projects/web/UnivversityRequestManagementSystem/12-VisualRequest(AdminSide).png",
            "/images/projects/web/UnivversityRequestManagementSystem/13-Announcement(AdminSide).png",
            "/images/projects/web/UnivversityRequestManagementSystem/14-Problems(AdminSide).png",
            "/images/projects/web/UnivversityRequestManagementSystem/15-Admins(AdminSide).png"
        ],
        githubUrl: "https://github.com/mohamed123127/University-management.git",
        pageUrl: "/Projects/UniversityRequestManagementSystem",
        tags: ["React","Tailwend","PHP","MySQL"],
        types: [ProjectsTypes.WEB],
        date: 'June 2025'
    },
    {
        title: "Software Engineering Portfolio",
        descreption: "A clean and modern developer portfolio showcasing my background, technical skills, selected projects, and an easy way to get in touch — all organized into clear sections: Home, About, Skills, Projects, and Contact, where users can send an email directly. The portfolio is fully responsive and optimized for all devices.",
        imageUrls: [
            "/images/projects/web/Portofolio/0-Primary.png",
            "/images/projects/web/Portofolio/1-FullWebsite.PNG"
        ],
        githubUrl: "https://github.com/mohamed123127/MyPortofolio",
        pageUrl: "-",
        tags: ["Next.js","TypeScript","Tailwend CSS","Motion framer"],
        types: [ProjectsTypes.WEB],
        date: "March 2025"
    },
    {
        title: "Ecommerce store",
        descreption: "A full-featured modern Ecommerce platform offering an intuitive shopping experience with advanced product browsing, filtering, wishlist functionality, cart management, and integrated shipping services. The store includes dynamic product pages, powerful filters (category, gender, size, color, and price range), a favorites system, and a smooth checkout flow with shipping API integration and email contact support.",
        imageUrls: [
            "/images/projects/web/EcommerceStore/0-Mockup.JPG",
            "/images/projects/web/EcommerceStore/1-Products.png",
            "/images/projects/web/EcommerceStore/2-Products(Mobile).png",
            "/images/projects/web/EcommerceStore/3-Filters(Mobile).png",
            "/images/projects/web/EcommerceStore/4-ProductView.png",
            "/images/projects/web/EcommerceStore/5-WhiteList.png",
            "/images/projects/web/EcommerceStore/6-CardView(Mobile).png",
            "/images/projects/web/EcommerceStore/7-OrderProcess.png",
            "/images/projects/web/EcommerceStore/8-OrderSubmited(Mobile).png",
            "/images/projects/web/EcommerceStore/9-OrdersView(Admin).png"
        ],
        githubUrl: "https://github.com/mohamed123127/ClotingStore",
        pageUrl: "/Projects/ClothingStore",
        tags: ["Next.js","TypeScript","Tailwend CSS","Redux","laravel","MySql"],
        types: [ProjectsTypes.WEB],
        date: "October 2025"
    },
    {
        title: "Easy Ecommerce (All-in-One Inventory and Sales Management System (under development))",
        descreption: "Easy Ecommerce (All-in-One Inventory and Sales Management System) is a large-scale solution built for web, desktop, and mobile platforms. It supports in-store and online sales, order tracking, shipping management via third-party shipping APIs, and seamless synchronization across all platforms",
        imageUrls: [
            "/images/projects/desktop_web/EasyEcommerce/0-Mockup.JPG",
            "/images/projects/desktop_web/EasyEcommerce/1-Products.jpg",
            "/images/projects/desktop_web/EasyEcommerce/2-AddProduct.png"
        ],
        githubUrl: "-",
        pageUrl: "/Projects/EasyEcommerce",
        tags: ["Wpf","Next.js","Tailwend CSS","Rest API",".Net Core","SQL Server"],
        types:[ProjectsTypes.DESKTOP,ProjectsTypes.WEB],
        date: '-'
    }
]