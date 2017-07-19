/**
 * Created by shenyuye on 2017/7/13.
 */
import report from '../components/report/report.vue';
import dashboard from '../components/dashboard/dashboard.vue';
import dataSource from '../components/dataSource/dataSource.vue';

const PAGE_LEFT_NAV = [
    {
        path: 'report',
        component: report
    },
    {
        path: 'dashboard',
        component: dashboard
    },
    {
        path: 'dataSource',
        component: dataSource
    }
];
const config = {
    routes: PAGE_LEFT_NAV
};
export default {
    config
};
