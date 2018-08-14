import { Injectable } from '@angular/core';
import { Project } from './interface/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  demo: Project[] = [
    {
      title: 'CGX Stax innovation',
      thumbnail: 'https://dummyimage.com/600x400/000/fff',
      description: 'Lay`s Doritos, Tostitos',
      location: 'Russia',
      author: 'James Wilson',
      date: 'Nov. 2017',
      status: 'Success'
    },
    {
      title: 'CGX Stax innovation',
      thumbnail: 'https://dummyimage.com/600x400/000/fff',
      description: 'Lay`s Doritos, Tostitos',
      location: 'Russia',
      author: 'James Wilson',
      date: 'Nov. 2017',
      status: 'Success'
    },
    {
      title: 'CGX Stax innovation',
      thumbnail: 'https://dummyimage.com/600x400/000/fff',
      description: 'Lay`s Doritos, Tostitos',
      location: 'Russia',
      author: 'James Wilson',
      date: 'Nov. 2017',
      status: 'Success'
    },
    {
      title: 'CGX Stax innovation',
      thumbnail: 'https://dummyimage.com/600x400/000/fff',
      description: 'Lay`s Doritos, Tostitos',
      location: 'Russia',
      author: 'James Wilson',
      date: 'Nov. 2017',
      status: 'Success'
    },
    {
      title: 'CGX Stax innovation',
      thumbnail: 'https://dummyimage.com/600x400/000/fff',
      description: 'Lay`s Doritos, Tostitos',
      location: 'Russia',
      author: 'James Wilson',
      date: 'Nov. 2017',
      status: 'Success'
    },
    {
      title: 'CGX Stax innovation',
      thumbnail: 'https://dummyimage.com/600x400/000/fff',
      description: 'Lay`s Doritos, Tostitos',
      location: 'Russia',
      author: 'James Wilson',
      date: 'Nov. 2017',
      status: 'Success'
    },
    {
      title: 'CGX Stax innovation',
      thumbnail: 'https://dummyimage.com/600x400/000/fff',
      description: 'Lay`s Doritos, Tostitos',
      location: 'Russia',
      author: 'James Wilson',
      date: 'Nov. 2017',
      status: 'Success'
    },
    {
      title: 'CGX Stax innovation',
      thumbnail: 'https://dummyimage.com/600x400/000/fff',
      description: 'Lay`s Doritos, Tostitos',
      location: 'Russia',
      author: 'James Wilson',
      date: 'Nov. 2017',
      status: 'Success'
    }
  ];

  constructor() { }

  getList(): Project[] {
    return this.demo;
  }
}
