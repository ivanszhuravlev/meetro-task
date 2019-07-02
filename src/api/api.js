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
            list = JSON.parse(data)
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
                        description: item.description,
                        created: item.created,
                    }
                })
        else
            return this.list[id]
    }

    post = () => {
        this.list.push({
            name: `Name ${this.list.length + 1}`,
            type: '',
            description: '',
            created: `${Date.now()}`,
        })

        this.save()
    }

    find = (created) => {
        const index = this.list.some((item, i) => {
            if (item.created == created) {
                return i
            }
        });

        return index
    }

    put = (field, val, created) => {
        const id = this.find(created)

        this.list[id][field] = val

        this.save()
    }

    delete = (created) => {
        const id = this.find(created)
        this.list.splice(id, 1)

        this.save()
    }

    save = () => {
        try {
            StorageApi.storeData(this.key, this.get())
        } catch(e) {
            console.log(e)
            return null
        }
    }
}

const api = Api.build();

export default api