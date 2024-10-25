<script lang="ts" setup>
import { ref } from 'vue';
import PhoneInput from 'base-vue-phone-input';
import { useFocus } from '@vueuse/core';
import { ChevronsUpDown } from 'lucide-vue-next';

const open = ref(false);
const phoneInput = ref(null);
const { focused } = useFocus(phoneInput);

const phone = ref('');
const emit = defineEmits(['update:modelValue']);

function emitPhoneNumber(value: string | Event) {
  if (typeof value === 'string') {
    emit('update:modelValue', value);
  } else if (value.target instanceof HTMLInputElement) {
    emit('update:modelValue', value.target.value);
  }
}
</script>

<template>
  <client-only>
    <PhoneInput
      noUseBrowserLocale
      fetchCountry
      class="flex"
      country-locale="en-EN"
      v-model="phone"
      @input="emitPhoneNumber"
    >
      <!-- Country Selector Dropdown -->
      <template #selector="{ inputValue, updateInputValue, countries }">
        <Popover v-model:open="open">
          <PopoverTrigger>
            <Button
              variant="outline"
              class="flex gap-1 rounded-e-none rounded-s-lg px-3"
            >
              <CommonFlagComponent :country="inputValue" />
              <ChevronsUpDown class="-mr-2 h-4 w-4 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent class="w-[300px] p-0">
            <Command>
              <CommandInput placeholder="Search country..." />
              <CommandEmpty>No country found.</CommandEmpty>
              <CommandList>
                <CommandGroup>
                  <CommandItem
                    v-for="option in countries"
                    :key="option.iso2"
                    :value="option.iso2"
                    class="gap-2"
                    @select="
                      () => {
                        updateInputValue(option.iso2);
                        open = false;
                        focused = true;
                      }
                    "
                  >
                    <FlagComponent :country="option?.iso2" />
                    <span class="flex-1 text-sm">{{ option.name }}</span>
                    <span class="text-foreground/50 text-sm">{{
                      option.dialCode
                    }}</span>
                  </CommandItem>
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </template>

      <!-- Phone Number Input Field -->
      <template #input="{ inputValue, updateInputValue, placeholder }">
        <Input
          ref="phoneInput"
          class="rounded-e-lg rounded-s-none"
          type="text"
          :model-value="inputValue"
          @input="(e: InputEvent) => updateInputValue((e.target as HTMLInputElement).value)"
          :placeholder="placeholder"
        />
      </template>
    </PhoneInput>
  </client-only>
</template>
