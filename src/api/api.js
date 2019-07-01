import {taskList} from '../model/model'

class Api {

    constructor (

    )

    get = (id = null) => {
        if (id == null)
            return taskList
        else
            return taskList[id - 1]
    }

    post = () => {
        taskList.push({
            name: `Name ${taskList.length + 1}`,
            type: '',
            description: '',
            created: `${Date.now()}`
        })
    }
}

export default Api