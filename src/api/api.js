import {taskList} from '../model/model'
import StorageApi from './storageApi'

class Api {

    constructor () {
        this.key = 'tasks'
        this.storage = new StorageApi()
        this.setInitialList()
    }

    setInitialList = () => {
        this.storage.getData(this.key)
            .then((data) => {
                if (data == null)
                    this.list = taskList
                else
                    this.list = data
            })
    }

    get = (id = null) => {
        if (id == null)
            return this.list
        else
            return this.list[id]
    }

    post = async () => {
        this.list.push({
            name: `Name ${this.list.length + 1}`,
            type: '',
            description: '',
            created: `${Date.now()}`
        })

        return await this.save()
    }

    find = (created) => {
        this.list.forEach((item, index) => {
            if (item.created == created)
                return index
        });
    }

    put = async (field, val, created) => {
        const id = this.find(created)

        this.list[id][field] = val

        return await this.save()
    }

    save = () => {
        return this.storage.storeData(this.key, this.list)
    }
}

export default Api