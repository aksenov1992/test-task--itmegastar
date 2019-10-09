export default {
    state: {
        deps: [
            {name: 'Marketing', description: 'Marketing description'},
            {name: 'Support', description: 'Support description'},
            {name: 'Accounting', description: 'Accounting description'},
            {name: 'General', description: 'General description'},
            {name: 'Administrative', description: 'Administrative description'}
        ],
        employee: [
            {firstName: 'Aleksey', lastName: 'Alekseyyy', departmentId: 'Support'},
            {firstName: 'Andrey', lastName: 'Andreyyy', departmentId: 'Support'},
            {firstName: 'Artem', lastName: 'Artemmm', departmentId: 'Support'}
        ]
    },

    mutations: {
        addEmployee: (state, payload) => {
            state.employee.push({
                firstName: payload.name,
                lastName: payload.lastName,
                departmentId: payload.departmentId,
            })
        },
        addDeps: (state, payload) => {
            state.deps.push({
                name: payload.name,
                description: payload.description,
            })
        },
        removeData: (state, payload) => {
            if ('name' in payload) {
                state.deps = state.deps.filter(el => el.name !== payload.name);
            } else if ('firstName' in payload) {
                state.employee = state.employee.filter(el => el.lastName !== payload.lastName);
            }
        }
    }
}
