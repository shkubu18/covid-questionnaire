<template>
  <div class="flex items-center pl-6 mb-6" @click="handleClick">
    <Field
        :id="id"
        :modelValue="modelValue"
        :name="name"
        :rules="rules"
        :value="value"
        class="text-black focus:ring-0 h-6 w-6 accent-black"
        type="radio"
        @input="$emit('update:modelValue', $event.target.value)"
    />
    <label :for="id" class="text-xl font-bold ml-4">{{ label }}</label>
  </div>
  <ErrorMessage v-if="showError" :name="name" class="pl-3.5 text-error-message-color"/>
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
    rules: {
      required: true,
      type: String
    },
    id: {
      required: true,
      type: String
    },
    label: {
      required: true,
      type: String
    },
    value: {
      required: true,
      type: String
    },
    modelValue: {
      required: true,
      type: String
    },
    showError: {
      required: false,
      type: String
    }
  },
  methods: {
    handleClick() {
      this.$emit('click');
    },
  },
  emits: ['update:modelValue', 'click']
}
</script>