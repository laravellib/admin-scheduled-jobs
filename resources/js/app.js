Nova.booting((Vue, router) => {
    Vue.component('admin-scheduled-jobs', require('./components/Card'))
    Vue.component('dispatch-job-modal', require('./components/DispatchJobModal'))

    router.addRoutes([{
        name: 'NovaScheduledJobs',
        path: '/scheduled-jobs',
        component: require('./components/Tool'),
    }, ])
})
