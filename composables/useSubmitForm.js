export const SubmissionStates = {
  idle: 'idle',
  submitting: 'submitting',
  success: 'success',
  error: 'error',
};

const API_URL = import.meta.env.VITE_API_ENDPOINT;

export const useSubmitForm = (formID, confirmationType, redirect) => {
  const router = useRouter();
  const submissionStatus = ref(SubmissionStates.idle);

  const submitForm = async (data) => {
    submissionStatus.value = SubmissionStates.submitting;

    try {
      const dataToSend = Object.entries(data).map(([name, field]) => ({
        field: name,
        value: field.value,
      }));

      const req = await fetch(`${API_URL}/form-submissions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          form: formID,
          submissionData: dataToSend,
        }),
      });

      const res = await req.json();

      if (confirmationType === 'redirect' && redirect) {
        const { url } = redirect;

        const redirectUrl = url;

        if (redirectUrl) router.push(redirectUrl);
      } else {
        submissionStatus.value = SubmissionStates.success;
      }
    } catch (error) {
      submissionStatus.value = SubmissionStates.error;
    }
  };

  return { submissionStatus, submitForm };
};
