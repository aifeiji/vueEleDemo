import Vue from 'vue';
import Router from 'vue-router';

import report from '../components/report/report.vue';
import detail from '../components/report/detail.vue';

import dashboard from '../components/dashboard/dashboard.vue';
import dataSource from '../components/dataSource/dataSource.vue';

Vue.use(Router);
export default new Router({
    routes: [
        {
            path: '/report',
            component: report,
            children: [
                {
                    path: 'detail',
                    component: detail
                }
            ]
        },
        {
            path: '/dashboard',
            component: dashboard
        },
        {
            path: '/dataSource',
            component: dataSource
        }
    ]
});
