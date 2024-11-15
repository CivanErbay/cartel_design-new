<template>
  <form @submit="handleSubmit">
    <div
      v-for="(field, name) in formFields"
      :key="name"
      class="inline-flex w-full relative"
    >
      <template v-if="['text', 'email'].includes(field.blockType)">
        <input
          :type="field.blockType"
          v-model="formFields[name].value"
          :placeholder="formFields[name].label"
          class="text-base font-anuphan font-semibold uppercase text-secondary placeholder-secondary border-b-2 border-secondary focus:ring-white focus:border-secondary outline-none block w-full mb-5"
          required
        />
      </template>
      <template v-else-if="field.blockType === 'textarea'">
        <textarea
          v-model="formFields[name].value"
          rows="4"
          :placeholder="formFields[name].label"
          class="text-base font-anuphan font-semibold uppercase text-secondary placeholder-secondary border-b-2 border-secondary focus:ring-white focus:border-secondary outline-none block w-full mb-5"
          required
        />
      </template>
      <template v-else-if="field.blockType === 'checkbox'">
        <div class="flex items-center">
          <input
            type="checkbox"
            v-model="formFields[name].value"
            class="appearance-none flex-shrink-0 h-5 w-5 border-2 border-secondary rounded-none checked:bg-highlight cursor-pointer"
          />
          <label :for="name" class="ml-2">{{ formFields[name].label }}</label>
        </div>
      </template>
      <div
        v-if="validationErrors[name]"
        class="text-red-500 text-sm absolute right-0"
        :class="{ 'top-full': field.blockType === 'checkbox' }"
      >
        {{ validationErrors[name] }}
      </div>
    </div>
    <div class="flex flex-col items-end mb-5 lg:mb-0">
      <button class="mt-4 mx-6 float-right" @click="handleSubmit">
        {{ form.submitButtonLabel }}
      </button>
      <SlateRenderer
        v-if="submissionStatus === 'success'"
        :html="form.confirmationMessage"
      ></SlateRenderer>
      <div v-if="submissionStatus === 'error'" class="">Error!</div>
    </div>
  </form>
</template>

<script setup>
import SlateRenderer from './SlateRenderer.vue';

const props = defineProps({
  form: {
    type: Object,
    required: true,
  },
});

const { submitForm, submissionStatus } = useSubmitForm(
  props.form.id,
  props.form.confirmationMessage,
  props.form.redirect
);

const formFields = reactive(
  props.form.fields.reduce((acc, field) => {
    acc[field.name] = { ...field, value: field.value || '' };
    return acc;
  }, {})
);

const handleSubmit = async (event) => {
  event.preventDefault();
  if (validateFields()) {
    await submitForm(formFields);

    for (const name in formFields) {
      formFields[name].value = '';
    }
  }
};

const validationErrors = reactive({});

watch(
  () => formFields,
  (newFields) => {
    for (const [name, field] of Object.entries(newFields)) {
      if (validationErrors[name] && field.value) {
        validationErrors[name] = '';
      }
    }
  },
  { deep: true }
);

const validateFields = () => {
  let isValid = true;
  for (const [name, field] of Object.entries(formFields)) {
    if (field.required && !field.value) {
      validationErrors[name] = `${field.label} is required`;
      isValid = false;
    } else {
      validationErrors[name] = '';
    }
  }
  return isValid;
};
</script>
