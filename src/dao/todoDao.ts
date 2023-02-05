

export const getListDao = () => {
    return todoListDocument;
}

export const setListDao = (listElement: string) => {
    todoListDocument.push(listElement)
}

export const replaceListDao = (newTodoList: Array<string>) => {
    todoListDocument = newTodoList;
}


let todoListDocument: Array<string> = []