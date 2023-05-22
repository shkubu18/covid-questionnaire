<template>
  <div class="flex flex-col mb-12">
    <label :for="name" class="text-2xl font-bold mb-6">{{ label }}</label>
    <Field
        :id="name"
        :name="name"
        :value="modelValue"
        as="textarea"
        class="border-2 border-gray-600 bg-transparent p-2 focus:outline-none text-xl"
        rows="6"
        @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script>
import {Field} from "vee-validate";

export default {
  components: {
    Field,
  },
  props: {
    name: {
      required: true,
      type: String,
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