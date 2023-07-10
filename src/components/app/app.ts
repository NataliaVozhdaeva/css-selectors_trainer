import { CodeView } from '../../view/code-levels';
import { LayoutView } from '../../view/layot-levels';
import { TaskView } from '../../view/task-levels';
import { answears, tasks, codes, layouts } from '../const';

export default class Game {
    levels = document.querySelectorAll<HTMLElement>('.level-item');
    currentLevel = 0;
    taskComponents: object[] = tasks;
    taskContainer;
    taskContent = this.taskComponents[this.currentLevel];
    task = '';
    codeComponents: object[] = codes;
    htmlEditor;
    htmlContent = this.codeComponents[this.currentLevel];
    layout;
    layoutComponents: object[] = layouts;
    layoutContent = this.layoutComponents[this.currentLevel];
    el;
    input;
    okBtn;
    answearsArr: Array<string | object> = answears;
    answears: string | object;

    constructor() {
        this.taskContainer = document.querySelector<HTMLElement>('.task');
        this.htmlEditor = document.querySelector<HTMLElement>('.html-view');
        this.layout = document.querySelector<HTMLElement>('.game-part');

        this.answears = this.answearsArr[this.currentLevel];

        this.el = document.querySelectorAll<HTMLElement>('.el');
        this.input = document.querySelector<HTMLInputElement>('.input');
        this.okBtn = document.querySelector<HTMLElement>('.btn');

        /*  document.addEventListener('keyup', function (event) {
        if (event.code === 'Enter') {
            checkAnswear();
        }
    });  */
    }

    init(): void {
        this.levels[this.currentLevel].classList.add('current');

        if (!this.htmlEditor || !this.layout || !this.taskContainer) throw TypeError;

        this.layout.innerHTML = new LayoutView(this.layoutContent).render;
        this.htmlEditor.innerHTML = new CodeView(this.htmlContent).render;
        this.taskContainer.innerHTML = new TaskView(this.taskContent).render;

        console.log(this.answears);
        this.okBtn?.addEventListener('click', this.checkAnswear);
    }

    checkAnswear(): void {
        this.input = document.querySelector<HTMLInputElement>('.input');
        if (!this.input) throw TypeError;

        console.log(this.answears);

        if (
            this.input.value === this.answears
            /* ||
            this.input.value === answears[this.currentLevel][0] ||
            this.input.value === answears[this.currentLevel][1] */
        ) {
            console.log(true);
            /*  this.input.value = '';
            this.el.forEach((element) => element.classList.add('disappear'));
            this.levels[this.currentLevel].classList.remove('current');
            this.levels[this.currentLevel].classList.add('done');
            this.currentLevel += 1;
            this.levels[this.currentLevel].classList.add('current'); */

            setTimeout(() => {
                if (!this.htmlEditor || !this.layout || !this.task) throw TypeError;

                this.htmlEditor.innerHTML = '';
                this.layout.innerHTML = '';
                //his.task.innerHTML = '';
                //this.init(this.currentLevel);
                //interactivity();
            }, 1500);
        } else {
            /* this.el.forEach((element) => {
                if (!this.input) throw TypeError;

                element.classList.add('shake');
                this.input.value = '';
                setTimeout(() => {
                    element.classList.remove('shake');
                }, 1500);
                
            }) */
            console.log(false);
        }
    }
}

/*
let currentLevel = 0;
const level = document.querySelector<HTMLElement>('.level');
const levels = document.querySelectorAll<HTMLElement>('.level-item');

level?.addEventListener('click', (e): void => {
    if (!e.target) throw TypeError;
    const levelName = e.target as HTMLButtonElement;
    currentLevel = Number(levelName.dataset.num);
    init(currentLevel);
    interactivity();
});

export function init(currentLevel: number): void {
    const htmlEditor = document.querySelector<HTMLElement>('.html-view');
    const taskContainer = document.querySelector<HTMLElement>('.task');
    const layout = document.querySelector<HTMLElement>('.game-part');
    levels[currentLevel].classList.add('current');

    if (!htmlEditor || !layout || !taskContainer) throw TypeError;

    htmlEditor.innerHTML = codeComponents[currentLevel];
    layout.innerHTML = layioutComponents[currentLevel];
     taskContainer.innerHTML = taskComponents[currentLevel];
}

export function interactivity(): void {
    const el = document.querySelectorAll<HTMLElement>('.el');
    const tag = document.querySelectorAll<HTMLElement>('.tag');
    el?.forEach((element, index): void => {
        element.addEventListener('mouseenter', (): void => {
            tag[index].classList.add('hover');

            const popup: HTMLElement = document.createElement('div');
            popup.className = 'popup';
            popup.textContent = tag[index].textContent;
            element.append(popup);
        });

        element.addEventListener('mouseleave', (): void => {
            tag[index].classList.remove('hover');
            document.querySelector('.popup')?.remove();
        });
    });

    tag.forEach((element, index): void => {
        element.addEventListener('mouseenter', (): void => {
            el[index].classList.add('hover');

            const popup: HTMLElement = document.createElement('div');
            popup.className = 'popup';
            popup.textContent = tag[index].textContent;
            el[index].append(popup);
        });

        element.addEventListener('mouseleave', (): void => {
            el[index].classList.remove('hover');
            document.querySelector('.popup')?.remove();
        });
    });
}

const okBtn = document.querySelector<HTMLElement>('.btn');
okBtn?.addEventListener('click', checkAnswear);
document.addEventListener('keyup', function (event) {
    if (event.code === 'Enter') {
        checkAnswear();
    }
});

function checkAnswear(): void {
    const el = document.querySelectorAll<HTMLElement>('.el');
    const input = document.querySelector<HTMLInputElement>('.input');
    const htmlEditor = document.querySelector<HTMLElement>('.html-view');
    const layout = document.querySelector<HTMLElement>('.game-part');
    const task = document.querySelector<HTMLElement>('.task');

    if (!input) throw TypeError;

    if (
        input.value === answears[currentLevel] ||
        input.value === answears[currentLevel][0] ||
        input.value === answears[currentLevel][1]
    ) {
        input.value = '';
        el.forEach((element) => element.classList.add('disappear'));
        levels[currentLevel].classList.remove('current');
        levels[currentLevel].classList.add('done');
        currentLevel += 1;
        levels[currentLevel].classList.add('current');

        if (!htmlEditor || !layout || !task) throw TypeError;
        setTimeout(() => {
            htmlEditor.innerHTML = '';
            layout.innerHTML = '';
            task.innerHTML = '';
            init(currentLevel);
            interactivity();
        }, 1500);
    } else {
        el.forEach((element) => {
            element.classList.add('shake');
            input.value = '';
            setTimeout(() => {
                element.classList.remove('shake');
            }, 1500);
        });
    }
} */
