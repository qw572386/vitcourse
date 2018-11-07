const routers = [
    {
        path: '/',
        meta: {
            title: '首页'
        },
        redirect: '/home',
        component: (resolve) => require(['@/views/index.vue'], resolve),
        children: [
            {
                path: 'home',
                meta: {
                    title: '首页'
                },
                component: (resolve) => require(['@/views/home/index.vue'], resolve)
            },
            {
                path: 'detail/:id',
                name: 'detail',
                component: (resolve) => require(['@/views/courses/detail.vue'], resolve)
            }
        ]
    },
    {
        path: '/login',
        meta: {
            title: ''
        },
        component: (resolve) => require(['@/views/login/login.vue'], resolve)
    }
];
export default routers;
