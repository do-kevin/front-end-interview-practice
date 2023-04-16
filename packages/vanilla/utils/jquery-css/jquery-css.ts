interface JQuery {
  css: (prop: string, value?: boolean | string | number) => JQuery;
}

export default function $(selector: string): JQuery {
  const $element = document.querySelector(selector) as HTMLElement;

  return {
    css: function setStyle(property, value) {
      if (value === undefined) {
        if ($element === null) {
          return undefined;
        }

        const currentValue = $element.style[property];

        if (currentValue === undefined || currentValue === "") {
          return undefined;
        }

        return currentValue;
      }

      if ($element) {
        $element.style[property] = value;
      }

      return this;
    },
  };
}
