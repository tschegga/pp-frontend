const auth = (state = [], action) => {
    switch (action.type) {
        case 'LOGIN':
            return [
                ...state,
                {
                    user: {
                        name: 'Silvan',
                        id: 2
                    }
                }
            ]
        default:
            return state
    }
}

export default auth