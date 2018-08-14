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
      status: 1
    },
    {
      title: 'CGX Stax innovation',
      thumbnail: 'https://dummyimage.com/600x400/000/fff',
      description: 'Lay`s Doritos, Tostitos',
      location: 'Russia',
      author: 'James Wilson',
      date: 'Nov. 2017',
      status: 1
    },
    {
      title: 'CGX Stax innovation',
      thumbnail: 'https://dummyimage.com/600x400/000/fff',
      description: 'Lay`s Doritos, Tostitos',
      location: 'Russia',
      author: 'James Wilson',
      date: 'Nov. 2017',
      status: 1
    },
    {
      title: 'CGX Stax innovation',
      thumbnail: 'https://dummyimage.com/600x400/000/fff',
      description: 'Lay`s Doritos, Tostitos',
      location: 'Russia',
      author: 'James Wilson',
      date: 'Nov. 2017',
      status: 1
    },
    {
      title: 'CGX Stax innovation',
      thumbnail: 'https://dummyimage.com/600x400/000/fff',
      description: 'Lay`s Doritos, Tostitos',
      location: 'Russia',
      author: 'James Wilson',
      date: 'Nov. 2017',
      status: 1
    },
    {
      title: 'CGX Stax innovation',
      thumbnail: 'https://dummyimage.com/600x400/000/fff',
      description: 'Lay`s Doritos, Tostitos',
      location: 'Russia',
      author: 'James Wilson',
      date: 'Nov. 2017',
      status: 1
    },
    {
      title: 'CGX Stax innovation',
      thumbnail: 'https://dummyimage.com/600x400/000/fff',
      description: 'Lay`s Doritos, Tostitos',
      location: 'Russia',
      author: 'James Wilson',
      date: 'Nov. 2017',
      status: 1
    },
    {
      title: 'CGX Stax innovation',
      thumbnail: 'https://dummyimage.com/600x400/000/fff',
      description: 'Lay`s Doritos, Tostitos',
      location: 'Russia',
      author: 'James Wilson',
      date: 'Nov. 2017',
      status: 1
    }
  ];

  constructor() { }

  getList(): Project[] {
    return this.demo;
  }
}
