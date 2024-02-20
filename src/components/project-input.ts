/// <reference path="base-component.ts" />

namespace DragDropApp {
  export class ProjectInput extends Component<HTMLDivElement, HTMLFormElement>{
    titleInputElement: HTMLInputElement;
    descriptionInputElement: HTMLInputElement;
    peopleInputElement: HTMLInputElement;

    constructor() {
      super('project-input', 'app', true, 'user-input');

      this.titleInputElement = this.element.querySelector('#title') as HTMLInputElement;
      this.descriptionInputElement = this.element.querySelector('#description') as HTMLInputElement;
      this.peopleInputElement = this.element.querySelector('#people') as HTMLInputElement;

      this.configure();
    }

    private gatherUserInput(): [ string, string, number ] | undefined {
      const enteredTitle = this.titleInputElement.value;
      const enteredDescription = this.descriptionInputElement.value;
      const enteredPeople = this.peopleInputElement.value;

      const titleValidatable: Validator = {
        value: enteredTitle,
        required: true,
      };
      const descriptionValidatable: Validator = {
        value: enteredDescription,
        required: true,
        minLength: 5,
      };
      const peopleValidatable: Validator = {
        value: +enteredPeople,
        required: true,
        min: 1,
        max: 5,
      };

      if (!validate(titleValidatable) || !validate(descriptionValidatable) || !validate(peopleValidatable)) {
        alert('Invalid input, please try again!');
        return;
      } else {
        return [ enteredTitle, enteredDescription, +enteredPeople ];
      }
    }

    private clearInputs() {
      this.titleInputElement.value = '';
      this.descriptionInputElement.value = '';
      this.peopleInputElement.value = '';
    }

    @autoBind
    private submitHandler(event: Event) {
      event.preventDefault();
      const userInput = this.gatherUserInput();
      if (Array.isArray(userInput)) {
        const [ title, description, people ] = userInput;
        projectState.addProject(title, description, people);
        this.clearInputs();
      }
    }

    configure() {
      this.element.addEventListener('submit', this.submitHandler);
    }

    renderContent() {}
  }
}