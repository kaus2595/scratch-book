import { Injectable } from '@nestjs/common';
import { Task } from './task.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskDto } from './dto/task.dto';

@Injectable()
export class TaskService {
    constructor(
        @InjectRepository(Task)
        private TaskRepository : Repository<Task>,
    ) {}
}
