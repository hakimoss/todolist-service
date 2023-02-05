import { getListDao } from '@/dao/todoDao';
import { addElementToList, deleteElementToList } from '@/services/todoService';
import { BadRequestException, Body, createHandler, Delete, Get, HttpCode, Post, ValidationPipe } from 'next-api-decorators';

class ToDoListHandler {
  @Get()
  getToDoList() {
    return getListDao();
  }
  @Post()
  createToDoList(@Body(ValidationPipe()) listElement: string[]) {
    console.log('typeof listElement', Array.isArray(listElement));
    addElementToList(listElement[0])
    if(!Array.isArray(listElement)) {
        throw new BadRequestException("wrong type of data, need an array");
    }
    
    return `You just add [${listElement[0]}] to todoList.`;
  }
  @Delete()
  deleteToDoList(@Body(ValidationPipe()) listElement: Array<string>) {
    if(!Array.isArray(listElement)) {
        throw new BadRequestException("wrong type of data, need an array");
    }
    deleteElementToList(listElement[0])
    return `You just delete [${listElement[0]}] from todoList.`;
  }
}

export default createHandler(ToDoListHandler);