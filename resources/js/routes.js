export const routes = [
    {
        path: '/',
        name: "Home",
        component: () => import(/* webpackChunkName: "Home" */ "./components/Home.vue"),
    },

    {
        path: '/login',
        name: "Login",
        component: () => import(/* webpackChunkName: "Login" */ "./components/Login.vue")
    },

    {
        path: '/admin/panel',
        name: "Admin",
        component: () => import(/* webpackChunkName: "Admin" */ "./components/admin/Admin.vue")
        ,meta: { requiresAuth: true },
        children: [
            // {
            //     name: "Panel",
            //     component: () =>
            //     import(/* webpackChunkName: "Panel" */ "./components/account/Panel.vue"),
            //     path: "/account/payment",
            //     meta: { requiresAuth: true },
            // },
        ]
    },

    {
        path: '/register',
        name: "Register",
        component: () => import(/* webpackChunkName: "Register" */ "./components/Register.vue")
    },

    {
        path: '/account',
        name: "Account",
        component: () => import(/* webpackChunkName: "Account" */ "./components/Account.vue"),meta: { requiresAuth: true },
        children: [
            {
                name: "Payment",
                component: () =>
                import(/* webpackChunkName: "Payment" */ "./components/account/Payment.vue"),
                path: "/account/payment",
                meta: { requiresAuth: true },
            },
            {
                name: "Security",
                component: () =>
                import(/* webpackChunkName: "Security" */ "./components/account/Security.vue"),
                path: "/account/security",
                meta: { requiresAuth: true }
            },
            {
                name: "Order",
                component: () =>
                import(/* webpackChunkName: "Order" */ "./components/account/Order.vue"),
                path: "/account/order",
                meta: { requiresAuth: true },
                children: [
                    {
                        name: "Receive",
                        component: () =>
                        import(/* webpackChunkName: "Receive" */ "./components/account/order/Receive.vue"),
                        path: "/account/order/receive",
                        meta: { requiresAuth: true }
                    },
                    {
                        name: "Complete",
                        component: () =>
                        import(/* webpackChunkName: "Complete" */ "./components/account/order/Complete.vue"),
                        path: "/account/order/complete",
                        meta: { requiresAuth: true }
                    },

                ]
            },

            {
                name: "Review",
                component: () =>
                import(/* webpackChunkName: "Complete" */ "./components/Review.vue"),
                path: "/account/review",
                meta: { requiresAuth: true }
            },

            {
                name: "Voucher",
                component: () =>
                import(/* webpackChunkName: "Voucher" */ "./components/account/Voucher.vue"),
                path: "/account/voucher",
            }
        ]
    },

    {
        path: '/cart',
        name: "Cart",
        component: () => import(/* webpackChunkName: "Cart" */ "./components/Cart.vue"),
        meta: { requiresAuth: true }
    },

    {
        path: '/store/:name/:id',
        name: "Store",
        component: (store) => import(/* webpackChunkName: "Store" */ "./components/Store.vue"),
        meta: { requiresAuth: true },
        children: [
            {
                name: "StoreProduct",
                component: () =>
                import(/* webpackChunkName: "StoreProduct" */ "./components/store/StoreProduct.vue"),
                path: "/store/:name/products/:id",
            },
            {
                path: "/store/:name/products/sale/:id",
                name: "StoreSale",
                component: () =>
                    import(/* webpackChunkName: "StoreSale" */ "./components/store/StoreSale.vue"),
            },
        ]
    },

    {
        path: '/product/:name/:id',
        name: "Product",
        component: () => import(/* webpackChunkName: "Product" */ "./components/Product.vue"),
        meta: { requiresAuth: true }
    },

    {
        path: "*",
        name: "NotFound",
        component: () => import(/* webpackChunkName: "NotFound" */ "./components/NotFound.vue"),
    },

]
