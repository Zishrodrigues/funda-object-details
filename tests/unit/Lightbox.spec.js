import { shallowMount } from '@vue/test-utils';
import Lightbox from '@/components/ui/Lightbox.vue';
const slot = 'img';

describe('Lightbox.vue', () => {
  const wrapper = shallowMount(Lightbox, {
    slots: {
      default: slot
    }
  });

  describe('Slots are injected into the component', () => {
    it('Has an image element', () => {
      expect(wrapper.find('div').text()).toContain(slot);
    });
  });

  describe('closeLightbox is called when button is clicked so the Lightbox is closed', () => {
    it('calls closeLightbox', () => {
      wrapper.vm.closeLightbox = jest.fn();
      wrapper.vm.closeLightbox();
      expect(wrapper.vm.closeLightbox).toHaveBeenCalledTimes(1);
    });
  });
});
