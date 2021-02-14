import { shallowMount, mount } from '@vue/test-utils';
import ObjectDetail from '@/views/ObjectDetail.vue';

describe('ObjectDetail.vue', () => {
  it('renders correctly', () => {
    const wrapper = mount(ObjectDetail);
    expect(wrapper.element).toMatchSnapshot();
  });

  it('Should not display an error message as default', async() => {
    const wrapper = shallowMount(ObjectDetail);
    const DOM = wrapper.find('.error');
    expect(DOM.exists()).toBe(false);
  });

  it('Should not be loading on default', async() => {
    const wrapper = shallowMount(ObjectDetail);
    const DOM = wrapper.find('.loading');
    expect(DOM.exists()).toBe(false);
  });
});
