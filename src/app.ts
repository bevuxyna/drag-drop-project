/// <reference path="components/project-input.ts" />
/// <reference path="components/project-list.ts" />

namespace DragDropInterfaces {
  import ProjectInput = DragDropApp.ProjectInput;
  import ProjectList = DragDropApp.ProjectList;

  new ProjectInput();
  new ProjectList('active');
  new ProjectList('finished');
}