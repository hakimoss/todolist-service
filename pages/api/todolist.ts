import { getListDao } from '@/dao/todoDao';
import { addElementToList, deleteElementToList } from '@/services/todoService';
import { BadRequestException, Body, createHandler, Delete, Get, HttpCode, Post, ValidationPipe } from 'next-api-decorators';

class ToDoListHandler {
  @Get()
  getToDoList() {
    return getListDao();
  }
  @Post()
  createToDoList(@Body(ValidationPipe()) listElement: string) {
    addElementToList(listElement)
    return `You just add [${listElement}] to todoList.`;
  }

  @Delete()
  deleteToDoList(@Body(ValidationPipe()) listElement: string) {

    deleteElementToList(listElement)
    return `You just delete [${listElement}] from todoList.`;
  }
}

export default createHandler(ToDoListHandler);