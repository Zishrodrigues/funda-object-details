import { shallowMount } from '@vue/test-utils';
import Title from '@/components/ui/Title.vue';
const titleSlot = 'This is a title';
const subTitleSlot = 'This is a subtitle';

describe('Title.vue', () => {
  const wrapper = shallowMount(Title, {
    slots: {
      title: titleSlot,
      subTitle: subTitleSlot
    }
  });

  describe('Slots are injected into the component', () => {
    it('Has a title', () => {
      expect(wrapper.find('h1').text()).toContain(titleSlot);
    });

    it('Has a subtitle', () => {
      expect(wrapper.find('span').text()).toContain(subTitleSlot);
    });
  });
});
