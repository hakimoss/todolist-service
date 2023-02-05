import { getListDao, setListDao } from "@/dao/todoDao"


export const addElementToList = (listElement: string) => {
    setListDao(listElement)

}

export const getTodolist = () => {
    return getListDao()
}

export const deleteElementToList = (listElement: string) => {
    const todoList = getListDao()
    const index = todoList.indexOf(listElement);
    if (index > -1) { // only splice array when item is found
        todoList.splice(index, 1); // 2nd parameter means remove one item only
    }

}