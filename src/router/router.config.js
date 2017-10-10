/**
 * Created by shenyuye on 2017/7/13.
 */
import report from '../view/report.vue';
// import detail from '../components/report/detail.vue';
import dashboard from '../view/dashboard.vue';
import dataSource from '../view/dataSource.vue';

const PAGE_LEFT_NAV = [
    {
        path: '/report',
        component: report
    },
    {
        path: '/dashboard',
        component: dashboard
    },
    {
        path: '/dataSource',
        component: dataSource
    }
];
const config = {
    routes: PAGE_LEFT_NAV
};
export default {
    config
};
