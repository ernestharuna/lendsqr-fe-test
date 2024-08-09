import { AuditAndLogs, DecisionModels, FeesAndCharges, Guarantors, Home, Karma, Loans, Organisation, Preferences, Reports, Savings, SavingsProducts, Services, ServicesAccount, Settlements, Transactions, Users, WhiteList } from "../assets/icons/sidebar";

export const navbarItems = [
    {
        id: 1,
        description: '',
        menus: [
            {
                id: 11,
                icon: Home,
                description: 'Dashboard',
                path: '/'
            },
        ]
    },

    {
        id: 2,
        description: 'Customers',
        menus: [
            {
                id: 21,
                icon: Users,
                description: 'Users',
                path: '/users'
            },
            {
                id: 22,
                icon: Guarantors,
                description: 'Guarantors',
                path: '/guarantors'
            },
            {
                id: 23,
                icon: Loans,
                description: 'Loans',
                path: '/loans'
            },
            {
                id: 24,
                icon: DecisionModels,
                description: 'Decision Models',
                path: '/decision-models'
            },
            {
                id: 25,
                icon: Savings,
                description: 'Savings',
                path: '/savings'
            },
            {
                id: 26,
                icon: Loans,
                description: 'Loan Requests',
                path: '/loan-requests'
            },
            {
                id: 27,
                icon: WhiteList,
                description: 'White List',
                path: '/white-list'
            },
            {
                id: 28,
                icon: Karma,
                description: 'Karma',
                path: '/karma'
            },
        ],
    },

    {
        id: 3,
        description: "Businesses",
        menus: [
            {
                id: 31,
                icon: Organisation,
                description: 'Organization',
                path: '/organization'
            },
            {
                id: 32,
                icon: Loans,
                description: 'Loan Products',
                path: '/loan-products'
            },
            {
                id: 33,
                icon: SavingsProducts,
                description: 'Savings Products',
                path: '/savings-products'
            },
            {
                id: 34,
                icon: FeesAndCharges,
                description: 'Fees and Charges',
                path: '/fees-and-charges'
            },
            {
                id: 35,
                icon: Transactions,
                description: 'Transactions',
                path: '/transactions'
            },
            {
                id: 36,
                icon: Services,
                description: 'Services',
                path: '/services'
            },
            {
                id: 37,
                icon: ServicesAccount,
                description: 'Service Account',
                path: '/service-account'
            },
            {
                id: 38,
                icon: Settlements,
                description: 'Settlements',
                path: '/settlements'
            },
            {
                id: 39,
                icon: Reports,
                description: 'Reports',
                path: '/reports'
            },
        ]
    },

    {
        id: 4,
        description: 'Settings',
        menus: [
            {
                id: 41,
                icon: Preferences,
                description: 'Preferences',
                path: '/preferences',
            },
            {
                id: 42,
                icon: FeesAndCharges,
                description: 'Fees and Pricing',
                path: '/fees-and-pricing'
            },
            {
                id: 43,
                icon: AuditAndLogs,
                description: 'Audit Logs',
                path: '/audit-logs'
            },
        ]
    }
]