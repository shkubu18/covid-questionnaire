<template>
  <div class="flex flex-col mb-10">
    <label v-if="label" :for="name" class="text-2xl font-bold mb-2">{{ label + "*" }}</label>
    <Field
        :id="name"
        :name="name"
        :placeholder="placeholder"
        :rules="rules"
        :value="modelValue"
        class="p-3 bg-transparent border-2 border-gray-600 placeholder:text-gray-600 focus:outline-none"
        type="text"
        @input="$emit('update:modelValue', $event.target.value)"
    />
    <ErrorMessage :name="name" class="ml-3.5 mt-3 text-error-message-color"/>
  </div>
</template>

<script>
import {Field, ErrorMessage} from "vee-validate";

export default {
  components: {
    Field,
    ErrorMessage
  },
  props: {
    name: {
      required: true,
      type: String,
    },
    placeholder: {
      required: true,
      type: String
    },
    rules: {
      required: true,
      type: String
    },
    label: {
      required: false,
      type: String
    },
    modelValue: {
      required: true,
      type: String
    }
  },
  emits: ['update:modelValue']
}
</script>