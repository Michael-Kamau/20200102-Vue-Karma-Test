import { expect } from 'chai'
import {createWrapper, shallowMount} from '@vue/test-utils'
import Arithmetic from "../components/views/Arithmetic.vue";
import Render from "../components/views/Render.vue";
import Vue from 'vue';
import Binding from "../components/views/Binding.vue";

describe('Arithmetic.vue', () => {
    it('Checks for existence of the root element with id main', () => {
        const wrapper = shallowMount(Arithmetic)
        expect(wrapper.find('#main').exists()).to.equal(true)
    })

    it('Checks for existence of the button', () => {
        const wrapper = shallowMount(Arithmetic)
        expect(wrapper.find('button').exists()).to.equal(true)

    })
    it('Checks for existence of the input', () => {
        const wrapper = shallowMount(Arithmetic)
        expect(wrapper.find('#myInput').exists()).to.equal(true)

    })


})

describe('Render.vue', () => {
    it(`should render propValue as its text content`, () => {
        const Constructor = Vue.extend(Render);

        const comp = new Constructor({
            propsData: {
                receivedValue: 'Render Test'
            }
        }).$mount();

        expect(comp.$el.textContent)
            .to.equal('Render Test');
    });
});



describe('Binding.vue', () => {
    it(`should update the value of myTeext is changed.`, done => {
        const Constructor = Vue.extend(Binding);
        const comp = new Constructor().$mount();
        comp.myText = 'Test Text';
        Vue.nextTick(() => {
            expect(comp.$el.textContent)
                .to.equal('Test Text');
            done();
        });
    });
});
