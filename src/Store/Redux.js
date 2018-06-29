import { createStore } from 'redux'

//------Store------

const initialState = {
    projects: [
        {
            title: 'Asset Management',
            projid: 'PROJ01'
        },
        {
            title: 'Web Development',
            projid: 'PROJ02'
        },
        {
            title: 'App Studio',
            projid: 'PROJ03'
        }
    ]
}

const store = createStore(projectApp, initialState)

export default store;






//------Actions------

function addProject(title, projid) {
    return {
        type: 'ADD_PROJECT',
        payload: {
            title,
            projid
        }
    }
}

function removeProject(projid) {
    return {
        type: 'REMOVE_PROJECT',
        payload: {
            projid
        }
    }
}







//------Reducers------

function projectApp (state=initialState, action) {
    switch(action.type) {
        case 'ADD_PROJECT': {
            return Object.assign({}, state, {
                projects: [
                    ...state.projects,
                    {
                        title: action.payload.title,
                        projid: action.payload.projid
                    }
                ]
            })
        }
        case 'REMOVE_PROJECT': {
            return Object.assign({}, state, {
                projects: [
                    ...state.projects.filter(project => project.projid !== action.payload.projid)
                ]
            })
        }
        default: {
            return state
        }
    }
}

