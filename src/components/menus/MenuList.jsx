export const menuList = [
    {
        route: "/",
        name: "mainMenu",
        text: "صفحه اصلی"
    },
    {
        route: "/buySite",
        name: "buySite",
        text: "خرید سایت"
    },
    {
        route: "/packages",
        name: "packages",
        text: "تعرفه و امکانات"
    },
    {
        route: "/portfolio",
        name: "portfolio",
        text: "نمونه کارها",
        submenu: [
            {
                route: "/portfolio/sub1",
                name: "portfolioSub1",
                text: "نمونه کارهای 1",
            },
            {
                route: "/portfolio/sub2",
                name: "portfolioSub2",
                text: "نمونه کارهای 1",
            },
        ]
    },
    {
        route: "/aboutus",
        name: "aboutUs",
        text: "درباره ما"
    },
    {
        route: "/contactUs",
        name: "contactUs",
        text: "تماس با ما"
    },
    {
        route: "/consultation",
        name: "consultation",
        text: "راهنمای راشین وب"
    },
    {
        route: "/",
        name: "tickets",
        text: "سامانه پشتیبانی"
    }
];