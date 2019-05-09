import { createStore } from 'redux'
export function changeName( name) {
    return {
        type: "NAME",
        name
    }
}
export function getName( name="您好" , action) {
    switch (action.type) {
        case 'NAME':
            return action.name
        default:
            return name
    }
}

export const store = createStore(getName);

