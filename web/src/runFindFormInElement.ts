export function runFindFormInElement(element: Element): HTMLFormElement {
    const form = element.querySelector("form");

    if (form instanceof HTMLFormElement) {
        return form;
    }

    throw new Error("UsernameForm does not contain a <form>");
}
