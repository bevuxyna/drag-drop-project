import { ProjectInput } from './components/project-input.js';
import { ProjectList } from './components/project-list.js';

namespace DragDropInterfaces {
  new ProjectInput();
  new ProjectList('active');
  new ProjectList('finished');
}