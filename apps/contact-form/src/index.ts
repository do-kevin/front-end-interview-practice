/* eslint-disable turbo/no-undeclared-env-vars */
if (process.env.NODE_ENV === "development") {
  const { worker } = await import("./mocks/browser");
  worker.start();
}

const $form = document.querySelector("form");

interface FormValues {
  name: string;
  email: string;
  message: string;
}

const sendMessage = async (values: FormValues) => {
  try {
    const response = await fetch("/contact-form", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    const result = await response.json();

    if (result.errorMessage) {
      alert(result.errorMessage);
    }

    if (result.successMessage) {
      alert(result.successMessage);
    }

    console.log(result);
  } catch (error) {
    // errors are not being caught in catch block. MSW bug?
    console.error(error);
  }
};

const handleSubmit = (event: Event) => {
  event.preventDefault();

  const { name, email, message } = event.target as typeof event.target & {
    name: HTMLInputElement;
    email: HTMLInputElement;
    message: HTMLTextAreaElement;
  };

  const inputValues = {
    name: name.value,
    email: email.value,
    message: message.value,
  };

  return sendMessage(inputValues);
};

$form?.addEventListener("submit", handleSubmit);
