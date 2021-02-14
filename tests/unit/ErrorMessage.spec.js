import { shallowMount } from '@vue/test-utils';
import ErrorMessage from '@/components/ui/ErrorMessage.vue';
const slot = 'This is an error message.';

describe('ErrorMessage.vue', () => {
  const wrapper = shallowMount(ErrorMessage, {
    slots: {
      default: slot
    }
  });

  describe('Slots are injected into the component', () => {
    it('Has an error message', () => {
      expect(wrapper.find('p').text()).toContain(slot);
    });
  });
});
