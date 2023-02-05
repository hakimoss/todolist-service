import { getListDao } from '@/dao/todoDao';
import { addElementToList, deleteElementToList } from '@/services/todoService';
import { BadRequestException, Body, createHandler, Delete, Get, HttpCode, Post, ValidationPipe } from 'next-api-decorators';

type ListElement = {
  element: string;
}

class ToDoListHandler {
  @Get()
  getToDoList() {
    return getListDao();
  }
  @Post()
  createToDoList(@Body(ValidationPipe()) listElement: ListElement) {
    addElementToList(listElement.element)
    if(typeof listElement === "string") {
        throw new BadRequestException("wrong type of data, need an string");
    }
    
    return `You just add [${listElement.element}] to todoList.`;
  }
  @Delete()
  deleteToDoList(@Body(ValidationPipe()) listElement: ListElement) {
    if(typeof listElement === "string") {
      throw new BadRequestException("wrong type of data, need an string");
    }
    deleteElementToList(listElement.element)
    return `You just delete [${listElement.element}] from todoList.`;
  }
}

export default createHandler(ToDoListHandler);