/// <reference path="models/drag-drop.ts" />
/// <reference path="models/project.ts" />
/// <reference path="state/project-state.ts" />
/// <reference path="utils/validation.ts" />
/// <reference path="decorators/autobind.ts" />
/// <reference path="components/base-component.ts" />
/// <reference path="components/project-item.ts" />
/// <reference path="components/project-input.ts" />
/// <reference path="components/project-list.ts" />

namespace DragDropInterfaces {
  import ProjectInput = DragDropApp.ProjectInput;
  import ProjectList = DragDropApp.ProjectList;

  new ProjectInput();
  new ProjectList('active');
  new ProjectList('finished');
}