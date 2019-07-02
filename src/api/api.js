import {taskList} from '../model/model'
import StorageApi from './storageApi'
import { observable } from 'mobx'

class Api {

    constructor ({key, list}) {
        this.key = key
        this.list = list
    }

    @observable list = []
    
    static build = async () => {
        let initData = await this.setInitialList()
        return new Api(initData)
    }

    static setInitialList = async() => {
        const key = 'tasks',
            data = await StorageApi.getData(key)
        let list = {}

        if (data == null)
            list = taskList
        else
            list = data
        return {key, list}
    }

    get = (id = null) => {
        if (id == null)
            return this.list
                .filter(item => true)
                .map(item => {
                    return {
                        name: item.name,
                        type: item.type,
                        type: item.description,
                        type: item.created,
                    }
                })
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

    save = async () => {
        try {
            return StorageApi.storeData(this.key, this.get())
        } catch(e) {
            console.log(e)
            return null
        }
    }
}

const api = Api.build();

export default api