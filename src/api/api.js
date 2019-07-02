import {taskList} from '../model/model'
import StorageApi from './storageApi'

class Api {

    constructor ({storage, key, list}) {
        this.key = key
        this.storage = storage
        this.list = list
    }
    
    static build = async () => {
        let initData = await this.setInitialList()
        return new Api(initData)
    }

    static setInitialList = async() => {
        const storage = new StorageApi(),
            key = 'tasks',
            data = await storage.getData(key)
        let list = {}
        
        if (data == null)
            list = taskList
        else
            list = data
        return {storage, key, list}
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

    delete = async (created) => {
        const id = this.find(created)

        this.list.splice(id, 1)

        return await this.save()
    }

    save = () => {
        return this.storage.storeData(this.key, this.list)
    }
}

export default Api